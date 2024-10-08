import React, { useContext, useEffect } from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, json } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchResults from "./pages/SearchResults";
import RecipeDetails from "./pages/RecipeDetails";
import FavoritesPage from "./pages/FavoritesPage";
import { FavoritesContext } from "./context/FavoritesContext";

function App() {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  // everytime favorites changes it updates local storage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/results/:query" element={<SearchResults />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/favorites" element={<FavoritesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
