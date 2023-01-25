// ${BASE_URL}/movie/${movie_id}/reviews?api_key=${KEY}
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      // setIsLoading(true);
      try {
        const { data } = await axios.get(
          `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=7b0e471f76e5da9e6415f6c271770eca`
        );
        setReviews(data.results);
        console.log(data);
        // setImageHits(data);
      } catch (error) {
        setReviews([]);
        // toast.error('Cannot process your request');
      } finally {
        // setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <ul>
      {reviews.map(review => {
        <li key={review.author}>
          <b>{review.author}</b>
          <p>{review.content}</p>
        </li>;
      })}
    </ul>
  );
};

export default Reviews;
