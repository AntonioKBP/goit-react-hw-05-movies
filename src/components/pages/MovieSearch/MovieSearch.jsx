import { useState, useEffect } from 'react';
import axios from 'axios';

import MoviePage from '../MoviePage/MoviePage';
import { useSearchParams } from 'react-router-dom';

const MovieSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get('query') ?? '';
  const [movies, setMovies] = useState([]);
  const [searchField, setSearchField] = useState('');

  const handleSearch = e => {
    const { value } = e.target;
    setSearchField({ query: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const { value } = e.target;
    setSearchParams({ query: searchField });
  };

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=7b0e471f76e5da9e6415f6c271770eca&query=${search}`
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

      <ul>
        <li></li>
      </ul>
    </>
  );
};

export default MovieSearch;
