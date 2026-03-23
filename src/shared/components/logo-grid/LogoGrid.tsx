import { Toolbar } from "../../../layout";
import { useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { useFilteredLogos, useFavorites, SvgContent, useLogoModal, LogoModal, LogoCard, type Logo, fetchLogos } from "../../index";

interface LogoGridProps {
  label: string;
  containerClass: string;
  emptyMessage?: string;
  category?: string;
  onlyFavorites?: boolean;
}

const LIMIT = 30;

export const LogoGrid = ({
  label,
  containerClass,
  emptyMessage,
  category,
  onlyFavorites = false,
}: LogoGridProps) => {
  const [page, setPage] = useState(1);

  const {
    data: logos = [],
    isLoading,
    isFetching,
    error,
  } = useQuery({
    queryKey: ["logos"],
    queryFn: fetchLogos,
  });

  const { toggleFavorite, isFavorite } = useFavorites();

  const baseLogos = onlyFavorites
    ? logos.filter((logo) => isFavorite(logo.id))
    : logos;

  const { query, setQuery, filteredLogos } = useFilteredLogos(
    baseLogos,
    category
  );

  const { selectedLogo, openModal, closeModal } = useLogoModal();

  useEffect(() => {
    setPage(1);
  }, [query, category, onlyFavorites]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [page]);

  if (error) return <p>Error loading logos</p>;

  const paginatedLogos = filteredLogos.slice(
    (page - 1) * LIMIT,
    page * LIMIT
  );

  return (
    <div className={containerClass}>
      <Toolbar query={query} onSearch={setQuery} label={category} />
      <SvgContent
        count={filteredLogos.length}
        label={label}
        emptyMessage={emptyMessage}
      >
        <ul
          className="logo__grid"
          style={{ opacity: isFetching ? 0.6 : 1 }}
        >
          {paginatedLogos.map((logo: Logo) => (
            <LogoCard
              key={logo.id}
              logo={logo}
              isFavorite={isFavorite(logo.id)}
              onToggleFavorite={toggleFavorite}
              onOpenModal={openModal}
            />
          ))}
        </ul>
        {isLoading && <p>Loading...</p>}
        <div className="pagination">
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 1}
          >
            Prev
          </button>

          <span>Page {page}</span>

          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page * LIMIT >= filteredLogos.length}
          >
            Next
          </button>
        </div>

        {isFetching && !isLoading && <p>Loading...</p>}
      </SvgContent>

      {selectedLogo && (
        <LogoModal logo={selectedLogo} onClose={closeModal} />
      )}
    </div>
  );
};