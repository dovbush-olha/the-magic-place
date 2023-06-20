import { useQuery } from '@tanstack/react-query';
import { professorsAPI } from 'shared/api/professorsAPI/professorsAPI';

export function useProfessors() {
  const {
    data: professors,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['professors'],
    queryFn: professorsAPI.getProfessors,
  });

  return { professors, isError, isLoading };
}
