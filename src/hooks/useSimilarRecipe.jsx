import { useEffect, useState } from "react";
import { getSimilarRecipes } from "../services/recipeService";

const useSimilarRecipe = (id, number) => {
  const [similarRecipes, setSimilarRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDetails = async () => {
      {
        try {
          setLoading(true);
          const data = await getSimilarRecipes(id, number);
          setSimilarRecipes(data);
        } catch (error) {
          setError("There was an error trying to fetch the recipe details.");
        } finally {
          setLoading(false);
        }
      }
    };
    if (id) {
      getDetails();
    }
  }, [id]);
  return { similarRecipes, loading, error };
};

export default useSimilarRecipe;
