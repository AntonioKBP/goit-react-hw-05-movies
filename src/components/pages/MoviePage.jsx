import axios from 'axios';
import { Link } from 'react-router-dom';

import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const MoviePage = () => {
  const [movie, setMovie] = useState([]);
  const { movieId } = useParams();
  console.log(movieId);
  console.log(movie);

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

  const { title, release_date, genres, overview, poster_path } = movie;

  return (
    <div>
      <Link to="/">
        <button type="button">Go Back</button>
      </Link>
      <div>
        <img src={poster_path} alt="" />
        <h2>
          {title}({release_date})
        </h2>

        <p>User Score: 71%</p>

        <h3>Overview</h3>

        <p>{overview}</p>

        <h3>Genres</h3>

        <p>
          {genres.map(genre => {
            return `${genre.name} , `;
          })}
        </p>

        {/* <p>
          {genres.map(genre => {
            return `${genre.name}`;
          })}
        </p> */}
      </div>
      <div>
        <p>Additional Information</p>
        <ul>
          <li>
            <Link href="">Cast</Link>
          </li>
          <li>
            <Link href="">Reviews</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MoviePages;
