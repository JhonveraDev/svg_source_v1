import { Toolbar } from "../../../layout";
import { useFavorites, useFilteredLogos } from "../../index";

export const FavoritesGrid = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const { query, setQuery, filteredLogos } = useFilteredLogos(favorites);

  if (favorites.length === 0) return <p>No hay favoritos aún.</p>;

  return (
    <div className="favorites__grid">
      <Toolbar query={query} onSearch={setQuery} />
      <div className="svg__content">
        <div className="svg__data">{filteredLogos.length} favoritos</div>
        <div className="svg__grid">
          <ul>
            {filteredLogos.map((logo) => (
              <li key={logo.id}>
                {logo.title}
                <button onClick={() => toggleFavorite(logo)} aria-label="Quitar favorito">
                  ★
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};