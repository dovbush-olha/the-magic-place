export interface CharacterI {
  id: number;
  image_url: string | null;
  name: string;
  species: string;
}

export interface FetchedCharactersI {
  characters: CharacterI[] | undefined;
  isLoading: boolean;
  isError: Error;
}
