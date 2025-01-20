import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';

import { getData } from '../api';

export const useCats = (breeds: string[]) => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['cats'],
    queryFn: () => getData(breeds),
  });

  useEffect(() => {
    refetch();
  }, [breeds]);

  return { data, isLoading, isError };
};
