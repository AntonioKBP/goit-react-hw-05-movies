import axios from 'axios';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MoviePage = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();

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
    <div>
      <Link to="/">
        <button type="button">Go Back</button>
      </Link>
      <div>
        <div>
          <img
            src={poster_path && 'https://image.tmdb.org/t/p/w300' + poster_path}
            alt={title}
          />
        </div>
        <div>
          <h2>
            {title}({new Date(release_date).getFullYear()})
          </h2>
          <p>User Score: {vote_average}</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres && genres.map(({ name }) => name).join(', ')} </p>
        </div>
      </div>
      <div>
        <p>Additional Information</p>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <Outlet />
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
          <Outlet />
        </ul>
      </div>
    </div>
  );
};

export default MoviePage;
