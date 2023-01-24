// import axios from 'axios';

import { Routes, Route } from 'react-router-dom';

import Layout from './Layout/Layout';
// import Home from './pages/Home/Home';
// import MovieSearch from './pages/MovieSearch/MovieSearch';
import NotFoundPage from './NotFoundPage/NotFoundPage';

import Home from './pages/Home/Home';
import MovieSearch from './pages/MovieSearch/MovieSearch';

// const BASE_URL = 'https://api.themoviedb.org/';
// const KEY = '7b0e471f76e5da9e6415f6c271770eca';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" index element={<Home />} />
          <Route path="movies" element={<MovieSearch />} />
          <Route path="movies/:movieId" element={<MovieSearch />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
};

// https://api.themoviedb.org/3/movie/550?api_key=7b0e471f76e5da9e6415f6c271770eca
// const fetchApi = async () => {
//   try {
//     const resolved = await axios.get(
//       `${BASE_URL}/3/movie/550?api_key=${KEY}`
//     );
//     console.log(resolved);
//   } catch (error) {}
// };
// fetchApi();

//   async getPopularMovies() {
//     try {
//       const response = await axios.get(
//         `${BASE_URL}/trending/movie/day?api_key=${API_KEY}&page=${this._page}`
//       );
//       console.log(response);
//       return response;
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   async getSearchMovies() {
//     try {
//       const response = await axios.get(
//         `${BASE_URL}?${API_KEY}&query=${this.inputValue}&page=${this.page}`
//       );
//       return response;
//     } catch (error) {
//       console.error(error);
//     }
// }
