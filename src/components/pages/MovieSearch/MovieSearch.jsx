import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import SearchBar from 'components/SearchBar/SearchBar';

import { useSearchParams } from 'react-router-dom';

const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!search) {
      return;
    }
    const fetchData = async () => {
      // setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=7b0e471f76e5da9e6415f6c271770eca&query=${search}`
        );
        setMovies(data.results);

        // setImageHits(data);
      } catch (error) {
        // setMovies([]);
        // toast.error('Cannot process your request');
      } finally {
        // setIsLoading(false);
      }
    };
    fetchData();
  }, [search, setSearchParams]);

  return (
    <>
      <SearchBar />
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link to={`${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
      {/* <MoviePage /> */}
    </>
  );
};

export default MovieSearch;
