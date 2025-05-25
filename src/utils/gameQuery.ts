import type { SortOption } from "../components/SortSelector";
import type ParentPlatform from "./ParentPlatform";

export default interface GameQuery {
  genreName: string | null;
  platform: ParentPlatform | null;
  searchText: string | null;
  ordering: SortOption | null;
}
