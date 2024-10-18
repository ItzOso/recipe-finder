import { createContext, useContext, useEffect, useState } from "react";
import { fetchFavorites } from "../firebase/favorites";
import { AuthContext } from "./AuthContext";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (currentUser) {
      const fetchData = async () => {
        const fetchedFavorites = await fetchFavorites(currentUser.uid);
        setFavorites(fetchedFavorites);
      };
      fetchData();
    }
  }, [currentUser]);

  return (
    <FavoritesContext.Provider value={{ favorites, setFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};
