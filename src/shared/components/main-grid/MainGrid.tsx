import { Toolbar } from "../../../layout"
import { useSvgl, fetchLogos } from "../../index";

export const MainGrid = () => {
  const { logos, loading, error } = useSvgl();
  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;
  fetchLogos().then(data => console.log(data));


  return (
    <div className="main__grid">
      <Toolbar />
      <div className="svg__content">
        <div className="svg__data">{logos.length} logos</div>
        <div className="svg__grid">
          <ul>
            {logos.map((logo) => (
              <li key={logo.id}>{logo.title}</li>
            ))}
          </ul>
        </div>
      </div>
      {/* ESTE DEBERIA SER UN COMPONENTE, REVISAR POSIBILIDADES */}
    </div>
  )
}
