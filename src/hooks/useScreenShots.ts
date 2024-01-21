import { useQuery } from "@tanstack/react-query";
import { ScreenShot } from "../entities/Screenshot";
import APIClitent from "../services/api-client";

const useScreenShots = (gameId: number) => {
  const apiClient = new APIClitent<ScreenShot>(`games/${gameId}/screenshots`);

  return useQuery({
    queryKey: ["screenshots", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useScreenShots;
