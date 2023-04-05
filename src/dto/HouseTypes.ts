export interface HouseI {
  id: number;
  image_url: string | null;
  members: number;
  name: string;
}

export interface FetchedHousesI {
  houses: HouseI[] | undefined;
  isLoading: boolean;
  isError: Error;
}
