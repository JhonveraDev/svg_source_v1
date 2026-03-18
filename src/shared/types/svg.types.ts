export interface Logo {
  id: number;
  title: string;
  category: string | string[];
  route: string | { light: string; dark: string };
  url: string;
  brandUrl?: string;
  wordmark?: string | { light: string; dark: string };
}

export interface Category {
  category: string;
  total: number;
}
