import { useState } from "react";
import { Toolbar } from "../../../layout";
import { useSvgl } from "../../index";

export const MainGrid = () => {
  const { logos, loading, error } = useSvgl();
  const [query, setQuery] = useState("");

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  const filteredLogos = query.trim()
    ? logos.filter((logo) =>
        logo.title.toLowerCase().includes(query.toLowerCase())
      )
    : logos;

  return (
    <div className="main__grid">
      
      <Toolbar query={query} onSearch={setQuery} />

      <div className="svg__content">
        <div className="svg__data">{filteredLogos.length} logos</div>
        <div className="svg__grid">
          <ul>
            {filteredLogos.map((logo) => (
              <li key={logo.id}>{logo.title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};