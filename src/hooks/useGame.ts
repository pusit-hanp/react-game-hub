import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import Game from "../entities/Game";
import APIClitent from "../services/api-client";

const apiClient = new APIClitent<Game>("/games");

const useGame = (slug: string) => {
  return useQuery({
    queryKey: ["game", slug],
    queryFn: () => apiClient.get(slug),
    staleTime: ms("24h"),
  });
};

export default useGame;
