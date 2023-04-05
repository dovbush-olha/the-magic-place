export interface WandsI {
  id: number;
  wood: string | null;
  name: string;
}

export interface FetchedWandsI {
  wands: WandsI[] | undefined;
  isLoading: boolean;
  isError: Error;
}
