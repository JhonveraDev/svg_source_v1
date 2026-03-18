import { useState, useEffect } from "react";
import { fetchCategories, type Category } from "../index";

export function useSvgCategories() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchCategories()
      .then(setCategories)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { categories, loading, error };
}