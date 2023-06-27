import { useQuery } from '@tanstack/react-query';
import { housesAPI } from '../housesAPI';

export function useHouse(id: string) {
  const {
    data: house,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['house', id],
    queryFn: () => housesAPI.getHouse(id),
  });

  return { house, isError, isLoading };
}
