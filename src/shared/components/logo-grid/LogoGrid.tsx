import { Toolbar } from "../../../layout";
import { SvgContent, useLogoModal, LogoModal, LogoCard, useLogos, useLogoGrid, Pagination, type LogoGridProps } from "../../index";

export const LogoGrid = ({ label, containerClass, emptyMessage, category, onlyFavorites = false,
}: LogoGridProps) => {
  const { data: logos = [], isLoading, isFetching, error } = useLogos();

  const {
    query,
    setQuery,
    filteredLogos,
    paginatedLogos,
    page,
    setPage,
    toggleFavorite,
    isFavorite,
    LIMIT,
  } = useLogoGrid({ logos, category, onlyFavorites });

  const { selectedLogo, openModal, closeModal } = useLogoModal();

  if (error) {
    return (
      <div>
        <p>Something went wrong loading logos</p>
        <button onClick={() => window.location.reload()}>
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className={containerClass}>
      <Toolbar query={query} onSearch={setQuery} label={category} />
      <SvgContent count={filteredLogos.length} label={label} emptyMessage={emptyMessage}>
        {isLoading && <p>Loading...</p>}
        <ul className={`logo__grid ${isFetching ? "is-fetching" : ""}`}>
          {paginatedLogos.map((logo) => (
            <LogoCard
              key={logo.id}
              logo={logo}
              isFavorite={isFavorite(logo.id)}
              onToggleFavorite={toggleFavorite}
              onOpenModal={openModal}
            />
          ))}
        </ul>

        {!isLoading && (
          <Pagination
            page={page}
            totalItems={filteredLogos.length}
            limit={LIMIT}
            onNext={() => setPage((p) => p + 1)}
            onPrev={() => setPage((p) => p - 1)}
          />
        )}
      </SvgContent>

      {selectedLogo && <LogoModal logo={selectedLogo} onClose={closeModal} />}
    </div>
  );
};