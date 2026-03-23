import { LogoGrid } from "../index";

export const FavoritesGrid = () => {
  return (
    <LogoGrid
      label="favoritos"
      containerClass="favorites__grid"
      emptyMessage="No hay favoritos..."
      onlyFavorites
    />
  );
};