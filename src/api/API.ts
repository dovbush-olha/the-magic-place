import axios from 'axios';
import useSWR from 'swr';
import { FetchedCharactersType } from '../dto/CharacterType';
import { FetchedHousesType } from '../dto/HouseTypes';
import { FetchedSpeciesType } from '../dto/SpeciesType';
import { FetchedWandsType } from '../dto/WandsType';

const BASE_URL = 'https://legacy--api.herokuapp.com/api/v1';

const fetcher = (url: string) => axios.get(`${BASE_URL}${url}`).then((res) => res.data);

export function useCharacters(currentPage = 1): FetchedCharactersType {
  const { data, error, isLoading } = useSWR(`/characters?page=${currentPage}`, fetcher);
  return {
    characters: data,
    isLoading,
    isError: error,
  };
}
// всього 33 сторінки (655 персонажів, по 20 на кожній)

export function useHouses(): FetchedHousesType {
  const { data, error, isLoading } = useSWR('/houses', fetcher);
  return {
    houses: data,
    isLoading,
    isError: error,
  };
}

export function useSpecies(currentPage = 1): FetchedSpeciesType {
  const { data, error, isLoading } = useSWR(`/species?page=${currentPage}`, fetcher);
  return {
    species: data,
    isLoading,
    isError: error,
  };
}
// всього 6 сторінoк (110 тварин, по 20 на кожній)

export function useWands(currentPage = 1): FetchedWandsType {
  const { data, error, isLoading } = useSWR(`/wands?page=${currentPage}`, fetcher);
  return {
    wands: data,
    isLoading,
    isError: error,
  };
}
// всього 5 сторінoк (84 палички, по 20 на кожній)

export function useBooks() {
  const { data, error, isLoading } = useSWR('/books', fetcher);
  return {
    books: data,
    isLoading,
    isError: error,
  };
}
