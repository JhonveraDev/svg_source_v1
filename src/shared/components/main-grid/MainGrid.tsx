import { Toolbar } from "../../../layout";
import { useSvgl, useFavorites, useFilteredLogos, SvgContent, useLogoModal, LogoModal } from "../../index";

export const MainGrid = () => {
  const { logos, loading, error } = useSvgl();
  const { toggleFavorite, isFavorite } = useFavorites();
  const { query, setQuery, filteredLogos } = useFilteredLogos(logos);
  const { selectedLogo, openModal, closeModal } = useLogoModal();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="main__grid">
      <Toolbar query={query} onSearch={setQuery} />
      <SvgContent count={filteredLogos.length} label="logos">
        {filteredLogos.map((logo) => (
          <li key={logo.id}>
            {logo.title}
            <button
              onClick={() => toggleFavorite(logo)}
              aria-label={isFavorite(logo.id) ? "Quitar favorito" : "Agregar favorito"}
            >
              {isFavorite(logo.id) ? "★" : "☆"}
            </button>
            <button onClick={() => openModal(logo)} aria-label="Ver detalles">
              ℹ
            </button>
          </li>
        ))}
      </SvgContent>

      {selectedLogo && <LogoModal logo={selectedLogo} onClose={closeModal} />}
    </div>
  );
};