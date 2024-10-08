import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FavoritesProvider>
      <App />
    </FavoritesProvider>
  </StrictMode>
);
