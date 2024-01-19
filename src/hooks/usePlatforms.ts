import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import APIClitent from "../services/api-client";
import ms from "ms";

const apiClient = new APIClitent<Platform>("/platforms/lists/parents");

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: ms("24h"),
    initialData: platforms,
  });

export default usePlatforms;
