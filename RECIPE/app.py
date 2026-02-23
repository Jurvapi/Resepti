from flask import Flask, render_template, request, jsonify
import random
from datetime import datetime

app = Flask(__name__)

# Sample recipe data - you can expand this or load from a database
RECIPES = {
    "breakfast": [
        {
            "name": "Pirre's Perfect Scrambled Eggs",
            "time": 5,
            "difficulty": "Easy",
            "ingredients": ["3 eggs", "2 tbsp butter", "salt", "pepper", "chives"],
            "instructions": "Whisk eggs, melt butter in pan, add eggs on low heat, stir gently until creamy."
        },
        {
            "name": "Pirre's Overnight Oats",
            "time": 2,
            "difficulty": "Easy",
            "ingredients": ["1/2 cup oats", "1/2 cup milk", "1 tbsp chia seeds", "honey", "berries"],
            "instructions": "Mix all ingredients, refrigerate overnight. Add toppings in the morning."
        },
        {
            "name": "Pirre's Avocado Toast",
            "time": 5,
            "difficulty": "Easy",
            "ingredients": ["2 slices bread", "1 ripe avocado", "salt", "pepper", "lemon juice", "red pepper flakes"],
            "instructions": "Toast bread, mash avocado with seasonings, spread on toast."
        }
    ],
    "lunch": [
        {
            "name": "Pirre's Quick Caesar Salad",
            "time": 10,
            "difficulty": "Easy",
            "ingredients": ["romaine lettuce", "caesar dressing", "parmesan cheese", "croutons", "chicken breast (optional)"],
            "instructions": "Wash and chop lettuce, toss with dressing, add toppings."
        },
        {
            "name": "Pirre's Grilled Cheese & Tomato Soup",
            "time": 15,
            "difficulty": "Easy",
            "ingredients": ["bread", "cheese", "butter", "canned tomato soup"],
            "instructions": "Make grilled cheese in pan with butter, heat soup, serve together."
        },
        {
            "name": "Pirre's Mediterranean Bowl",
            "time": 12,
            "difficulty": "Easy",
            "ingredients": ["quinoa", "cucumber", "tomatoes", "feta cheese", "olives", "olive oil", "lemon"],
            "instructions": "Cook quinoa, chop vegetables, combine with cheese and olives, dress with oil and lemon."
        }
    ],
    "dinner": [
        {
            "name": "Pirre's One-Pot Pasta",
            "time": 20,
            "difficulty": "Easy",
            "ingredients": ["pasta", "canned tomatoes", "garlic", "onion", "olive oil", "basil", "parmesan"],
            "instructions": "Saute onion and garlic, add tomatoes and pasta with water, cook until tender."
        },
        {
            "name": "Pirre's Honey Garlic Salmon",
            "time": 25,
            "difficulty": "Medium",
            "ingredients": ["salmon fillets", "honey", "soy sauce", "garlic", "ginger", "rice", "broccoli"],
            "instructions": "Mix honey, soy sauce, garlic. Bake salmon with glaze, serve with rice and steamed broccoli."
        },
        {
            "name": "Pirre's Chicken Stir Fry",
            "time": 18,
            "difficulty": "Medium",
            "ingredients": ["chicken breast", "mixed vegetables", "soy sauce", "garlic", "ginger", "rice"],
            "instructions": "Cut chicken, stir fry with vegetables, add sauce, serve over rice."
        }
    ],
    "snacks": [
        {
            "name": "Pirre's Hummus & Veggies",
            "time": 3,
            "difficulty": "Easy",
            "ingredients": ["hummus", "carrots", "cucumber", "bell peppers"],
            "instructions": "Cut vegetables into sticks, serve with hummus for dipping."
        },
        {
            "name": "Pirre's Greek Yogurt Parfait",
            "time": 5,
            "difficulty": "Easy",
            "ingredients": ["greek yogurt", "granola", "berries", "honey"],
            "instructions": "Layer yogurt, granola, and berries. Drizzle with honey."
        },
        {
            "name": "Pirre's Energy Balls",
            "time": 10,
            "difficulty": "Easy",
            "ingredients": ["oats", "peanut butter", "honey", "chocolate chips", "chia seeds"],
            "instructions": "Mix all ingredients, roll into balls, chill for 30 minutes."
        }
    ]
}

@app.route('/')
def home():
    """Main page with options to help decide what to eat"""
    current_hour = datetime.now().hour
    
    # Suggest meal type based on time of day
    if 6 <= current_hour < 11:
        suggested_meal = "breakfast"
        time_greeting = "Good morning! How about some breakfast?"
    elif 11 <= current_hour < 16:
        suggested_meal = "lunch"
        time_greeting = "It's lunch time! Let's find you something delicious."
    elif 16 <= current_hour < 21:
        suggested_meal = "dinner"
        time_greeting = "Dinner time! Let's cook something great."
    else:
        suggested_meal = "snacks"
        time_greeting = "Late night snack? I've got ideas!"
    
    return render_template('index.html', 
                         suggested_meal=suggested_meal,
                         time_greeting=time_greeting)

@app.route('/random-recipe')
def random_recipe():
    """Get a completely random recipe from any category"""
    all_recipes = []
    for category, recipes in RECIPES.items():
        for recipe in recipes:
            recipe_copy = recipe.copy()
            recipe_copy['category'] = category
            all_recipes.append(recipe_copy)
    
    random_recipe = random.choice(all_recipes)
    return jsonify(random_recipe)

@app.route('/recipe/<category>')
def get_category_recipe(category):
    """Get a random recipe from a specific category"""
    if category not in RECIPES:
        return jsonify({"error": "Category not found"}), 404
    
    recipe = random.choice(RECIPES[category])
    recipe_copy = recipe.copy()
    recipe_copy['category'] = category
    return jsonify(recipe_copy)

@app.route('/quick-recipes')
def quick_recipes():
    """Get recipes that take 10 minutes or less"""
    quick_recipes = []
    for category, recipes in RECIPES.items():
        for recipe in recipes:
            if recipe['time'] <= 10:
                recipe_copy = recipe.copy()
                recipe_copy['category'] = category
                quick_recipes.append(recipe_copy)
    
    if quick_recipes:
        return jsonify(random.choice(quick_recipes))
    else:
        return jsonify({"error": "No quick recipes found"}), 404

@app.route('/search')
def search_recipes():
    """Search recipes by ingredient or name"""
    query = request.args.get('q', '').lower()
    
    if not query:
        return jsonify({"error": "No search query provided"}), 400
    
    matching_recipes = []
    for category, recipes in RECIPES.items():
        for recipe in recipes:
            # Search in recipe name and ingredients
            if (query in recipe['name'].lower() or 
                any(query in ingredient.lower() for ingredient in recipe['ingredients'])):
                recipe_copy = recipe.copy()
                recipe_copy['category'] = category
                matching_recipes.append(recipe_copy)
    
    return jsonify(matching_recipes)

@app.route('/all-recipes')
def all_recipes():
    """Get all recipes organized by category"""
    return jsonify(RECIPES)

if __name__ == '__main__':
    app.run(debug=True, port=5000)