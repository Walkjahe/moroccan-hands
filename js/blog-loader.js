// Blog Loader - Dynamically loads blog articles from markdown files
(function () {
    const blogContainer = document.getElementById('blog-container');

    if (!blogContainer) return;

    // Sample blog data - in production this would come from parsing markdown files
    const articles = [
        {
            title: "The Art of Moroccan Tea",
            category: "Culture",
            date: "Oct 12, 2024",
            excerpt: "Discover the traditions and etiquette behind the famous Moroccan mint tea ceremony.",
            image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
            slug: "moroccan-tea"
        }
    ];

    // Generate blog cards
    const blogGrid = document.createElement('div');
    blogGrid.className = 'blog-grid';

    articles.forEach(article => {
        const articleCard = `
            <article class="article-card">
                <div class="article-image" style="background-image: url('${article.image}');"></div>
                <div class="article-content">
                    <div class="article-meta">${article.category} • ${article.date}</div>
                    <h3>${article.title}</h3>
                    <p class="article-excerpt">${article.excerpt}</p>
                    <a href="article-${article.slug}.html" class="read-more">Read Article</a>
                </div>
            </article>
        `;
        blogGrid.innerHTML += articleCard;
    });

    blogContainer.appendChild(blogGrid);
})();
