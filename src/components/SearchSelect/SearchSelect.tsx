import { FC, useContext } from 'react';
import CatsContext from '../../context/CatsContext';
import { Breeds } from '../../enums/Breeds';
import Select from 'react-select';
import { MultiValue } from 'react-select';

interface Props {
  onResetPage: () => void;
}

export const SearchSelect: FC<Props> = ({ onResetPage }) => {
  const { queries, changeQueries } = useContext(CatsContext);

  const handleChangeQueries = (
    queries: MultiValue<{ value: string; label: string }>,
  ) => {
    const preparedQueries = queries.map(query => query.value);
    changeQueries(preparedQueries);
    onResetPage();
  };

  const availableBreeds = [
    { value: Breeds.AEGEAN, label: 'Aegean' },
    { value: Breeds.CHANTILLY_TIFFANY, label: 'Chantilly-Tiffany' },
    { value: Breeds.CHARTREUX, label: 'Chartreux' },
    { value: Breeds.CHAUSIE, label: 'Chausie' },
    { value: Breeds.CYMRIC, label: 'Cymric' },
    { value: Breeds.KORAT, label: 'Korat' },
    { value: Breeds.KURILIAN, label: 'Kurilian' },
    { value: Breeds.SOMALI, label: 'Somali' },
    { value: Breeds.MANX, label: 'Manx' },
    { value: Breeds.TOYGER, label: 'Toyger' },
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
          placeholder="Choose breed"
          onInputChange={() => {}}
          onMenuOpen={() => {}}
        />
      </div>
    </div>
  );
};
