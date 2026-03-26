import { SvgContent } from "../../../shared";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";

const svgUrl = `https://api.svgl.app`;
const categoriesURl = `https://api.svgl.app/categories`;
const typescript = `
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
    brandUrl?: string;}
`
const getAll = `https://api.svgl.app`;
const getAllElements = `
  [
    {
      "id": 0,
      "title": "Discord",
      "category": "Software",
      "route": "https://svgl.app/discord.svg",
      "url": "https://discord.com/"
    },
  ]
`;

const getAllWithLimit = `https://api.svgl.app?limit=10`;
const getAllElementsWithLimit = `
  [
    {
      "id": 0,
      "title": "Discord",
      "category": "Software",
      "route": "https://svgl.app/discord.svg",
      "url": "https://discord.com/"
    },
    ...
  ]
`;

const getByCategory = `https://api.svgl.app/category/Software`;
const getByCategoryElements = `[
  {
    "id": 0,
    "title": "Discord",
    "category": "Software",
    "route": "https://svgl.app/discord.svg",
    "url": "https://discord.com/"
  },
  ...
]`

const optimized = `https://api.svgl.app/svg/adobe.svg`;
const noOtimized = `https://api.svgl.app/svg/adobe.svg?no-optimize`
const noOtimizedElements = `
<svg
  width="91"
  height="80"
  viewBox="0 0 91 80"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <g clip-path="url(#clip0_906_1839)">
    <path d="M56.9686 0H90.4318V80L56.9686 0Z" fill="#EB1000" />
    <path d="M33.4632 0H0V80L33.4632 0Z" fill="#EB1000" />
    <path
      d="M45.1821 29.4668L66.5199 80.0002H52.5657L46.1982 63.9461H30.6182L45.1821 29.4668Z"
      fill="#EB1000"
    />
  </g>
  <defs>
    <clipPath id="clip0_906_1839">
      <rect width="90.4318" height="80" fill="white" />
    </clipPath>
  </defs>
</svg>
`
const searchTitle = `https://api.svgl.app?search=axiom`;
const searchTitleElements = `
[
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
]`

const listCategories = `https://api.svgl.app/categories`;
const listCategoriesElements = `
[
  {
    "category": "Software",
    "total": 97
  },
  {
    "category": "Library",
    "total": 25
  }
  //...
]`

export const ApiDocsPage = () => {
  return (
    <SvgContent
      label="API Reference"
      containerClass="api__grid"
      headerIcon={
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
          className="lucide-icon lucide lucide-file-text"
        >
          <path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" />
          <path d="M14 2v5a1 1 0 0 0 1 1h5" />
          <path d="M10 9H8" />
          <path d="M16 13H8" />
          <path d="M16 17H8" />
        </svg>
      }
    >
      <div className="api-docs__content">
        <div className="api-docs__main">
          <h2 id="introduction">Introduction</h2>
          <p>SVGL API is a RESTFul API that allows you to get all the information of the SVGs that are in the repository.</p>
          <h2 id="limitations">Limitations</h2>
          <p>The API is currently open to everyone and does not require any authentication. However, to prevent abusive use of the API, there is a limit to the number of requests.</p>
          <h2 id="base-urls">Base URLs</h2>
          <p>SVGs URL:</p>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {svgUrl}
          </SyntaxHighlighter>
          <p>Categories URL:</p>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {categoriesURl}
          </SyntaxHighlighter>
          <h2 id="typescript">Typescript</h2>
          <p>You can use the following types for the SVG responses:</p>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {typescript}
          </SyntaxHighlighter>
          <h2 id="endpoints">Endpoints</h2>
          <h3 id="get-all-svgs">Get all SVGs</h3>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {getAll}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {getAllElements}
          </SyntaxHighlighter>
          <h3 id="get-svgs-limit">Get all SVGs with limit</h3>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {getAllWithLimit}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {getAllElementsWithLimit}
          </SyntaxHighlighter>
          <h3 id="get-svgs-category">Get SVGs by category</h3>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {getByCategory}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {getByCategoryElements}
          </SyntaxHighlighter>
          <h3 id="get-svg-code">Get the SVG code</h3>
          <p>Optimized SVG using svgo:</p>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {optimized}
          </SyntaxHighlighter>
          <p>No optimized SVG:</p>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {noOtimized}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {noOtimizedElements}
          </SyntaxHighlighter>
          <h3 id="search-svg">Search SVG by title</h3>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {searchTitle}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {searchTitleElements}
          </SyntaxHighlighter>
          <h3 id="categories-list">Get the list of categories</h3>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {listCategories}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {listCategoriesElements}
          </SyntaxHighlighter>
        </div>

        <nav className="api-docs__sidebar">
          <ul className="api-docs__nav">
            <span>On this page</span>
            <li><a href="#introduction">Introduction</a></li>
            <li><a href="#limitations">Limitations</a></li>
            <li><a href="#base-urls">Base URLs</a></li>
            <li><a href="#typescript">Typescript</a></li>
            <li><a href="#endpoints">Endpoint</a></li>
            <li className="">
              <ul className="api-docs__nav-sub">
                <li><a href="#get-all-svgs">Get All SVGs</a></li>
                <li><a href="#get-svgs-limit">Get all SVGs with limit</a></li>
                <li><a href="#get-svgs-category">Get SVGs by category</a></li>
                <li><a href="#get-svg-code">Get the SVG code</a></li>
                <li><a href="#search-svg">Search SVG by title</a></li>
                <li><a href="#categories-list">Get the list of categories</a></li>
              </ul>
            </li>
          </ul>
        </nav>
      </div>
    </SvgContent>
  );
};