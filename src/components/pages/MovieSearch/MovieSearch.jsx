import { useState, useEffect } from 'react';
import axios from 'axios';

import MoviePage from '../MoviePage/MoviePage';

const MovieSearch = () => {
  const [searchReq, setSearchReq] = useState('');
  const [movies, setMovies] = useState([]);

  const handleSearch = e => {
    setSearchReq(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSearchReq(searchReq);

    setSearchReq('');
  };

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/search/${movies}?api_key=7b0e471f76e5da9e6415f6c271770eca&language=en-US&page=1&include_adult=false`
        );
        setMovies(prev => [...prev, ...data.results]);

        // setImageHits(data);
      } catch (error) {
        setMovies([]);
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
      <input
        type="text"
        placeholder="Type here to search..."
        value={searchReq}
        onChange={handleSearch}
      />
      <button onClick={handleSubmit} type="submit">
        Search
      </button>
      <ul>
        <li></li>
      </ul>
    </>
  );
};

export default MovieSearch;
