// src/components/HomePage.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import recipesData from '../data.json';

function HomePage() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
