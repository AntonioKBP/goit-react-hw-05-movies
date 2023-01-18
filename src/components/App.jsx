import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/';
const KEY = '7b0e471f76e5da9e6415f6c271770eca';

export const App = () => {
  // https://api.themoviedb.org/3/movie/550?api_key=7b0e471f76e5da9e6415f6c271770eca
  const fetchApi = async () => {
    try {
      const resolved = await axios.get(
        `${BASE_URL}/3/movie/550?api_key=${KEY}`
      );
      console.log(resolved);
    } catch (error) {}
  };

  return <div>Started</div>;
};
