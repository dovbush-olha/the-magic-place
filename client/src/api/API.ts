import axios from 'axios';
import useSWR from 'swr';
import { FetchedCharactersI, CharacterI } from '../dto/CharacterType';
import { FetchedHousesI, HouseI } from '../dto/HouseTypes';
import { FetchedSpeciesI, SpeciesI } from '../dto/SpeciesType';
import { FetchedWandsI, WandsI } from '../dto/WandsType';
import { FetchedBooksI, BooksI } from '../dto/BooksType';

const BASE_URL = 'https://legacy--api.herokuapp.com/api/v1';

const fetcher = (url: string) => axios.get(`${BASE_URL}${url}`).then((res) => res.data);

export function useCharacters(currentPage = 1): FetchedCharactersI {
  const { data, error, isLoading } = useSWR<CharacterI[], Error>(`/characters?page=${currentPage}`, fetcher);
  return {
    characters: data,
    isLoading,
    error,
  };
}
// всього 33 сторінки (655 персонажів, по 20 на кожній)

export function useHouses(): FetchedHousesI {
  const { data, error, isLoading } = useSWR<HouseI[], Error>('/houses', fetcher);
  return {
    houses: data,
    isLoading,
    error,
  };
}

export function useSpecies(currentPage = 1): FetchedSpeciesI {
  const { data, error, isLoading } = useSWR<SpeciesI[], Error>(`/species?page=${currentPage}`, fetcher);
  return {
    species: data,
    isLoading,
    error,
  };
}
// всього 6 сторінoк (110 тварин, по 20 на кожній)

export function useWands(currentPage = 1): FetchedWandsI {
  const { data, error, isLoading } = useSWR<WandsI[], Error>(`/wands?page=${currentPage}`, fetcher);
  return {
    wands: data,
    isLoading,
    error,
  };
}
// всього 5 сторінoк (84 палички, по 20 на кожній)

export function useBooks(): FetchedBooksI {
  const { data, error, isLoading } = useSWR<BooksI[], Error>('/books', fetcher);
  return {
    books: data,
    isLoading,
    error,
  };
}
