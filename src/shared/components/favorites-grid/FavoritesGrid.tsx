import { LogoGrid, EmptyState } from "../index";

export const FavoritesGrid = () => {
  return (
    <LogoGrid
      label="Favorites"
      containerClass="favorites__grid"
      emptyMessage={
        <EmptyState
          title="No favorites yet"
          desc="Start adding SVGs to your favorites by clicking the heart icon on any SVG."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
              <path d="M10.638 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v3.417" />
              <path d="M14.62 18.8A2.25 2.25 0 1 1 18 15.836a2.25 2.25 0 1 1 3.38 2.966l-2.626 2.856a.998.998 0 0 1-1.507 0z" />
            </svg>
          }
        />
      }
      onlyFavorites
    />
  );
};