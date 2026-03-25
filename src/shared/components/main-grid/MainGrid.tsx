import { useParams } from "react-router-dom";
import { LogoGrid, EmptyState } from "../index";

export const MainGrid = () => {
  const { category } = useParams<{ category?: string }>();

  return (
    <LogoGrid
      label={category ?? "SVG's"}
      headerIcon={
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide-icon lucide lucide-files"><path d="M15 2h-4a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8"></path><path d="M16.706 2.706A2.4 2.4 0 0 0 15 2v5a1 1 0 0 0 1 1h5a2.4 2.4 0 0 0-.706-1.706z"></path><path d="M5 7a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h8a2 2 0 0 0 1.732-1"></path></svg>
      }
      containerClass="main__grid"
      category={category}
      emptyMessage={
        <EmptyState title='SVG not found' desc='We couldn’t find any SVGs. Try another keyword or browse all.' icon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            style={{ overflow: "visible" }}
            viewBox="0 0 24 24"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            width="48"
            height="48"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3-4.03 2.42Z m4.03 3.58 -4.74 -2.85 m4.74 2.85 5-3 m-5 3v5.17"
              className="box-path svelte-1eo9nue"
            />
            <path
              d="M12 13.5V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5l-5 3Z m5 3-5-3 m5 3 4.74-2.85 M17 16.5v5.17"
              className="box-path svelte-1eo9nue"
            />
            <path
              d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3 5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0l-3 1.8Z M12 8 7.26 5.15 m4.74 2.85 4.74-2.85 M12 13.5V8"
              className="box-path svelte-1eo9nue"
            />
          </svg>}
        />
      }
    />
  );
};