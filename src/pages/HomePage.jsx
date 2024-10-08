import React from "react";
import cookingImage from "../images/homepage-cooking.svg";
import CheckmarkIcon from "../components/CheckmarkIcon";
import SearchInput from "../components/SearchInput";
import { motion } from "framer-motion";

function HomePage() {
  return (
    <motion.div
      className="flex flex-col items-center justify-center"
      initial={{ opacity: 0 }} // Initial state
      animate={{ opacity: 1 }} // Animate to this state
      exit={{ opacity: 0 }} // Exit state
      transition={{ duration: 0.5 }} // Transition duration
    >
      <div className="flex flex-col text-center text-3xl gap-4 mt-16">
        <p>Find Your Next Favorite Recipe</p>
        {/* SEARCH INPUT */}
        <SearchInput />
      </div>
      <div className="flex items-center justify-between my-24  bg-white">
        {/* Benefits Section */}
        <ul className="w-1/2 space-y-4 text-xl text-textPrimary">
          <li className="flex items-start">
            <CheckmarkIcon className="w-6 h-6 mr-2 text-green-500" />
            Discover thousands of recipes tailored to your taste.
          </li>
          <li className="flex items-start">
            <CheckmarkIcon className="w-6 h-6 mr-2 text-green-500" />
            Easy-to-follow recipes for all skill levels.
          </li>
          <li className="flex items-start">
            <CheckmarkIcon className="w-6 h-6 mr-2 text-green-500" />
            Save your favorite recipes and build a personal cookbook.
          </li>
        </ul>

        {/* Image Section */}
        <img
          className="w-1/2 max-w-sm"
          src={cookingImage}
          alt="two people cooking together"
        />
      </div>
    </motion.div>
  );
}

export default HomePage;
