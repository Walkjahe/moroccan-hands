addEventListener('fetch', event => {
    event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
    const url = new URL(request.url)
    const path = url.pathname

    // 1. Redirect to GitHub for authorization
    if (path === '/auth') {
        const client_id = CLIENT_ID // Defined in Cloudflare Worker Environment Variables
        const redirect_uri = `${url.origin}/callback`
        const state = crypto.randomUUID()

        const params = new URLSearchParams({
            client_id,
            redirect_uri,
            state,
            scope: 'repo user',
        })

        return Response.redirect(`https://github.com/login/oauth/authorize?${params}`, 302)
    }

    // 2. Handle the callback from GitHub
    if (path === '/callback') {
        const code = url.searchParams.get('code')

        if (!code) {
            return new Response('Missing code param', { status: 400 })
        }

        try {
            // Exchange code for access token
            const response = await fetch('https://github.com/login/oauth/access_token', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'accept': 'application/json',
                    'user-agent': 'cloudflare-worker-github-oauth'
                },
                body: JSON.stringify({
                    client_id: CLIENT_ID, // Defined in Cloudflare Worker Environment Variables
                    client_secret: CLIENT_SECRET, // Defined in Cloudflare Worker Environment Variables
                    code,
                }),
            })

            const result = await response.json()

            if (result.error) {
                return new Response(JSON.stringify(result), { status: 401 })
            }

            const token = result.access_token
            const provider = 'github'

            // Return the script that sends the token back to the CMS window
            const content = `
        <script>
          (function() {
            function receiveMessage(e) {
              console.log("receiveMessage %o", e);
              
              // Send the token to the CMS
              window.opener.postMessage(
                'authorization:${provider}:success:${JSON.stringify({
                token: '${token}',
                provider: '${provider}'
            })}', 
                e.origin
              );
            }
            window.addEventListener("message", receiveMessage, false);
            
            // Notify the opener that we are ready
            window.opener.postMessage("authorizing:${provider}", "*");
          })()
        </script>
      `

            return new Response(content, {
                headers: {
                    'content-type': 'text/html;charset=UTF-8',
                },
            })
        } catch (error) {
            return new Response(error.message, { status: 500 })
        }
    }

    return new Response('Not Found', { status: 404 })
}
