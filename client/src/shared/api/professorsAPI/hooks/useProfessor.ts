import { useQuery } from '@tanstack/react-query';
import { professorsAPI } from 'shared/api/professorsAPI/professorsAPI';

export function useProfessor(id) {
  const {
    data: professor,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['professor', id],
    queryFn: professorsAPI.getProfessor,
  });

  return { professor, isError, isLoading };
}
