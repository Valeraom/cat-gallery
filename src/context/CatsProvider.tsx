import { ReactNode, useEffect, useState } from 'react';

import CatsContext from './CatsContext';
import { Cat } from '../types';

interface Props {
  children: ReactNode;
}

export const CatsProvider = ({ children }: Props) => {
  const [queries, setQueries] = useState<string[]>([]);
  const [favourites, setFavourites] = useState<Cat[]>([]);

  const toggleFavourites = (cat: Cat) => {
    const isFavourite =
      favourites.find((catItem: Cat) => cat.id === catItem.id) || false;

    if (isFavourite) {
      setFavourites(current => {
        const updatedFavourites = [...current].filter(
          (catItem: Cat) => catItem.id !== cat.id,
        );
        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
        return updatedFavourites;
      });
    } else {
      setFavourites(current => {
        const updatedFavourites = [...current, cat];
        localStorage.setItem('favourites', JSON.stringify(updatedFavourites));
        return updatedFavourites;
      });
    }
  };

  useEffect(() => {
    const currentFavourites = localStorage.getItem('favourites');

    if (currentFavourites) {
      setFavourites(JSON.parse(currentFavourites));
    }
  }, []);

  const changeQueries = (queries: string[]) => {
    setQueries(queries);
  };

  return (
    <CatsContext.Provider
      value={{
        queries,
        changeQueries,
        favourites,
        toggleFavourites,
      }}
    >
      {children}
    </CatsContext.Provider>
  );
};
