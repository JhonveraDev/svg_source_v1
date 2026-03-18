import { Toolbar } from "../../../layout";
import { useFavorites, useFilteredLogos, SvgContent } from "../../index";

export const FavoritesGrid = () => {
  const { favorites, toggleFavorite } = useFavorites();
  const { query, setQuery, filteredLogos } = useFilteredLogos(favorites);

  return (
    <div className="favorites__grid">
      <Toolbar query={query} onSearch={setQuery} />
      <SvgContent count={filteredLogos.length} label="favoritos" emptyMessage="No hay favoritos...">
        {filteredLogos.map((logo) => (
          <li key={logo.id}>
            {logo.title}
            <button onClick={() => toggleFavorite(logo)} aria-label="Quitar favorito">
              ★
            </button>
          </li>
        ))}
      </SvgContent>
    </div>
  );
};