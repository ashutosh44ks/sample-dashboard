import { use } from "react";
import { FavoritesContext, type FavoritesContextType } from "./FavoritesContext";

export const useFavoritesData = (): FavoritesContextType => {
  // The 'use' function is a new React 19 feature that can read context
  // and handle promises. It replaces the 'useContext' hook.
  const context = use(FavoritesContext);

  // This check ensures the hook is always used within a provider.
  if (!context) {
    throw new Error("useFavoritesData must be used within a FavoritesProvider");
  }

  return context;
};
