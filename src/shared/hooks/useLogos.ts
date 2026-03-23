import { useQuery } from "@tanstack/react-query";
import { fetchLogos } from "../index";

export const useLogos = () => {
  return useQuery({
    queryKey: ["logos"],
    queryFn: fetchLogos,
  });
};