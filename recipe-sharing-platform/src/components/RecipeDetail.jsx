import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import recipeData from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const foundRecipe = recipeData.find(r => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="inline-block mb-6 text-blue-500 hover:text-blue-700">
        &larr; Back to Recipes
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img 
          src={recipe.image} 
          alt={recipe.title} 
          className="w-full h-64 md:h-80 object-cover"
        />

        <div className="p-6 md:p-8">
          <h1 className="text-3xl font-bold mb-4 text-gray-800">{recipe.title}</h1>
          <p className="text-gray-600 mb-6">{recipe.summary}</p>

          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
                Ingredients
              </h2>
              <ul className="space-y-2">
                {recipe.ingredients?.map((ingredient, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 mr-2"></span>
                    <span className="text-gray-700">{ingredient}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4 text-gray-800 border-b pb-2">
                Instructions
              </h2>
              <ol className="space-y-4">
                {recipe.instructions?.map((step, index) => (
                  <li key={index} className="flex">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500 text-white text-sm font-bold mr-3 flex-shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-gray-700">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
