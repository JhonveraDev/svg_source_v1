import { useState, useMemo } from "react";
import Fuse from "fuse.js";
import type { Logo } from "../index";

export const useFilteredLogos = (logos: Logo[]) => {
  const [query, setQuery] = useState("");

  const fuse = useMemo(() => new Fuse(logos, {
    keys: ["title"],
    threshold: 0.4,
  }), [logos]);

  const filteredLogos = query.trim()
    ? fuse.search(query).map((result) => result.item)
    : logos;

  return { query, setQuery, filteredLogos };
};