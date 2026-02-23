# Resepti - Recipe Suggestion App 🐰

A fun and interactive recipe suggestion website that helps you decide what to eat! Built with vanilla HTML, CSS, and JavaScript - perfect for GitHub Pages deployment.

## Features

- 🎲 **Random Recipe Generator** - Get surprised with any recipe from our collection
- ⚡ **Quick Recipes** - Find recipes that take 10 minutes or less
- 🕐 **Time-Based Suggestions** - Smart meal suggestions based on the current time of day
- 🔍 **Recipe Search** - Search by ingredient names or recipe titles
- 📱 **Responsive Design** - Works perfectly on desktop and mobile devices
- 🎨 **Beautiful UI** - Gradient backgrounds and smooth animations

## Recipe Categories

- **Breakfast** 🍳 - Perfect scrambled eggs, overnight oats, avocado toast
- **Lunch** 🥗 - Caesar salad, grilled cheese & soup, Mediterranean bowl
- **Dinner** 🍝 - One-pot pasta, honey garlic salmon, chicken stir fry
- **Snacks** 🍎 - Hummus & veggies, Greek yogurt parfait, energy balls

## How to Deploy to GitHub Pages

### Method 1: Direct Upload

1. Fork or download this repository
2. Make sure `index.html` is in the root directory
3. Go to your repository Settings → Pages
4. Select "Deploy from a branch"
5. Choose `main` branch and `/ (root)`
6. Your app will be available at `https://yourusername.github.io/repository-name`

### Method 2: GitHub Actions (Automatic)

1. Push your code to GitHub
2. GitHub Pages will automatically detect the `index.html` file
3. Your site will be deployed within a few minutes

## Local Development

To test the app locally:

```bash
# Option 1: Simple Python server
python -m http.server 8000

# Option 2: Using Node.js
npx serve .

# Option 3: Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Technical Details

This app was converted from a Python Flask application to a static site using:

- **Pure JavaScript** for all functionality (no frameworks)
- **CSS Grid & Flexbox** for responsive layout
- **CSS Animations** for smooth user interactions
- **Local Storage** ready (can be added for favorites/history)

## File Structure

```
/
├── index.html          # Main application file (complete static app)
├── README.md          # This file
├── package.json       # For Playwright testing
├── playwright.config.ts
└── tests/            # Automated tests
```

## Credits

Made with 💜 by Maaret & Pirre | Vibekoodattu reseptisovellus

---

## Previous Flask Version

The original Flask version is available in the `/RECIPE` directory and can be deployed to services like Railway, Render, or Heroku for server-side functionality.
