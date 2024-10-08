import { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const localFavorites = JSON.parse(localStorage.getItem("favorites"));

  const [favorites, setFavorites] = useState(
    localFavorites ? localFavorites : []
  );

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
