// ${BASE_URL}/movie/${movie_id}/reviews?api_key=${KEY}
// import { useState, useEffect } from 'react';

const Reviews = () => {
  //   const [reviews, setReviews] = useState([]);

  //   useEffect(() => {
  //     const fetchData = async () => {
  //       // setIsLoading(true);
  //       try {
  //         const { data } = await axios.get(
  //           `https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=7b0e471f76e5da9e6415f6c271770eca`
  //         );
  //         setReviews(prev => [...prev, ...data.results]);
  //         console.log(data);
  //         // setImageHits(data);
  //       } catch (error) {
  //         setCast([]);
  //         // toast.error('Cannot process your request');
  //       } finally {
  //         // setIsLoading(false);
  //       }
  //     };
  //     fetchData();
  //   }, []);

  return (
    <ul>
      <li>Check Reviews</li>
    </ul>
  );
};

export default Reviews;
