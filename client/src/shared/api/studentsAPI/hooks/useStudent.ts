import { useQuery } from '@tanstack/react-query';
import { studentsAPI } from '../studentsAPI';

export function useStudent(id: string) {
  const {
    data: student,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['student', id],
    queryFn: () => studentsAPI.getStudent(id),
  });

  return { student, isError, isLoading };
}
