import { memo } from "react";
import { SvgContent } from "../../../shared";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

export type ThemeOptions = { dark: string; light: string };

export interface SVG {
  id: number;
  title: string;
  category: string | string[];
  route: string | ThemeOptions;
  url: string;
  wordmark?: string | ThemeOptions;
  brandUrl?: string;
}

const TYPESCRIPT_TYPES = `
export type ThemeOptions = {
  dark: string;
  light: string;
};

export interface SVG {
  id: number;
  title: string;
  category: string | string[];
  route: string | ThemeOptions;
  url: string;
  wordmark?: string | ThemeOptions;
  brandUrl?: string;
}
`.trim();

interface Endpoint {
  id: string;
  title: string;
  note?: string;
  pairs: { url: string; response: string }[];
}

const ENDPOINTS: Endpoint[] = [
  {
    id: "get-all-svgs",
    title: "Get all SVGs",
    pairs: [
      {
        url: "https://api.svgl.app",
        response: `[
  {
    "id": 0,
    "title": "Discord",
    "category": "Software",
    "route": "https://svgl.app/discord.svg",
    "url": "https://discord.com/"
  }
]`,
      },
    ],
  },
  {
    id: "get-svgs-limit",
    title: "Get all SVGs with limit",
    pairs: [
      {
        url: "https://api.svgl.app?limit=10",
        response: `[
  {
    "id": 0,
    "title": "Discord",
    "category": "Software",
    "route": "https://svgl.app/discord.svg",
    "url": "https://discord.com/"
  },
  ...
]`,
      },
    ],
  },
  {
    id: "get-svgs-category",
    title: "Get SVGs by category",
    pairs: [
      {
        url: "https://api.svgl.app/category/Software",
        response: `[
  {
    "id": 0,
    "title": "Discord",
    "category": "Software",
    "route": "https://svgl.app/discord.svg",
    "url": "https://discord.com/"
  },
  ...
]`,
      },
    ],
  },
  {
    id: "get-svg-code",
    title: "Get the SVG code",
    pairs: [
      {
        url: "https://api.svgl.app/svg/adobe.svg",
        response: `<!-- Optimized with svgo -->`,
      },
      {
        url: "https://api.svgl.app/svg/adobe.svg?no-optimize",
        response: `<svg width="91" height="80" viewBox="0 0 91 80" fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_906_1839)">
    <path d="M56.9686 0H90.4318V80L56.9686 0Z" fill="#EB1000" />
    <path d="M33.4632 0H0V80L33.4632 0Z" fill="#EB1000" />
    <path d="M45.1821 29.4668L66.5199 80.0002H52.5657L46.1982
      63.9461H30.6182L45.1821 29.4668Z" fill="#EB1000" />
  </g>
  <defs>
    <clipPath id="clip0_906_1839">
      <rect width="90.4318" height="80" fill="white" />
    </clipPath>
  </defs>
</svg>`,
      },
    ],
    note: "Append ?no-optimize to skip svgo processing.",
  },
  {
    id: "search-svg",
    title: "Search SVG by title",
    pairs: [
      {
        url: "https://api.svgl.app?search=axiom",
        response: `[
  {
    "id": 267,
    "title": "Axiom",
    "category": "Software",
    "route": {
      "light": "https://svgl.app/axiom-light.svg",
      "dark": "https://svgl.app/axiom-dark.svg"
    },
    "url": "https://axiom.co/"
  }
]`,
      },
    ],
  },
  {
    id: "categories-list",
    title: "Get the list of categories",
    pairs: [
      {
        url: "https://api.svgl.app/categories",
        response: `[
  { "category": "Software", "total": 97 },
  { "category": "Library",  "total": 25 }
]`,
      },
    ],
  },
];

const CodeBlock = memo(({ children }: { children: string }) => (
  <SyntaxHighlighter
    language="typescript"
    style={nightOwl}
    showLineNumbers
    wrapLongLines
  >
    {children}
  </SyntaxHighlighter>
));

const EndpointSection = ({ endpoint }: { endpoint: Endpoint }) => (
  <section>
    <h3 id={endpoint.id}>{endpoint.title}</h3>
    {endpoint.note && <p>{endpoint.note}</p>}
    {endpoint.pairs.map(({ url, response }, i) => (
      <div key={i}>
        <CodeBlock>{url}</CodeBlock>
        <CodeBlock>{response}</CodeBlock>
      </div>
    ))}
  </section>
);

const HEADER_ICON = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={18}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706
      l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
    <path d="M14 2v5a1 1 0 0 0 1 1h5" />
    <path d="M10 9H8" />
    <path d="M16 13H8" />
    <path d="M16 17H8" />
  </svg>
);

export const ApiDocsPage = () => (
  <SvgContent
    label="API Reference"
    containerClass="api__grid"
    headerIcon={HEADER_ICON}
  >
    <div className="api-docs__content">
      <div className="api-docs__main">
        <h2 id="introduction">Introduction</h2>
        <p>
          SVGL API is a RESTFul API that allows you to get all the information
          of the SVGs that are in the repository.
        </p>

        <h2 id="limitations">Limitations</h2>
        <p>
          The API is currently open to everyone and does not require
          authentication. However, to prevent abuse there is a request limit.
        </p>

        <h2 id="base-urls">Base URLs</h2>
        <p>SVGs URL:</p>
        <CodeBlock>https://api.svgl.app</CodeBlock>
        <p>Categories URL:</p>
        <CodeBlock>https://api.svgl.app/categories</CodeBlock>

        <h2 id="typescript">TypeScript</h2>
        <p>You can use the following types for the SVG responses:</p>
        <CodeBlock>{TYPESCRIPT_TYPES}</CodeBlock>

        <h2 id="endpoints">Endpoints</h2>
        {ENDPOINTS.map((ep) => (
          <EndpointSection key={ep.id} endpoint={ep} />
        ))}
      </div>

      <nav className="api-docs__sidebar">
        <ul className="api-docs__nav">
          <span>On this page</span>
          <li><a href="#introduction">Introduction</a></li>
          <li><a href="#limitations">Limitations</a></li>
          <li><a href="#base-urls">Base URLs</a></li>
          <li><a href="#typescript">TypeScript</a></li>
          <li>
            <a href="#endpoints">Endpoints</a>
            <ul className="api-docs__nav-sub">
              {ENDPOINTS.map((ep) => (
                <li key={ep.id}>
                  <a href={`#${ep.id}`}>{ep.title}</a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  </SvgContent>
);