import { useQuery } from '@tanstack/react-query';
import { professorsAPI } from '../professorsAPI';

export function useProfessor(id: string) {
  const {
    data: professor,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['professor', id],
    queryFn: () => professorsAPI.getProfessor(id),
  });

  return { professor, isError, isLoading };
}
