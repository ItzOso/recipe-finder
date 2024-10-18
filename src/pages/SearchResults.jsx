import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import useSearchRecipe from "../hooks/useSearchRecipe";
import RecipeCard from "../components/RecipeCard";
import SearchInput from "../components/SearchInput";
import { motion } from "framer-motion";

function SearchResults() {
  const { query } = useParams();
  const { recipes, loading, error } = useSearchRecipe(query, 20);

  return (
    <motion.div
      className="p-8"
      initial={{ opacity: 0 }} // Initial state
      animate={{ opacity: 1 }} // Animate to this state
      exit={{ opacity: 0 }} // Exit state
      transition={{ duration: 0.5 }} // Transition duration
    >
      <div className="w-full max-w-md">
        <SearchInput />
      </div>
      <p className="text-2xl font-semibold pb-4 mt-4">
        Here are the recipes we found for {query}...
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {recipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            id={recipe.id}
            title={recipe.title}
            image={recipe.image}
          />
        ))}
      </div>
    </motion.div>
  );
}

export default SearchResults;
