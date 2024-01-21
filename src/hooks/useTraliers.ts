import { useQuery } from "@tanstack/react-query";
import Tralier from "../entities/Trailer";
import APIClitent from "../services/api-client";

const useTraliers = (gameId: number) => {
  const apiClient = new APIClitent<Tralier>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ["traliers", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useTraliers;
