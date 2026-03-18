import { useState } from "react";
import type { Logo } from "../index";

export const useFilteredLogos = (logos: Logo[]) => {
  const [query, setQuery] = useState("");

  const filteredLogos = query.trim()
    ? logos.filter((logo) => logo.title.toLowerCase().includes(query.toLowerCase()))
    : logos;

  return { query, setQuery, filteredLogos };
};