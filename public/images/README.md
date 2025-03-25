# Image Repository Structure

This directory contains all images used in the photography website. Each subdirectory serves a specific purpose:

## Directory Structure

```
public/images/
├── branding/        # Logo and brand-related images
│   ├── logo.png     # Main website logo
│   └── favicon.ico  # Website favicon
│
├── hero/           # Hero section background images
│   └── hero-bg.jpg # Main hero background image
│
├── gallery/        # Portfolio and gallery images
│   ├── gallery-1.jpg
│   ├── gallery-2.jpg
│   └── ...
│
├── about/         # Images used in the About section
│   └── about-image.jpg
│
└── services/      # Images for different services
    ├── wedding.jpg
    ├── portrait.jpg
    └── event.jpg
```

## Image Guidelines

1. **File Formats**
   - Use `.jpg` for photographs
   - Use `.png` for logos and images requiring transparency
   - Use `.svg` for icons and scalable graphics

2. **Image Sizes**
   - Hero images: 1920x1080px minimum
   - Gallery images: 800x1200px (portrait) or 1200x800px (landscape)
   - Service images: 800x600px
   - Logo: 200x200px (with transparent background)

3. **File Naming**
   - Use lowercase letters
   - Use hyphens instead of spaces
   - Be descriptive but concise
   - Include dimensions in filename if relevant

4. **Optimization**
   - Compress all images before adding
   - Keep file sizes under 500KB when possible
   - Use WebP format for alternative versions

## Usage

When adding new images:
1. Place them in the appropriate subdirectory
2. Follow the naming conventions
3. Optimize the images before committing
4. Update this README if adding new categories
