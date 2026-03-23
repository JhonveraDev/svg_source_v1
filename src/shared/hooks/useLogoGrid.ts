import { useState, useEffect } from "react";
import { useFilteredLogos, useFavorites, type Logo } from "../index";

const LIMIT = 30;

interface UseLogoGridOptions {
  logos: Logo[];
  category?: string;
  onlyFavorites?: boolean;
}

export const useLogoGrid = ({ logos, category, onlyFavorites = false }: UseLogoGridOptions) => {
  const [page, setPage] = useState(1);
  const { toggleFavorite, isFavorite } = useFavorites();

  const baseLogos = onlyFavorites
    ? logos.filter((logo) => isFavorite(logo.id))
    : logos;

  const { query, setQuery, filteredLogos } = useFilteredLogos(baseLogos, category);

  useEffect(() => {
    setPage(1);
  }, [query, category, onlyFavorites]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  const paginatedLogos = filteredLogos.slice((page - 1) * LIMIT, page * LIMIT);
  const totalPages = Math.ceil(filteredLogos.length / LIMIT);

  return {
    query,
    setQuery,
    filteredLogos,
    paginatedLogos,
    page,
    setPage,
    totalPages,
    toggleFavorite,
    isFavorite,
    LIMIT,
  };
};