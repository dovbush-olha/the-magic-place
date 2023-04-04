export interface WandsType {
  id: number;
  wood: string | null;
  name: string;
}

export interface FetchedWandsType {
  wands: WandsType[];
  isLoading: boolean;
  isError: Error;
}
