import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { FavoritesContext } from "../context/FavoritesContext";
import { motion } from "framer-motion";
import RecipeCard from "../components/RecipeCard";

const FavoritesPage = () => {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  return (
    <motion.div
      className="max-w-6xl mx-auto p-8"
      initial={{ opacity: 0 }} // Initial state
      animate={{ opacity: 1 }} // Animate to this state
      exit={{ opacity: 0 }} // Exit state
      transition={{ duration: 0.5 }} // Transition duration
    >
      <h1 className="text-4xl font-bold text-center mb-12">
        Your Favorite Recipes
      </h1>

      {favorites.length === 0 ? (
        <p className="text-center text-lg">
          You have no favorite recipes saved.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {favorites.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              id={recipe.id}
              title={recipe.title}
              image={recipe.image}
            />
          ))}
        </div>
      )}
    </motion.div>
  );
};

export default FavoritesPage;
