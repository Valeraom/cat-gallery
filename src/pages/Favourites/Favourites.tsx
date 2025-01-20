import { useContext } from 'react';
import CatsContext from '../../context/CatsContext';
import { CatCard } from '../../components';
import { Cat } from '../../types';

export const Favourites = () => {
  const { favourites } = useContext(CatsContext);

  return (
    <div>
      <h1 className="title mb-8">Favourites</h1>

      <div className="catalog">
        {favourites.length === 0 ? (
          <p className="text-center col-span-full">No favourite cats</p>
        ) : (
          favourites.map((favouriteCat: Cat) => <CatCard cat={favouriteCat} />)
        )}
      </div>
    </div>
  );
};
