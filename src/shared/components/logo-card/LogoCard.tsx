import type { Logo } from "../../index";

interface LogoCardProps {
  logo: Logo;
  isFavorite: boolean;
  onToggleFavorite: (logo: Logo) => void;
  onOpenModal: (logo: Logo) => void;
}

export const LogoCard = ({ logo, isFavorite, onToggleFavorite, onOpenModal }: LogoCardProps) => {
  const category = Array.isArray(logo.category) ? logo.category[0] : logo.category;
  const previewRoute = typeof logo.route === "object" ? logo.route.dark ?? logo.route.light : logo.route;

  return (
    <li className="logo-card">
      <button
        className={`logo-card__favorite ${isFavorite ? "logo-card__favorite--active" : ""}`}
        onClick={() => onToggleFavorite(logo)}
        aria-label={isFavorite ? "Quitar favorito" : "Agregar favorito"}
      >
        ♡
      </button>

      <div className="logo-card__preview" onClick={() => onOpenModal(logo)}>
        <img src={previewRoute} alt={logo.title} />
      </div>

      <div className="logo-card__info">
        <span className="logo-card__title">{logo.title}</span>
        <div className="logo-card__meta">
          <span className="logo-card__badge">{category}</span>
          <button className="logo-card__more" aria-label="Más opciones">•••</button>
        </div>
      </div>

      <div className="logo-card__actions">
        <button className="logo-card__action" aria-label="Copiar SVG" onClick={() => onOpenModal(logo)}>⧉</button>
        <button className="logo-card__action" aria-label="Descargar" onClick={() => onOpenModal(logo)}>↓</button>
        <button className="logo-card__action" aria-label="Abrir enlace" onClick={() => window.open(logo.url, "_blank")}>⌁</button>
        {logo.wordmark && (
          <button className="logo-card__action" aria-label="Ver wordmark" onClick={() => onOpenModal(logo)}>A</button>
        )}
      </div>
    </li>
  );
};