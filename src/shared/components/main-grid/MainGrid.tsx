import { useParams } from "react-router-dom";
import { useSvgl } from "../../index";
import { LogoGrid } from "../index";

export const MainGrid = () => {
  const { category } = useParams<{ category?: string }>();
  const { logos, loading, error } = useSvgl();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <LogoGrid
      logos={logos}
      label={category ?? "logos"}
      containerClass="main__grid"
      category={category}
    />
  );
};