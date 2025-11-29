// Settings Loader - Loads site settings from JSON file
(function () {
    fetch('site-settings.json')
        .then(response => response.json())
        .then(settings => {
            // Update contact email elements
            const emailElements = document.querySelectorAll('[data-contact-email]');
            emailElements.forEach(el => el.textContent = settings.contact.email);

            // Update contact phone elements
            const phoneElements = document.querySelectorAll('[data-contact-phone]');
            phoneElements.forEach(el => el.textContent = settings.contact.phone);

            // Update contact address elements
            const addressElements = document.querySelectorAll('[data-contact-address]');
            addressElements.forEach(el => el.textContent = settings.contact.address);

            // Update page title with site name
            if (settings.seo && settings.seo.site_name) {
                document.title = document.title.replace('Moroccan Hands', settings.seo.site_name);
            }
        })
        .catch(error => console.log('Settings file not found or error loading:', error));
})();
