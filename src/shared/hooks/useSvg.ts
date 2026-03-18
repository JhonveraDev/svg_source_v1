import { useState, useEffect } from "react";
import { fetchLogos, type Logo } from "../index";

export function useSvgl() {
  const [logos, setLogos] = useState<Logo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchLogos()
      .then(setLogos)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return { logos, loading, error };
}