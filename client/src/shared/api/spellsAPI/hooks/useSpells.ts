import { useQuery } from '@tanstack/react-query';
import { spellsAPI } from '../spellsAPI';

export function useSpells() {
  const {
    data: spells,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['spells'],
    queryFn: spellsAPI.getSpells,
  });

  return { spells, isError, isLoading };
}
