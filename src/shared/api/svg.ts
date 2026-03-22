import type { Logo, Category } from "../index";

let categoriesCache: Category[] | null = null;
let logosCache: Logo[] | null = null;

export async function fetchCategories(): Promise<Category[]> {
  if (categoriesCache) return categoriesCache;
  const res = await fetch("https://api.svgl.app/categories");
  if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
  categoriesCache = (await res.json()).sort((a: Category, b: Category) =>
    a.category.localeCompare(b.category)
  );
  return categoriesCache!;
}

export async function fetchLogos(): Promise<Logo[]> {
  if (logosCache) return logosCache;
  const res = await fetch("https://api.svgl.app?limit=30");
  if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
  logosCache = await res.json();
  return logosCache!;
}