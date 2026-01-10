# CS Finanzberatung - Website

This repository contains the homepage for CS Finanzberatung - Corinne Walser-Schwarzentruber.

## Features

- ✅ Fully static HTML5/CSS3 website
- ✅ Responsive design for mobile and desktop
- ✅ Uses Tailwind CSS via CDN (no build step required)
- ✅ Clean JavaScript for navigation
- ✅ Fast loading times
- ✅ No dependencies or build tools needed
- ✅ Ready for GitHub Pages deployment

## Technologies

- HTML5
- CSS3 (with Tailwind CSS via CDN)
- Vanilla JavaScript
- Google Fonts

## Structure

- `index.html` - Main website file (contains all content and functionality)
- `public/images/` - Image assets
- `public/robots.txt` - SEO configuration

## Maintenance

This is now a simple static website. To update content:

1. Edit `index.html` directly
2. Commit and push changes
3. GitHub Pages will automatically update (automated in workflow file `.github/workflows/deploy.yml`)

## Local Development

To view the website locally:

1. Open `index.html` in your web browser
2. Or use a simple HTTP server:
   ```bash
   python3 -m http.server 8000
   # or
   npx serve
   ```
