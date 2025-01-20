import { useContext } from 'react';
import CatsContext from '../../context/CatsContext';
import { Breeds } from '../../enums/Breeds';
import Select from 'react-select';
import { MultiValue } from 'react-select';

export const SearchSelect = () => {
  const { queries, changeQueries } = useContext(CatsContext);

  const handleChangeQueries = (
    queries: MultiValue<{ value: Breeds; label: string }>,
  ) => {
    const preparedQueries = queries.map(query => query.value);
    changeQueries(preparedQueries);
  };

  const availableBreeds = [
    { value: Breeds.AEGEAN, label: 'Aegean' },
    { value: Breeds.CHANTILLY_TIFFANY, label: 'Chantilly-Tiffany' },
    { value: Breeds.CHARTREUX, label: 'Chartreux' },
    { value: Breeds.CHAUSIE, label: 'Chausie' },
    { value: Breeds.CYMRIC, label: 'Cymric' },
  ];

  const selectedBreeds = queries.map(query => ({
    value: query,
    label: availableBreeds.find(breed => breed.value === query)?.label || '',
  }));

  return (
    <div className="flex items-center	flex-col justify-center mb-6">
      <div className="mb-2">
        <Select
          isMulti
          name="breeds"
          options={availableBreeds}
          value={selectedBreeds}
          onChange={handleChangeQueries}
          placeholder="Оберіть породи"
          onInputChange={() => {}}
          onMenuOpen={() => {}}
        />
      </div>
    </div>
  );
};
