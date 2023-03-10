import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

import {
  FilmList,
  FilmItem,
  FilmListTitle,
  FilmListTitleContainer,
} from './Home.styled';

// const BASE_URL = 'https://api.themoviedb.org/';
// const KEY = '7b0e471f76e5da9e6415f6c271770eca';

const Home = () => {
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/trending/movie/day?api_key=7b0e471f76e5da9e6415f6c271770eca`
        );
        setMovies(prev => [...prev, ...data.results]);
        // console.log(data);
        // setImageHits(data);
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
    <FilmListTitleContainer>
      <FilmListTitle>Trending Now</FilmListTitle>
      <FilmList>
        {movies.map(movie => (
          <FilmItem key={movie.id}>
            <Link state={{ from: location }} to={`movies/${movie.id}`}>
              {movie.title}
            </Link>
          </FilmItem>
        ))}
      </FilmList>
    </FilmListTitleContainer>
  );
};

export default Home;
