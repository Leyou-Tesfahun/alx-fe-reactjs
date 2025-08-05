import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],

  // Add this action to set all recipes at once
  setRecipes: (recipes) => set({ recipes }),

  favorites: [],

  addFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.includes(recipeId)
      ? state.favorites
      : [...state.favorites, recipeId]
  })),

  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),

  recommendations: [],

  generateRecommendations: () => set(state => {
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),

  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(r => r.id === updatedRecipe.id ? updatedRecipe : r)
  })),

  deleteRecipe: (id) => set(state => ({
    recipes: state.recipes.filter(r => r.id !== id),
    favorites: state.favorites.filter(fid => fid !== id)
  })),
}));

export default useRecipeStore;

