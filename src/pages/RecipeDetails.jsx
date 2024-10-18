import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import useSimilarRecipe from "../hooks/useSimilarRecipe";
import RecipeCard from "../components/RecipeCard";
import useRecipeDetails from "../hooks/useRecipeDetails";
import { FavoritesContext } from "../context/FavoritesContext";
import { motion } from "framer-motion";
import { AuthContext } from "../context/AuthContext";
import { doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { addFavorite, removeFavorite } from "../firebase/favorites";

function RecipeDetails() {
  const { id } = useParams();
  const { similarRecipes } = useSimilarRecipe(id, 3);
  const { details, loading, error } = useRecipeDetails(id);

  // handles the favorite button
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const exists = favorites.some((favorite) => favorite.id == id);

  const { currentUser } = useContext(AuthContext);

  const handleAddFavorite = async () => {
    if (!exists && currentUser) {
      await addFavorite(currentUser.uid, details);
      setFavorites([...favorites, details]);
    }
  };
  const handleRemoveFavorite = async () => {
    if (exists && currentUser) {
      await removeFavorite(currentUser.uid, details);

      const filteredFavorites = favorites.filter(
        (favorite) => favorite.id != id
      );
      setFavorites(filteredFavorites);
    }
  };

  return (
    <>
      {!loading ? (
        <motion.div
          className="max-w-5xl mx-auto p-6"
          initial={{ opacity: 0 }} // Initial state
          animate={{ opacity: 1 }} // Animate to this state
          exit={{ opacity: 0 }} // Exit state
          transition={{ duration: 0.5 }} // Transition duration
        >
          {/* Top Section */}
          <div className="mb-8">
            <img
              src={details.image}
              alt="Recipe image"
              className="w-full h-auto rounded-lg shadow-md"
            />
            <h1 className="text-4xl font-bold mt-6">{details.title}</h1>
            <p
              dangerouslySetInnerHTML={{ __html: details.summary }}
              className="text-gray-600 text-lg mt-2"
            ></p>
            {/* Key Details */}
            <div className="mt-4 flex space-x-8 text-gray-700">
              <div>
                <strong>Prep Time:</strong>{" "}
                {details.preperationMinutes && details.preperationMinutes}
              </div>
              <div>
                <strong>Cook Time:</strong> {details.readyInMinutes}
              </div>
              <div>
                <strong>Servings:</strong> {details.servings}
              </div>
            </div>
          </div>
          {/* Ingredients List */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
            <ul className="list-none">
              {details.extendedIngredients &&
                details.extendedIngredients.map((ingredient, index) => (
                  <li key={ingredient.id}>
                    <input type="checkbox" id="ingredient2" />
                    <label className="ml-2" htmlFor="ingredient2">
                      {`${ingredient.amount} ${ingredient.unit} ${ingredient.name}`}
                    </label>
                  </li>
                ))}
            </ul>
          </div>
          {/* Instructions */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Instructions</h2>
            <ol className="list-decimal ml-6 space-y-2">
              {details.analyzedInstructions &&
                details.analyzedInstructions[0].steps.map((step, index) => (
                  <li key={step.number}>{step.step}</li>
                ))}
            </ol>
          </div>
          {/* Save to Favorites Button */}
          {exists ? (
            <button
              onClick={handleRemoveFavorite}
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
            >
              Remove from Favorites
            </button>
          ) : (
            <button
              onClick={handleAddFavorite}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
            >
              Save to Favorites
            </button>
          )}
          {/* Related Recipes Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Related Recipes</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarRecipes.map((recipe) => (
                <RecipeCard
                  key={recipe.id}
                  id={recipe.id}
                  title={recipe.title}
                />
              ))}
            </div>
          </div>
        </motion.div>
      ) : (
        ""
      )}
    </>
  );
}

export default RecipeDetails;
