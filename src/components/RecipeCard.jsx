import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function RecipeCard({ id, title, image }) {
  const navigate = useNavigate();
  const openRecipe = () => {
    navigate(`/recipe/${id}`);
  };
  return (
    <motion.div
      key={id}
      onClick={() => navigate(`/recipe/${id}`)}
      className="border border-gray-200 rounded-lg shadow-md overflow-hidden cursor-pointer"
      whileHover={{ scale: 1.05 }} // Scale up on hover
      transition={{ type: "tween", stiffness: 300 }} // Transition properties
    >
      {/* Recipe Image */}
      {image && (
        <img src={image} alt={title} className="w-full h-40 object-cover" />
      )}

      {/* Recipe Info */}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2 truncate">{title}</h2>
        <motion.div>
          <p className="text-primary hover:text-primary-dark">View Recipe</p>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default RecipeCard;
