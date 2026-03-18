import { useFavorites } from "../../index";
import { LogoGrid } from "../index";

export const FavoritesGrid = () => {
  const { favorites } = useFavorites();

  return (
    <LogoGrid
      logos={favorites}
      label="favoritos"
      containerClass="favorites__grid"
      emptyMessage="No hay favoritos..."
    />
  );
};