import type { Game } from "../utils/fetch-game-types";
import type ParentPlatform from "../utils/ParentPlatform";
import useFetchData from "./useFetchData";
export default function useGame(genreName: string | null, platform: ParentPlatform | null) : {data: Game[], errorMessage:string, isLoading: boolean} {
    return useFetchData<Game>("/games", {params:{genres: genreName, parent_platforms: platform?.id}}, [genreName, platform] );
}