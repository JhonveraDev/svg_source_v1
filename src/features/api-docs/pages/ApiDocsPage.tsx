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
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide-icon lucide lucide-files"
        >
          <path d="M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"></path>
          <path d="M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"></path>
          <path d="M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"></path>
        </svg>
      }
    >
      <div className="api-docs__content">
        <div className="api-docs__main">
          <h2>Introduction</h2>
          <p>SVGL API is a RESTFul API that allows you to get all the information of the SVGs that are in the repository.</p>
          <h2>Limitations</h2>
          <p>The API is currently open to everyone and does not require any authentication. However, to prevent abusive use of the API, there is a limit to the number of requests.</p>
          <blockquote>
            <p>Don't use the API for create the same product as SVGL. The API is intended to be used for extensions, plugins, or other tools that can help the community.</p>
          </blockquote>
          <h2>Base URLs</h2>
          <h3>SVGs URL:</h3>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {svgUrl}
          </SyntaxHighlighter>
          <h2>Categories URL:</h2>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {categoriesURl}
          </SyntaxHighlighter>
          <h2>Typescript</h2>
          <p>You can use the following types for the SVG responses:</p>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {typescript}
          </SyntaxHighlighter>
          <h2>Endpoints</h2>
          <h3>Get all SVGs</h3>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {getAll}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {getAllElements}
          </SyntaxHighlighter>
          <h2>Get all SVGs with limit</h2>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {getAllWithLimit}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {getAllElementsWithLimit}
          </SyntaxHighlighter>
          <h2>Get SVGs by category</h2>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {getByCategory}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {getByCategoryElements}
          </SyntaxHighlighter>
          <h2>Get the SVG code</h2>
          <h3>Optimized SVG using svgo:</h3>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {optimized}
          </SyntaxHighlighter>
          <h3>No optimized SVG:</h3>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {noOtimized}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {noOtimizedElements}
          </SyntaxHighlighter>
          <h2>Search SVG by title</h2>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {searchTitle}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {searchTitleElements}
          </SyntaxHighlighter>
          <h2>Get the list of categories</h2>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {listCategories}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="typescript" style={nightOwl} showLineNumbers wrapLongLines>
            {listCategoriesElements}
          </SyntaxHighlighter>
        </div>
        <div className="api-docs__sidebar">
          <ul className="api-docs__nav">
            <li>Introduction</li>
            <li>Limitations</li>
            <li>Bases URLs</li>
            <li>Typescript</li>
            <li>Endpoints</li>
            <ul>
              <li>Ges All SVGs</li>
              <li>Get all SVGs with limit</li>
              <li>Get SVGs by category</li>
              <li>Get the SVG code</li>
              <li>Search SVG by title</li>
              <li>Get the list of categories</li>
            </ul>
          </ul>
        </div>
      </div>
    </SvgContent>
  );
};