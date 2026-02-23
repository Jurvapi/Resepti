# 🍽️ What Should I Eat Today? - Recipe Decision Helper

A Flask web application that helps you decide what to eat today! No more standing in front of the fridge wondering what to cook.

## Features

- **Time-based suggestions**: Automatically suggests breakfast, lunch, dinner, or snacks based on the current time
- **Surprise me**: Get a completely random recipe when you can't decide
- **Quick recipes**: Find recipes that take 10 minutes or less
- **Category browsing**: Browse recipes by meal type (breakfast, lunch, dinner, snacks)
- **Search functionality**: Search for recipes by ingredient or name
- **Responsive design**: Works on desktop and mobile devices

## Installation & Setup

### 1. Navigate to the RECIPE directory

```bash
cd RECIPE
```

### 2. Activate the virtual environment

```bash
source recipe_env/bin/activate
```

### 3. Install dependencies (if not already installed)

```bash
pip install -r requirements.txt
```

### 4. Run the application

```bash
python app.py
```

### 5. Open your browser

Visit: http://localhost:5000

## How to Use

1. **Let time decide**: The app will suggest meal types based on the current time of day
2. **Feeling adventurous?**: Click "Surprise Me!" for a random recipe
3. **In a hurry?**: Use "Something Quick" for recipes ≤ 10 minutes
4. **Browse by category**: Click on Breakfast, Lunch, Dinner, or Snack buttons
5. **Search specifically**: Use the search bar to find recipes with specific ingredients

## API Endpoints

- `GET /` - Main application page
- `GET /random-recipe` - Get a random recipe from any category
- `GET /recipe/<category>` - Get a random recipe from a specific category
- `GET /quick-recipes` - Get recipes that take ≤ 10 minutes
- `GET /search?q=<query>` - Search recipes by ingredient or name
- `GET /all-recipes` - Get all recipes organized by category

## Extending the App

### Adding New Recipes

You can easily add more recipes by editing the `RECIPES` dictionary in `app.py`. Each recipe should have:

- `name`: Recipe title
- `time`: Cooking time in minutes
- `difficulty`: "Easy", "Medium", or "Hard"
- `ingredients`: List of ingredients
- `instructions`: Cooking instructions

### Adding New Categories

Add new meal categories by creating new keys in the `RECIPES` dictionary and updating the frontend accordingly.

## Deactivating the Virtual Environment

When you're done, deactivate the virtual environment:

```bash
deactivate
```

## Troubleshooting

- **Port already in use**: Change the port in `app.py` (last line): `app.run(debug=True, port=5001)`
- **Flask not found**: Make sure you've activated the virtual environment: `source recipe_env/bin/activate`
- **No recipes showing**: Check the browser console for JavaScript errors

## Future Enhancements

- Add recipe ratings and favorites
- Integrate with a database for persistent storage
- Add user accounts and personal recipe collections
- Include nutritional information
- Add shopping list generation
- Integrate with grocery delivery APIs

Never wonder what to eat again! 🎉
