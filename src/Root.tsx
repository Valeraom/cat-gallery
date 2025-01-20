import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Paths } from './enums';
import App from './App';
import { Favourites, Gallery, Home, NotFound } from './pages';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path={Paths.HOME} element={<App />}>
          <Route index element={<Home />} />
          <Route path={Paths.GALLERY} element={<Gallery />} />
          <Route path={Paths.FAVOURITES} element={<Favourites />} />
          <Route path={Paths.NOT_FOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};
