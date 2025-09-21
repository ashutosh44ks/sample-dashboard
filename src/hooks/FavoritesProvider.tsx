import { useState, useEffect, type ReactNode } from "react";
import { FavoritesContext, type FavoritesItem } from "./FavoritesContext";

interface FavoritesProviderProps {
  children: ReactNode;
}

const FAVORITES_KEY = "favorites";

export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<FavoritesItem[]>(() => {
    const stored = localStorage.getItem(FAVORITES_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  }, [favorites]);

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
    <FavoritesContext.Provider value={contextValue}>{children}</FavoritesContext.Provider>
  );
};
