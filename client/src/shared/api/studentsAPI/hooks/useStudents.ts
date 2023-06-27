import { useQuery } from '@tanstack/react-query';
import { studentsAPI } from '../studentsAPI';

export function useStudents() {
  const {
    data: students,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['/students'],
    queryFn: studentsAPI.getStudents,
  });

  return { students, isError, isLoading };
}
