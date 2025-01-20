import { useContext, useState } from 'react';
import ReactPaginate from 'react-paginate';

import { useCats } from '../../hooks';
import { Cat } from '../../types';
import CatsContext from '../../context/CatsContext';

import { CatCard, ErrorMessage, SearchSelect } from '../../components';
import styles from './styles.module.scss';

export const Gallery = () => {
  const { queries } = useContext(CatsContext);
  const { data, isLoading, isError } = useCats(queries);

  const [currentPage, setCurrentPage] = useState<number>(0);
  const itemsPerPage = 10;

  const isDataValid = !isError;

  const handlePageClick = (selectedObject: { selected: number }) => {
    setCurrentPage(selectedObject.selected);
  };

  const preparedData = isDataValid
    ? data?.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage)
    : [];

  return (
    <div>
      <h1 className="title mb-8">Gallery</h1>

      <SearchSelect onResetPage={() => setCurrentPage(0)} />

      <div className="catalog mb-10">
        {isLoading && !isError && (
          <p className="text-center col-span-full">Loading...</p>
        )}

        {isError && <ErrorMessage />}

        {!isError && !isLoading && data?.length === 0 && (
          <p className="text-center col-span-full">No cats...</p>
        )}

        {!isError &&
          !isLoading &&
          data?.length !== 0 &&
          preparedData.map((cat: Cat) => <CatCard key={cat.id} cat={cat} />)}
      </div>

      {!isLoading && !isError && data?.length !== 0 && (
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          breakLabel={'...'}
          pageCount={Math.ceil(data?.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={styles.pagination}
          activeClassName={styles.active}
        />
      )}
    </div>
  );
};
