import { create } from "zustand";
import type GameQuery from "../utils/gameQuery";
import type ParentPlatform from "../utils/ParentPlatform";
import type { SortOption } from "../components/GenreSelector";

interface GameQueryStore extends GameQuery {
  setGenreName: (genreName: string | null) => void;
  setPlatform: (platform: ParentPlatform | null) => void;
  setSearchText: (searchText: string) => void;
  setOrdering: (ordering: SortOption | null) => void;
  setDiscard: () => void;
}

const useGameQuery = create<GameQueryStore>((set) => ({
  genreName: null,
  platform: null,
  searchText: null,
  ordering: null,
  setGenreName: (genreName: string | null) => set({ genreName }),
  setPlatform: (platform: ParentPlatform | null) => set({ platform }),
  setSearchText: (searchText: string | null) => set({ searchText }),
  setOrdering: (ordering: SortOption | null) => set({ ordering }),
  setDiscard: () => set({ genreName: null, platform: null, searchText: "", ordering: null }),
}));

export default useGameQuery;
