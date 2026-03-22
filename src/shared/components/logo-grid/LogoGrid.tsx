import { Toolbar } from "../../../layout";
import { useFilteredLogos, useFavorites, SvgContent, useLogoModal, LogoModal, LogoCard } from "../../index";
import type { Logo } from "../../index";

interface LogoGridProps {
  logos: Logo[];
  label: string;
  containerClass: string;
  emptyMessage?: string;
  category?: string;
}

export const LogoGrid = ({ logos, label, containerClass, emptyMessage, category }: LogoGridProps) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const { query, setQuery, filteredLogos } = useFilteredLogos(logos, category);
  const { selectedLogo, openModal, closeModal } = useLogoModal();

  return (
    <div className={containerClass}>
      <Toolbar query={query} onSearch={setQuery} label={category} />
      <SvgContent count={filteredLogos.length} label={label} emptyMessage={emptyMessage}>
        <ul className="logo__grid">
          {filteredLogos.map((logo) => (
            <LogoCard
              key={logo.id}
              logo={logo}
              isFavorite={isFavorite(logo.id)}
              onToggleFavorite={toggleFavorite}
              onOpenModal={openModal}
            />
          ))}
        </ul>
      </SvgContent>

      {selectedLogo && <LogoModal logo={selectedLogo} onClose={closeModal} />}
    </div>
  );
};