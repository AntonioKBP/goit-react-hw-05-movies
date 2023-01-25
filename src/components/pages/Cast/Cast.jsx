import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=7b0e471f76e5da9e6415f6c271770eca`
        );
        setCast(data);
        // console.log(data.results);
        // setImageHits(data);
      } catch (error) {
        setCast([]);
        // toast.error('Cannot process your request');
      } finally {
        // setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);
  return (
    <ul>
      <li>Ckeck Cast</li>
    </ul>
  );
};

export default Cast;
