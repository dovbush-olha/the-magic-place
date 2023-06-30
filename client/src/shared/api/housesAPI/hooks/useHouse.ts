import { useQuery } from '@tanstack/react-query';
import { housesAPI } from '../housesAPI';

export function useHouse(name: string) {
  const {
    data: house,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['house', name],
    queryFn: () => housesAPI.getHouse(name),
  });

  return { house, isError, isLoading };
}
