export interface SpeciesI {
  id: number;
  native: string;
  related_types: number;
  name: string;
}

export interface FetchedSpeciesI {
  species: SpeciesI[] | undefined;
  isLoading: boolean;
  isError: Error;
}
