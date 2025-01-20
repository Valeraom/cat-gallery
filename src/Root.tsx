import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { Paths } from './enums';
import App from './App';
import { Favourites, Gallery, Home, NotFound } from './pages';
import { CatsProvider } from './context/CatsProvider';

export const Root = () => {
  return (
    <Router>
      <Routes>
        <Route path={Paths.HOME} element={<App />}>
          <Route index element={<Home />} />
          <Route
            path={Paths.GALLERY}
            element={
              <CatsProvider>
                <Gallery />
              </CatsProvider>
            }
          />
          <Route
            path={Paths.FAVOURITES}
            element={
              <CatsProvider>
                <Favourites />
              </CatsProvider>
            }
          />
          <Route path={Paths.NOT_FOUND} element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};
