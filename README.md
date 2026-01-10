# CS Finanzberatung - Static Website

This repository contains the personal homepage for CS Finanzberatung - Corinne Walser-Schwarzentruber.

## Live Website

The website is a static HTML5/CSS3 site and can be deployed directly to GitHub Pages.

## Local Development

To view the website locally:

1. Open `index.html` in your web browser
2. Or use a simple HTTP server:
   ```bash
   python3 -m http.server 8000
   # or
   npx serve
   ```

## GitHub Pages Deployment

### Method 1: Automated with GitHub Actions

1. Go to your repository Settings
2. Navigate to "Pages" section
3. Under "Source", select "GitHub Actions"
4. The workflow file `.github/workflows/deploy.yml` will automatically deploy on push to main

### Method 2: Manual Deployment

1. Go to your repository Settings
2. Navigate to "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Select "main" branch and "/ (root)" folder
5. Click "Save"

Your site will be available at: `https://[username].github.io/cs-finanzberatung`

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
3. GitHub Pages will automatically update (if using automated deployment)
