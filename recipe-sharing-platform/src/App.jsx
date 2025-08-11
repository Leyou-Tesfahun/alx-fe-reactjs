import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const [recipes, setRecipes] = useState([
    {
      id: 1,
      title: "Classic Margherita Pizza",
      description: "Traditional Italian pizza with fresh basil and mozzarella",
      ingredients: ["Pizza dough", "Tomato sauce", "Fresh mozzarella", "Basil leaves"],
      prepTime: "30 mins"
    },
    {
      id: 2,
      title: "Chocolate Chip Cookies",
      description: "Soft and chewy homemade cookies",
      ingredients: ["Flour", "Butter", "Chocolate chips", "Sugar", "Eggs"],
      prepTime: "45 mins"
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Header Section */}
      <header className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-4">
          <img src={viteLogo} className="w-12 h-12" alt="Vite logo" />
          <h1 className="text-2xl font-bold text-gray-800">RecipeShare</h1>
        </div>
        <button 
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          onClick={() => setCount(count + 1)}
        >
          Total Views: {count}
        </button>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Featured Recipes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {recipes.map(recipe => (
              <div key={recipe.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{recipe.title}</h3>
                  <p className="text-gray-600 mb-4">{recipe.description}</p>
                  <div className="mb-4">
                    <h4 className="font-medium text-gray-700 mb-2">Ingredients:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {recipe.ingredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-sm text-gray-500">Prep time: {recipe.prepTime}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Add New Recipe Section */}
        <section className="bg-white rounded-xl shadow-md p-6">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">Share Your Recipe</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 mb-2">Recipe Name</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter recipe name"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2">Description</label>
              <textarea 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                rows="3"
                placeholder="Describe your recipe"
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Submit Recipe
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500">
        <p>Click on the Vite and React logos to learn more about the technologies used</p>
        <div className="flex justify-center gap-4 mt-4">
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="w-8 h-8" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img src={reactLogo} className="w-8 h-8 animate-spin-slow" alt="React logo" />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
