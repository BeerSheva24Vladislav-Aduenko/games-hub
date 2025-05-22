import type ParentPlatform from "../utils/ParentPlatform";
import useFetchData from "./useFetchData";

export default function usePlatforms(): {
  data: ParentPlatform[];
  errorMessage: string;
  isLoading: boolean;
} {
  return useFetchData<ParentPlatform>("/platforms/lists/parents");
}
