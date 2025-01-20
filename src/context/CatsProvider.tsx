import { ReactNode, useState } from 'react';
import CatsContext from './CatsContext';
import { Cat } from '../types';

interface Props {
  children: ReactNode;
}

export const CatsProvider = ({ children }: Props) => {
  const [queries, setQueries] = useState<string[]>([]);
  const [favourites, setFavoutites] = useState<Cat[]>([]);

  const addFavouriteCat = (cat: Cat) => {
    setFavoutites(current => [...current, cat]);
  };

  const deleteFavouriteCat = (catId: string) => {
    setFavoutites(current =>
      [...current].filter(catItem => catId !== catItem.id),
    );
  };

  const changeQueries = (queries: string[]) => {
    setQueries(queries);
  };

  return (
    <CatsContext.Provider
      value={{
        queries,
        changeQueries,
        favourites,
        addFavouriteCat,
        deleteFavouriteCat,
      }}
    >
      {children}
    </CatsContext.Provider>
  );
};
