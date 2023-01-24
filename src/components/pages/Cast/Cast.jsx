// import { useState, useEffect } from 'react';

const Cast = () => {
  // const [cast, setCast] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     // setIsLoading(true);
  //     try {
  //       const { data } = await axios.get(
  //         `https://api.themoviedb.org/3/movie/${movieId}?api_key=7b0e471f76e5da9e6415f6c271770eca`
  //       );
  //       setCast(prev => [...prev, ...data.results]);
  //       console.log(data);
  //       // setImageHits(data);
  //     } catch (error) {
  //       setCast([]);
  //       // toast.error('Cannot process your request');
  //     } finally {
  //       // setIsLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <ul>
      <li>Ckeck Cast</li>
    </ul>
  );
};

export default Cast;
