export interface Logo {
  id: number;
  title: string;
  category: string | string[];
  route: string | { light: string; dark: string };
  url: string;
  brandUrl?: string;
  wordmark?: string | { light: string; dark: string };
}

export async function fetchLogos(): Promise<Logo[]> {
  const res = await fetch("https://api.svgl.app?limit=10");
  if (!res.ok) throw new Error(`HTTP error: ${res.status}`);
  return res.json();
}