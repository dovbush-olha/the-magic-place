export interface HouseType {
  id: number;
  image_url: string | null;
  members: number;
  name: string;
}

export interface FetchedHousesType {
  houses: HouseType[];
  isLoading: boolean;
  isError: Error;
}
