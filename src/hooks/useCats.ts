import { useQuery } from '@tanstack/react-query';
import { getData } from '../api';
import { useEffect } from 'react';

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
