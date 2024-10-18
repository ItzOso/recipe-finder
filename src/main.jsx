import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { FavoritesProvider } from "./context/FavoritesContext.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <FavoritesProvider>
        <ToastContainer />
        <App />
      </FavoritesProvider>
    </AuthProvider>
  </StrictMode>
);
