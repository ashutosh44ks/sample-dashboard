import { useState, type ReactNode } from "react";
import { FavoritesContext, type FavoritesItem } from "./FavoritesContext";

interface FavoritesProviderProps {
  children: ReactNode;
}
export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<FavoritesItem[]>([]);

  const addFavorite = (item: FavoritesItem) => {
    setFavorites((prev) => [...prev, item]);
  };

  const removeFavorite = (id: string) => {
    setFavorites((prev) => prev.filter((item) => item.id !== id));
  };

  const toggleFavorite = (item: FavoritesItem) => {
    const exists = favorites.find((fav) => fav.id === item.id);
    if (exists) {
      removeFavorite(item.id);
    } else {
      addFavorite(item);
    }
  };

  const contextValue = { favorites, toggleFavorite };

  return (
    // This is the new, simplified provider syntax in React 19
    <FavoritesContext.Provider value={contextValue}>{children}</FavoritesContext.Provider>
  );
};
