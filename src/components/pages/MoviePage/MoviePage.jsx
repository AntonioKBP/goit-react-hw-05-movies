import axios from 'axios';
import { Link, useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import {
  MainContainer,
  SecondaryContainer,
  GoBackBtn,
  FilmPosterContainer,
  FilmPoster,
  FilmInformationContainer,
  FilmTitle,
  SecondFilmTitle,
  FilmInfo,
  AddInfo,
  AddInfoList,
  AddInfoItem,
  AddInfoContainer,
} from './MoviePage.styled';

const MoviePage = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=7b0e471f76e5da9e6415f6c271770eca`
        );
        setMovie(data);
      } catch (error) {
        console.log('Ohhhhhh noooo');
        // setMovie([]);
        // toast.error('Cannot process your request');
      } finally {
        // setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  const { title, release_date, genres, overview, poster_path, vote_average } =
    movie;

  return (
    <MainContainer>
      <Link to={location.state?.from ?? '/'}>
        <GoBackBtn type="button">Go Back</GoBackBtn>
      </Link>
      <SecondaryContainer>
        <FilmPosterContainer>
          <FilmPoster
            src={poster_path && 'https://image.tmdb.org/t/p/w300' + poster_path}
            alt={title}
          />
        </FilmPosterContainer>
        <FilmInformationContainer>
          <FilmTitle>
            {title}({new Date(release_date).getFullYear()})
          </FilmTitle>
          <FilmInfo>User Score: {vote_average}</FilmInfo>
          <SecondFilmTitle>Overview</SecondFilmTitle>
          <FilmInfo>{overview}</FilmInfo>
          <SecondFilmTitle>Genres</SecondFilmTitle>
          <FilmInfo>
            {genres && genres.map(({ name }) => name).join(', ')}{' '}
          </FilmInfo>
        </FilmInformationContainer>
      </SecondaryContainer>
      <AddInfoContainer>
        <AddInfo>Additional Information</AddInfo>
        <AddInfoList>
          <AddInfoItem>
            <Link state={{ from: location.state?.from }} to="cast">
              Cast
            </Link>
          </AddInfoItem>

          <AddInfoItem>
            <Link state={{ from: location.state?.from }} to="reviews">
              Reviews
            </Link>
          </AddInfoItem>
        </AddInfoList>
        <Outlet />
      </AddInfoContainer>
    </MainContainer>
  );
};

export default MoviePage;

// state={{ from: location }}
