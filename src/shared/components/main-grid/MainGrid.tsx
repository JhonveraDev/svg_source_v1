import { useSvgl } from "../../index";
import { LogoGrid } from "../index";

export const MainGrid = () => {
  const { logos, loading, error } = useSvgl();

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error: {error}</p>;

  return <LogoGrid logos={logos} label="logos" containerClass="main__grid" />;
};