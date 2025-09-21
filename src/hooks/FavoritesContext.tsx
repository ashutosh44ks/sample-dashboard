import { createContext } from "react";

export type FavoritesItem = {
  id: string;
  url: string;
};

export type FavoritesContextType = {
  favorites: FavoritesItem[];
  toggleFavorite: (item: FavoritesItem) => void;
};
const defaultFavoritesContext: FavoritesContextType = {
  favorites: [],
  toggleFavorite: () => {},
};

// Create the context with an initial value of undefined.
// The custom hook will handle the null check.
export const FavoritesContext = createContext<FavoritesContextType>(defaultFavoritesContext);
