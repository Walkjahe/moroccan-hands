# 🇲🇦 Moroccan Hands - Travel Website

> Your gateway to authentic Moroccan experiences

[![Hosted on GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue)](https://pages.github.com/)
[![CMS](https://img.shields.io/badge/CMS-De cap-green)](https://decapcms.org/)

## 📖 About

Moroccan Hands is a beautiful, modern travel website showcasing Morocco's rich culture, stunning destinations, and unforgettable experiences. Built with vanilla HTML, CSS, and JavaScript for optimal performance.

## ✨ Features

- 🎨 Modern, responsive design
- 📱 Mobile-first approach
- 🖼️ Dynamic image galleries
- 📝 Blog with content management
- 🔍 SEO optimized
- ⚡ Fast loading times
- 🎨 Beautiful UI/UX

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **CMS**: Decap CMS (formerly Netlify CMS)
- **Hosting**: GitHub Pages (Free)
- **Version Control**: Git & GitHub

## 🚀 Admin & Content Management

### Accessing the CMS

1. Navigate to your site's `/admin/` page
2. Click "Login with GitHub"
3. Authorize the application
4. Start managing your content!

### Managing Content

From the CMS admin panel, you can:

- ✏️ **Edit Site Settings**: Contact info, social media links, SEO settings
- 📰 **Manage Blog Posts**: Create, edit, and delete articles
- 📸 **Upload Images**: Add  and manage media files
- 🎯 **Update SEO**: Customize meta tags for each page

## 📁 Project Structure

```
moroccan-hands/
│
├── admin/                 # Decap CMS configuration
│   ├── config.yml        # CMS configuration
│   └── index.html        # CMS admin interface
│
├── content/              # Content files
│   └── blog/            # Blog articles (Markdown)
│
├── css/                  # Stylesheets
│   └── style.css        # Main stylesheet
│
├── js/                   # JavaScript files
│   ├── main.js          # Main JavaScript
│   ├── blog-loader.js   # Blog loading logic
│   └── settings-loader.js # Settings loader
│
├── assets/               # Media files
│   └── uploads/         # User-uploaded images
│
├── index.html           # Homepage
├── blog.html            # Blog listing page
├── contact.html         # Contact page
└── site-settings.json   # Site configuration
```

## 🔧 Local Development

### Prerequisites

- Git installed on your machine
- A modern web browser
- (Optional) A local server like `python -m http.server` or Live Server extension

### Running Locally

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/moroccan-hands.git

# Navigate to the project
cd moroccan-hands

# Start a local server (optional, but recommended)
# Python 3
python -m http.server 8000

# Or Python 2
python -m SimpleHTTPServer 8000

# Visit http://localhost:8000 in your browser
```

## 📝 Updating Content

### Option 1: Via CMS (Recommended)
1. Go to `your-site.com/admin/`
2. Login with GitHub
3. Make your changes
4. Save & Publish

### Option 2: Manually
1. Edit files directly in the repository
2. Commit and push changes
3. Changes will be live in a few minutes

## 🎨 Customization

### Changing Colors

Edit `css/style.css` and modify the CSS variables:

```css
:root {
    --color-primary: #C55A2C;
    --color-secondary: #2C7A7B;
    /* ... more variables ... */
}
```

### Adding New Pages

1. Create a new HTML file
2. Link it in the navigation menu
3. Add styling as needed

## 🐛 Troubleshooting

### CMS Login Issues

- Ensure GitHub OAuth App is configured correctly
- Check that your repository name in `admin/config.yml` matches your actual repo
- Verify you have write permissions to the repository

### Images Not Loading

- Check that image paths are correct
- Ensure images are in the `assets/uploads/` directory
- Verify file extensions are lowercase

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👤 Author

**Moroccan Hands  Team**

- Website: [Your Website](https://your-username.github.io/moroccan-hands/)
- GitHub: [@your-username](https://github.com/your-username)

## 🌟 Show your support

Give a ⭐️ if you like this project!

---

Made with ❤️ in Morocco 🇲🇦
