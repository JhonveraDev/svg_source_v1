import { SvgContent } from "../../../shared";
import { Link } from "react-router-dom";

const data = [
  {
    "id": 1,
    "title": "SVGL CLI",
    "description": "A CLI for easily adding SVG icons to your project.",
    "img": "https://raw.githubusercontent.com/pheralb/svgl/refs/heads/main/static/images/svgl_svg.svg",
    "author": "sujiieee",
    "framework": "cli",
    "buttonText": "Install"
  },
  {
    "id": 2,
    "title": "SVGL for React",
    "description": "An open-source NPM package that offers a SVGL Logos for React.",
    "img": "https://raw.githubusercontent.com/pheralb/svgl/refs/heads/main/static/library/react_light.svg",
    "author": "ridemountainpig",
    "framework": "react",
    "buttonText": "Install"
  },
  {
    "id": 3,
    "title": "SVGL for Framer",
    "description": "Import colorful SVG logos, fast and easy using our plugin for Framer.",
    "img": "https://raw.githubusercontent.com/pheralb/svgl/refs/heads/main/static/library/framer.svg",
    "author": "Krishna Singh",
    "framework": "framer",
    "buttonText": "Install"
  },
  {
    "id": 4,
    "title": "SVGL for Vue",
    "description": "An open-source NPM package that offers a SVGL Logos for Vue.",
    "img": "https://raw.githubusercontent.com/pheralb/svgl/refs/heads/main/static/library/vue.svg",
    "author": "selemonddev",
    "framework": "vue",
    "buttonText": "Install"
  },
  {
    "id": 5,
    "title": "SVGL for Svelte",
    "description": "An open-source NPM package that offers a SVGL Logos for Svelte.",
    "img": "https://github.com/pheralb/svgl/raw/main/static/library/svelte.svg",
    "author": "selemonddev",
    "framework": "svelte",
    "buttonText": "Install"
  },
  {
    "id": 6,
    "title": "SVGL for Figma",
    "description": "Add svgs from svgl to your Figma project.",
    "img": "https://github.com/pheralb/svgl/raw/main/static/library/figma.svg",
    "author": "quilljou",
    "framework": "figma",
    "buttonText": "Install"
  },
  {
    "id": 7,
    "title": "SVGL for PowerToys",
    "description": "Search & copy SVG logos in PowerToys Run.",
    "img": "https://github.com/pheralb/svgl/raw/main/static/library/powertoys.svg",
    "author": "SameerJS6",
    "framework": "powertoys",
    "buttonText": "Install"
  },
  {
    "id": 8,
    "title": "SVGL for Raycast",
    "description": "Search SVG logos via svgl.",
    "img": "https://github.com/pheralb/svgl/raw/main/static/library/raycast.svg",
    "author": "1weiho",
    "framework": "raycast",
    "buttonText": "Install"
  },
  {
    "id": 9,
    "title": "SVGL for Visual Studio Code",
    "description": "SVGL directly in your VSCode.",
    "img": "https://github.com/pheralb/svgl/raw/main/static/library/vscode.svg",
    "author": "girlazote",
    "framework": "vscode",
    "buttonText": "Install"
  },
  {
    "id": 10,
    "title": "SVGL for Flow Launcher",
    "description": "Search & copy SVG logos in Flow Launcher.",
    "img": "https://github.com/pheralb/svgl/raw/main/static/library/FlowLauncher.svg",
    "author": "AF_Askar",
    "framework": "badge",
    "buttonText": "Install"
  },
  {
    "id": 11,
    "title": "SVGL on Magic by 21st",
    "description": "Integrate company logos and icons via SVGL on Magic.",
    "img": "https://github.com/serafimcloud/21st/raw/main/apps/web/public/icon.png?raw=true",
    "author": "serafimcloud",
    "framework": "magic",
    "buttonText": "Install"
  },
  {
    "id": 12,
    "title": "SVGL for PowerShell",
    "description": "PowerShell extension to quickly get svgl logos anywhere.",
    "img": "https://github.com/pheralb/svgl/raw/main/static/library/powershell.svg",
    "author": "Bart Spaans",
    "framework": "powershell",
    "buttonText": "Install"
  }
]

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
      containerClass="api__grid"
      headerIcon={PackageOpenIcon}
    >
      <section className="extensions">
        <div className="extensions__hero">
          <h2 className="extensions__title">Extensions</h2>
          <p className="extensions__description">
            Integrate SVGL with your favorite tools and apps to streamline your workflow. Created by the community.
          </p>
          <div>
            <Link to="/docs/api" className="extensions__link">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide-icon lucide lucide-rocket"><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09"></path><path d="M9 12a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.4 22.4 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 .05 5 .05"></path></svg>
              Start Building
            </Link>
          </div>
        </div>

        <div className="extensions__list">
          {data.map((item) => (
            <div className="extensions__card" key={item.id}>

              <div className="extensions__card-header">
                <img
                  className="extensions__card-image"
                  src={item.img || ""}
                  alt={item.title}
                />
                <a className="extensions__card-action" href="#">
                  {item.buttonText}
                </a>
              </div>

              <div className="extensions__card-body">
                <h4 className="extensions__card-title">{item.title}</h4>
                <p className="extensions__card-text">
                  {item.description}
                </p>
              </div>

              <div className="extensions__card-footer">
                <span className="extensions__card-author-label">
                  Created by
                </span>
                <a className="extensions__card-author" href="#">
                  {item.author}
                </a>
              </div>

            </div>
          ))}
        </div>
      </section>
    </SvgContent>
  )
}
