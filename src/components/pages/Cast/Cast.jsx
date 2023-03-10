import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import {
  CastList,
  CastItem,
  CastImg,
  CastName,
  CastPref,
  CastInfoContainer,
} from './Cast.styled';

import noPic from '../../images/noPicImage.jpg';

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
        setCast(data.cast);

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
    <CastList>
      {cast.map(actor => {
        return (
          <CastItem key={actor.id}>
            <CastImg
              src={
                actor.profile_path
                  ? 'https://image.tmdb.org/t/p/w300' + actor.profile_path
                  : noPic
              }
              alt={actor.original_name}
            />
            <CastInfoContainer>
              <CastName>{actor.name}</CastName>
              <CastPref>as</CastPref>
              <CastName>{actor.character}</CastName>
            </CastInfoContainer>
          </CastItem>
        );
      })}
    </CastList>
  );
};

export default Cast;

// {
//   path ? 'https://image.tmdb.org/t/p/w200' + path : img;
// }
