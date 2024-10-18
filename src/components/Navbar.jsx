import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { logout } from "../firebase/auth";
import { toast } from "react-toastify";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion"; // Import motion from framer-motion

function Navbar() {
  const { currentUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false); // For toggling the mobile menu

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Successfully Logged Out!");
    } catch (error) {
      console.log(error);
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Framer Motion variants for the mobile menu animation
  const menuVariants = {
    hidden: { opacity: 1, x: "-100%" }, // Initially off-screen
    visible: { opacity: 1, x: "0%" }, // Slide in and fade in
    exit: { opacity: 0, x: "-100%" }, // Slide out and fade out
  };

  return (
    <nav className="bg-primary h-[65px] flex items-center justify-between px-6 lg:px-12 relative z-10">
      {/* Left Side - Links */}
      <div className="flex items-center">
        <h2 className="text-textPrimary font-bold text-2xl">
          <Link to="/">YumYum</Link>
        </h2>
        <div className="hidden lg:flex items-center space-x-9 ml-12">
          <p className="text-white hover:text-gray-200">
            <Link to="/">Home</Link>
          </p>
          <p className="text-white hover:text-gray-200">
            <Link to="/favorites">Favorites</Link>
          </p>
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div className="lg:hidden flex items-center z-20">
        <button onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="text-white text-2xl" />
          ) : (
            <FaBars className="text-white text-2xl" />
          )}
        </button>
      </div>

      {/* Right Side - Auth Buttons (Desktop Only) */}
      <div className="hidden lg:flex items-center">
        {currentUser ? (
          <button
            onClick={handleLogout}
            className="bg-textPrimary hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-textPrimary hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded">
              Sign In
            </button>
          </Link>
        )}
      </div>

      {/* Animated Mobile Menu */}
      <motion.div
        className="lg:hidden absolute top-[65px] left-0 w-full bg-primary text-white py-4 z-10"
        initial="hidden"
        animate={isOpen ? "visible" : "hidden"}
        exit="exit"
        variants={menuVariants}
        transition={{ duration: 0.5 }} // Smooth transition
      >
        <div className="flex flex-col items-center space-y-6">
          <p className="hover:text-gray-200">
            <Link to="/" onClick={toggleMenu}>
              Home
            </Link>
          </p>
          <p className="hover:text-gray-200">
            <Link to="/favorites" onClick={toggleMenu}>
              Favorites
            </Link>
          </p>
          {currentUser ? (
            <button
              onClick={() => {
                handleLogout();
                toggleMenu();
              }}
              className="bg-textPrimary hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded"
            >
              Logout
            </button>
          ) : (
            <Link to="/login" onClick={toggleMenu}>
              <button className="bg-textPrimary hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </motion.div>
    </nav>
  );
}

export default Navbar;
