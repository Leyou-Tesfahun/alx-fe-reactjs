import { useState } from 'react';
import AddRecipeForm from './AddRecipeForm';

const HomePage = () => {
  const [showForm, setShowForm] = useState(false);
  const [recipes, setRecipes] = useState(recipeData);

  const handleAddRecipe = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
    setShowForm(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* ... existing recipe list code ... */}
      
      <div className="text-center mt-8">
        {!showForm ? (
          <button
            onClick={() => setShowForm(true)}
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            Add New Recipe
          </button>
        ) : (
          <AddRecipeForm onAddRecipe={handleAddRecipe} />
        )}
      </div>
    </div>
  );
};
