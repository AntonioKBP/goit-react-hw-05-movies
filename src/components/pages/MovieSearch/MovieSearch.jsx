import { useState, useEffect } from 'react';
import axios from 'axios';

import MoviePage from '../MoviePage/MoviePage';
import { useSearchParams } from 'react-router-dom';

const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('search') ?? '';
  const [movies, setMovies] = useState([]);

  const handleSearch = e => {
    const { value } = e.target;
    setSearchParams({ search: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target;
    setSearchParams({ search: value });
  };

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=7b0e471f76e5da9e6415f6c271770eca&query=${movies}`
        );
        setMovies(prev => [...prev, ...data.results]);

        // setImageHits(data);
      } catch (error) {
        // setMovies([]);
        // toast.error('Cannot process your request');
      } finally {
        // setIsLoading(false);
      }
    };
    fetchData();
  }, [movies]);

  return (
    <>
      <MoviePage />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Type here to search..."
          value={searchParams}
          onChange={handleSearch}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        <li></li>
      </ul>
    </>
  );
};

export default MovieSearch;
