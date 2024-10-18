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
      <div className="flex flex-col text-center text-2xl lg:text-3xl gap-4 mt-16 px-4 w-full max-w-md md:max-w-xl lg:w-[600px]">
        <p>Find Your Next Favorite Recipe</p>
        {/* SEARCH INPUT */}
        <SearchInput />
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between my-16 lg:mt-28 bg-white px-4">
        {/* Benefits Section */}
        <ul className="w-full lg:w-1/2 space-y-4 text-lg lg:text-xl text-textPrimary mb-8 lg:mb-0">
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
          className="w-full lg:w-1/2 max-w-xs lg:max-w-sm"
          src={cookingImage}
          alt="two people cooking together"
        />
      </div>
    </motion.div>
  );
}

export default HomePage;
