import { useEffect, useState } from "react";
import { searchRecipe } from "../services/recipeService";

const useSearchRecipe = (query, number) => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getRecipes = async () => {
      {
        try {
          setLoading(true);
          const data = await searchRecipe(query, number);
          setRecipes(data.results);
        } catch (error) {
          setError("There was an error trying to fetch recipes.");
        } finally {
          setLoading(false);
        }
      }
    };
    if (query) {
      getRecipes();
    }
  }, [query]);
  return { recipes, loading, error };
};

export default useSearchRecipe;
