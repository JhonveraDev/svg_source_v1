import { useParams } from "react-router-dom";
import { LogoGrid } from "../index";

export const MainGrid = () => {
  const { category } = useParams<{ category?: string }>();

  return (
    <LogoGrid
      label={category ?? "logos"}
      containerClass="main__grid"
      category={category}
    />
  );
};