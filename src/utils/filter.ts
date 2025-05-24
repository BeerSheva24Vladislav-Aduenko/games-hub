import type ParentPlatform from "./ParentPlatform";

export type Filters = {
  genre: string | null;
  platform: ParentPlatform | null;
};

export const initialFilters: Filters = {
  genre: null,
  platform: null,
};