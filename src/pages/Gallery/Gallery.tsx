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

      <div className="w-max grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5  justify-items-center gap-8 mx-auto">
        {isLoading ? (
          <p className="text-center">Loading...</p>
        ) : (
          data?.map((cat: Cat) => <CatCard cat={cat} />)
        )}
      </div>
    </div>
  );
};
