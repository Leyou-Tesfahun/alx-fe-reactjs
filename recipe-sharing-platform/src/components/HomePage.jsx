// src/components/HomePage.jsx
// src/components/HomePage.jsx
import React, { useState, useEffect } from 'react'; // ✅ Required hooks
import { Link } from 'react-router-dom'; // ✅ For navigation
import recipesData from '../data.json'; // ✅ Assuming data.json is at src/data.json

function HomePage() {
  const [recipes, setRecipes] = useState([]); // ✅ Local state for recipes

  useEffect(() => {
    // Simulate fetching data (could be replaced with real API)
    setRecipes(recipesData);
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
      {recipes.map((recipe) => (
        <Link to={`/recipe/${recipe.id}`} key={recipe.id}>
          <div className="bg-white rounded shadow p-4 hover:shadow-lg transition cursor-pointer">
            <img
              src={recipe.image}
              alt={recipe.name}
              className="w-full h-48 object-cover rounded"
            />
            <h2 className="text-xl font-semibold mt-2">{recipe.name}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
