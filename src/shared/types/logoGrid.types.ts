import type { ReactNode } from "react";

export interface LogoGridProps {
  label: string;
  containerClass: string;
  headerIcon?: ReactNode;
  emptyMessage?: ReactNode;
  category?: string;
  onlyFavorites?: boolean;
}