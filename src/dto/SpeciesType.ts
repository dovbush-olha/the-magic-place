export interface SpeciesType {
  id: number;
  native: string;
  related_types: number;
  name: string;
}

export interface FetchedSpeciesType {
  species: SpeciesType[];
  isLoading: boolean;
  isError: Error;
}
