import type { Logo } from "../../index";

interface LogoModalProps {
  logo: Logo;
  onClose: () => void;
}

export const LogoModal = ({ logo, onClose }: LogoModalProps) => {
  const hasLightDark = typeof logo.route === "object";
  const lightRoute = typeof logo.route === "string" ? logo.route : logo.route.light;
  const darkRoute = typeof logo.route === "object" ? logo.route.dark : null;

  const previewRoute = darkRoute ?? lightRoute;

  const hasWordmark = !!logo.wordmark;
  const wordmarkLight = logo.wordmark
    ? typeof logo.wordmark === "string" ? logo.wordmark : logo.wordmark.light
    : null;
  const wordmarkDark = logo.wordmark && typeof logo.wordmark === "object"
    ? logo.wordmark.dark
    : null;

  const wordmarkPreview = wordmarkDark ?? wordmarkLight;

  const handleDownload = (url: string, filename: string) => {
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    a.click();
  };

  return (
    <div className="modal__overlay" onClick={onClose}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>

        <div className="modal__header">
          <div>
            <h2 className="modal__title">Download {logo.title} SVGs</h2>
            <p className="modal__subtitle">
              {hasLightDark || hasWordmark
                ? "This logo has multiple options to download:"
                : "Download the SVG for this logo:"}
            </p>
          </div>
          <button className="modal__close" onClick={onClose} aria-label="Cerrar">✕</button>
        </div>

        <div className="modal__cards">

          <div className="modal__card">
            <div className="modal__card-preview">
              <img src={previewRoute} alt={logo.title} /> {/* 👈 */}
            </div>
            <div className="modal__card-actions">
              {hasLightDark && (
                <button className="modal__download-btn" onClick={() => handleDownload(lightRoute, `${logo.title}-light-dark.zip`)}>
                  <span className="modal__download-icon">↓</span>
                  <span>Light & dark variants</span>
                  <span className="modal__ext">.zip</span>
                </button>
              )}
              <button className="modal__download-btn" onClick={() => handleDownload(lightRoute, `${logo.title}-light.svg`)}>
                <span className="modal__download-icon">↓</span>
                <span>Only light variant</span>
                <span className="modal__ext">.svg</span>
              </button>
              {darkRoute && (
                <button className="modal__download-btn" onClick={() => handleDownload(darkRoute, `${logo.title}-dark.svg`)}>
                  <span className="modal__download-icon">↓</span>
                  <span>Only dark variant</span>
                  <span className="modal__ext">.svg</span>
                </button>
              )}
            </div>
          </div>

          {hasWordmark && wordmarkPreview && (
            <div className="modal__card">
              <div className="modal__card-preview">
                <img src={wordmarkPreview} alt={`${logo.title} wordmark`} /> {/* 👈 */}
              </div>
              <div className="modal__card-actions">
                {wordmarkDark && (
                  <button className="modal__download-btn" onClick={() => handleDownload(wordmarkLight!, `${logo.title}-wordmark-light-dark.zip`)}>
                    <span className="modal__download-icon">↓</span>
                    <span>Light & dark variants</span>
                    <span className="modal__ext">.zip</span>
                  </button>
                )}
                {wordmarkLight && (
                  <button className="modal__download-btn" onClick={() => handleDownload(wordmarkLight, `${logo.title}-wordmark-light.svg`)}>
                    <span className="modal__download-icon">↓</span>
                    <span>Wordmark light variant</span>
                    <span className="modal__ext">.svg</span>
                  </button>
                )}
                {wordmarkDark && (
                  <button className="modal__download-btn" onClick={() => handleDownload(wordmarkDark, `${logo.title}-wordmark-dark.svg`)}>
                    <span className="modal__download-icon">↓</span>
                    <span>Wordmark dark variant</span>
                    <span className="modal__ext">.svg</span>
                  </button>
                )}
              </div>
            </div>
          )}
        </div>

        <p className="modal__disclaimer">
          Please ensure you have permission from the creators before using the SVG. Modifications are not permitted.
        </p>
      </div>
    </div>
  );
};