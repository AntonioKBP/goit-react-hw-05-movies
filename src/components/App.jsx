import { lazy, Suspense } from 'react';

import { Routes, Route } from 'react-router-dom';

// import Layout from './Layout/Layout';
// import NotFoundPage from './NotFoundPage/NotFoundPage';
// import MoviePage from './pages/MoviePage/MoviePage';
// import Home from './pages/Home/Home';
// import MovieSearch from './pages/MovieSearch/MovieSearch';
// import Cast from './pages/Cast/Cast';
// import Reviews from './pages/Reviews/Reviews';

// const BASE_URL = 'https://api.themoviedb.org/';
// const KEY = '7b0e471f76e5da9e6415f6c271770eca';

const Home = lazy(() => import('./pages/Home/Home'));
const Layout = lazy(() => import('./Layout/Layout'));
const MoviePage = lazy(() => import('./pages/MoviePage/MoviePage'));
const MovieSearch = lazy(() => import('./pages/MovieSearch/MovieSearch'));
const Cast = lazy(() => import('./pages/Cast/Cast'));
const Reviews = lazy(() => import('./pages/Reviews/Reviews'));
const NotFoundPage = lazy(() => import('./NotFoundPage/NotFoundPage'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Home />} />
            <Route path="movies" element={<MovieSearch />} />
            <Route path="movies/:movieId" element={<MoviePage />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};
