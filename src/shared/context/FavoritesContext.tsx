import { createContext, useContext, useState } from "react";
import type { Logo } from "../index";

interface FavoritesContextType {
  favorites: Logo[];
  toggleFavorite: (logo: Logo) => void;
  isFavorite: (id: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export const FavoritesProvider = ({ children }: { children: React.ReactNode }) => {
  const [favorites, setFavorites] = useState<Logo[]>([]);

  const toggleFavorite = (logo: Logo) => {
    setFavorites((prev) =>
      prev.some((f) => f.id === logo.id)
        ? prev.filter((f) => f.id !== logo.id)
        : [...prev, logo]
    );
  };

  const isFavorite = (id: number) => favorites.some((f) => f.id === id);

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites must be used within FavoritesProvider");
  return ctx;
};