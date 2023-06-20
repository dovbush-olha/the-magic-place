import { useQuery } from '@tanstack/react-query';
import { spellsAPI } from '../spellsAPI';

export function useSpell(id: string) {
  const {
    data: spell,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['spell', id],
    queryFn: () => spellsAPI.getSpell(id),
  });

  return { spell, isError, isLoading };
}
