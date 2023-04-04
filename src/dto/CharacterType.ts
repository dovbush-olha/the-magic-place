export interface CharacterType {
  id: number;
  image_url: string | null;
  name: string;
  species: string;
}

export interface FetchedCharactersType {
  characters: CharacterType[];
  isLoading: boolean;
  isError: Error;
}
