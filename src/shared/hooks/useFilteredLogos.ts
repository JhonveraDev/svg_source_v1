import { useState, useMemo } from "react";
import Fuse from "fuse.js";
import type { Logo } from "../index";

export const useFilteredLogos = (logos: Logo[], category?: string) => {
  const [query, setQuery] = useState("");

  const categoryLogos = useMemo(() => {
    if (!category) return logos;
    return logos.filter((logo) => {
      const cats = Array.isArray(logo.category) ? logo.category : [logo.category];
      return cats.includes(category);
    });
  }, [logos, category]);

  const fuse = useMemo(() => new Fuse(categoryLogos, {
    keys: ["title"],
    threshold: 0.4,
  }), [categoryLogos]);

  const filteredLogos = query.trim()
    ? fuse.search(query).map((result) => result.item)
    : categoryLogos;

  return { query, setQuery, filteredLogos };
};