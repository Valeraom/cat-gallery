import { useContext } from 'react';
import { CatCard } from '../../components';
import { SearchSelect } from '../../components/SearchSelect/SearchSelect';
import { useCats } from '../../hooks/useCats';
import { Cat } from '../../types';
import CatsContext from '../../context/CatsContext';

export const Gallery = () => {
  const { queries } = useContext(CatsContext);
  const { data, isLoading } = useCats(queries);
  console.log(data);

  return (
    <div>
      <h1 className="title mb-8">Gallery</h1>

      <SearchSelect />

      <div className="catalog">
        {isLoading ? (
          <p className="text-center col-span-full">Loading...</p>
        ) : (
          data?.map((cat: Cat) => <CatCard cat={cat} />)
        )}
      </div>
    </div>
  );
};
