import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// const BASE_URL = 'https://api.themoviedb.org/';
// const KEY = '7b0e471f76e5da9e6415f6c271770eca';

const Home = () => {
  // const [searchReq, setSearchReq] = useState('');
  // const [filmHits, setFilmHits] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=7b0e471f76e5da9e6415f6c271770eca`
        );
        setMovies(prev => [...prev, ...data.results]);
        console.log(data);
        // setImageHits(data);
        // if (page === 1) {
        //   toast.success(`We found ${data.total} images`);
        // }
      } catch (error) {
        setMovies([]);
        // toast.error('Cannot process your request');
      } finally {
        // setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <Link>{movie.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Home;
