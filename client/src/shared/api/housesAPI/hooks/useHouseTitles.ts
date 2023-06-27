import { useQuery } from '@tanstack/react-query';
import { housesAPI } from '../housesAPI';

export function useHouseTitles(id: string) {
  const {
    data: titles,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['titles', id],
    queryFn: () => housesAPI.getHouseTitles(id),
  });

  return { titles, isError, isLoading };
}
