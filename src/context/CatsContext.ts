import { createContext } from 'react';
import { Cat } from '../types';

interface InitialCatsContext {
  queries: string[];
  changeQueries: (queries: string[]) => void;
  favourites: Cat[];
  toggleFavourites: (cat: Cat) => void;
}

const CatsContext = createContext<InitialCatsContext | undefined>(undefined);

export default CatsContext;
