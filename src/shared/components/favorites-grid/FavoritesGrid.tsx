import { LogoGrid, EmptyState } from "../index";

export const FavoritesGrid = () => {
  return (
    <LogoGrid
      label="favoritos"
      containerClass="favorites__grid"
      emptyMessage={<EmptyState />}
      onlyFavorites
    />
  );
};