import { useState } from "react";
import type { Logo } from "../../index";

interface LogoCardProps {
  logo: Logo;
  isFavorite: boolean;
  onToggleFavorite: (logo: Logo) => void;
  onOpenModal: (logo: Logo) => void;
}

export const LogoCard = ({ logo, isFavorite, onToggleFavorite, onOpenModal }: LogoCardProps) => {
  const [showWordmark, setShowWordmark] = useState(false);
  const [fading, setFading] = useState(false);

  const category = Array.isArray(logo.category) ? logo.category[0] : logo.category;
  const previewRoute = typeof logo.route === "object" ? logo.route.dark ?? logo.route.light : logo.route;

  const wordmarkRoute = logo.wordmark
    ? typeof logo.wordmark === "object"
      ? logo.wordmark.dark ?? logo.wordmark.light
      : logo.wordmark
    : null;

  const currentPreview = showWordmark && wordmarkRoute ? wordmarkRoute : previewRoute;

  const handleToggleWordmark = () => {
    setFading(true);
    setTimeout(() => {
      setShowWordmark((prev) => !prev);
      setFading(false);
    }, 150);
  };

  return (
    <li className="logo__card">
      {logo.brandUrl && (
        <a className="logo__card-brand" target="_blank" rel="noopener noreferrer" href={logo.brandUrl}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon lucide lucide-palette"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle></svg>
        </a>
      )}
      <button
        className={`logo__card-favorite ${isFavorite ? "logo__card-favorite--active" : ""}`}
        onClick={() => onToggleFavorite(logo)}
        aria-label={isFavorite ? "Quitar favorito" : "Agregar favorito"}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon lucide lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
      </button>

      <div className="logo__card-preview" onClick={() => onOpenModal(logo)}>
        <img
          src={currentPreview}
          alt={logo.title}
          className={fading ? "logo__card-img--fading" : ""}
        />
      </div>

      <div className="logo__card-info">
        <span className="logo__card-title">{logo.title}</span>
        <div className="logo__card-meta">
          <span className="logo__card-badge">{category}</span>
          <span className="logo__card-badge" aria-label="Más opciones">
            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon lucide lucide-ellipsis"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
          </span>
        </div>
      </div>

      <div className="logo__card-actions">
        <button className="logo__card-action" aria-label="Copiar SVG" onClick={() => onOpenModal(logo)} title="">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
        </button>
        <button className="logo__card-action" aria-label="Descargar" onClick={() => onOpenModal(logo)} title="Download Variants">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon lucide lucide-download"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
        </button>
        <button className="logo__card-action" aria-label="Abrir enlace" onClick={() => window.open(logo.url, "_blank")} title="Website">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon lucide lucide-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
        </button>
        {logo.wordmark && (
          <button
            className={`logo__card-action ${showWordmark ? "logo__card-action--active" : ""}`}
            aria-label={showWordmark ? "Ver logo normal" : "Ver wordmark"}
            onClick={handleToggleWordmark}
            title="Show Wordmark SVG"
          >
            {showWordmark ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon lucide lucide-sparkles"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="lucide-icon lucide lucide-baseline"><path d="M4 20h16"></path><path d="m6 16 6-12 6 12"></path><path d="M8 12h8"></path></svg>
            )}
          </button>
        )}
      </div>
    </li>
  );
};