import type { Game } from "../utils/fetch-game-types";
import type GameQuery from "../utils/gameQuery";
import useFetchData from "./useFetchData";
export default function useGame(gameQuery: GameQuery): {
  data: Game[];
  errorMessage: string;
  isLoading: boolean;
} {
  return useFetchData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genreName,
        parent_platforms: gameQuery.platform?.id,
        search: gameQuery.searchText,
      },
    },
    [gameQuery]
  );
}
