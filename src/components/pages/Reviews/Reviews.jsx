// ${BASE_URL}/movie/${movie_id}/reviews?api_key=${KEY}
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import { ReviewList, ReviewItem } from './Reviews.styled';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  console.log(reviews);

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=7b0e471f76e5da9e6415f6c271770eca`
        );
        setReviews(data.results);
        // console.log(data.results);
        // setImageHits(data);
      } catch (error) {
        setReviews([]);
        // toast.error('Cannot process your request');
      } finally {
        // setIsLoading(false);
      }
    };
    fetchData();
  }, [movieId]);

  // if (reviews === []) {
  // }

  if (reviews !== []) {
    return (
      <ReviewList>
        {reviews.map(review => {
          return (
            <ReviewItem key={review.author}>
              <b>{review.author}</b>
              <p>{review.content}</p>
            </ReviewItem>
          );
        })}
      </ReviewList>
    );
  } else {
    return <h2>Sorry no one left review yet</h2>;
  }
};

export default Reviews;
