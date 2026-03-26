import { SvgContent } from "../../../shared";
import { Link } from "react-router-dom";

const PackageOpenIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide-icon lucide lucide-package-open"
  >
    <path d="M12 22v-9" />
    <path d="M15.17 2.21a1.67 1.67 0 0 1 1.63 0L21 4.57a1.93 1.93 0 0 1 0 3.36L8.82 14.79a1.655 1.655 0 0 1-1.64 0L3 12.43a1.93 1.93 0 0 1 0-3.36z" />
    <path d="M20 13v3.87a2.06 2.06 0 0 1-1.11 1.83l-6 3.08a1.93 1.93 0 0 1-1.78 0l-6-3.08A2.06 2.06 0 0 1 4 16.87V13" />
    <path d="M21 12.43a1.93 1.93 0 0 0 0-3.36L8.83 2.2a1.64 1.64 0 0 0-1.63 0L3 4.57a1.93 1.93 0 0 0 0 3.36l12.18 6.86a1.636 1.636 0 0 0 1.63 0z" />
  </svg>
);

export const ExtensionsListPage = () => {
  return (
    <SvgContent
      label="Extensions"
      containerClass="extensions__grid"
      headerIcon={PackageOpenIcon}
    >
      <section className="extensions">
        <div className="extensions__hero">
          <h2 className="extensions__title">Extensions</h2>
          <p className="extensions__description">
            Integrate SVGL with your favorite tools and apps to streamline your workflow. Created by the community.
          </p>
          <Link to="/docs/api" className="extensions__link">
            Start Building
          </Link>
        </div>

        <div className="extensions__list">
          <div className="extensions__card">

            <div className="extensions__card-header">
              <img className="extensions__card-image" src="" alt="" />
              <a className="extensions__card-action" href="">Install</a>
            </div>

            <div className="extensions__card-body">
              <h4 className="extensions__card-title">SVGL CLI</h4>
              <p className="extensions__card-text">
                A CLI for easily adding SVG icons to your project.
              </p>
            </div>

            <div className="extensions__card-footer">
              <span className="extensions__card-author-label">
                Created By
              </span>
              <a className="extensions__card-author" href="">
                Sujee
              </a>
            </div>

          </div>
        </div>
      </section>
    </SvgContent>
  )
}
