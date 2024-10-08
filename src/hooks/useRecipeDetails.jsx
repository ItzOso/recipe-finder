import { useEffect, useState } from "react";
import { getRecipeDetails } from "../services/recipeService";

const useRecipeDetails = (id) => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getDetails = async () => {
      {
        try {
          setLoading(true);
          const data = await getRecipeDetails(id);
          setDetails(data);
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
  return { details, loading, error };
};

export default useRecipeDetails;
