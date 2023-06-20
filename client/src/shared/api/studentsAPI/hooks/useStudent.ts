import { useQuery } from '@tanstack/react-query';
import { studentsAPI } from 'shared/api/studentsAPI/studentsAPI';

export function useStudent(id) {
  const {
    data: student,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['student', id],
    queryFn: studentsAPI.getStudent,
  });

  return { student, isError, isLoading };
}
