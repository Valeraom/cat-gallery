import { useContext } from 'react';

import { Cat } from '../../types';
import CatsContext from '../../context/CatsContext';

import { CatCard } from '../../components';

export const Favourites = () => {
  const { favourites } = useContext(CatsContext);

  return (
    <div>
      <h1 className="title mb-8">Favourites</h1>

      <div className="catalog">
        {favourites.length === 0 ? (
          <p className="text-center col-span-full">No favourite cats</p>
        ) : (
          favourites.map((favouriteCat: Cat) => (
            <CatCard key={favouriteCat.id} cat={favouriteCat} />
          ))
        )}
      </div>
    </div>
  );
};
