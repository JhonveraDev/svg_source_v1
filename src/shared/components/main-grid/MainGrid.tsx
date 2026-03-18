import { Toolbar } from "../../../layout";
import { useSvgl, useFavorites, useFilteredLogos } from "../../index";

export const MainGrid = () => {
  const { logos, loading, error } = useSvgl();
  const { toggleFavorite, isFavorite } = useFavorites();
  const { query, setQuery, filteredLogos } = useFilteredLogos(logos);

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="main__grid">
      <Toolbar query={query} onSearch={setQuery} />
      <div className="svg__content">
        <div className="svg__data">{filteredLogos.length} logos</div>
        <div className="svg__grid">
          <ul>
            {filteredLogos.map((logo) => (
              <li key={logo.id}>
                {logo.title}
                <button
                  onClick={() => toggleFavorite(logo)}
                  aria-label={isFavorite(logo.id) ? "Quitar favorito" : "Agregar favorito"}
                >
                  {isFavorite(logo.id) ? "★" : "☆"}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};