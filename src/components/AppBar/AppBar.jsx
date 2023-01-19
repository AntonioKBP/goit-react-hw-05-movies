import { Link } from 'react-router-dom';

const AppBar = () => {
  return (
    <div className="container">
      <div>
        <nav className="main-nav">
          <Link to={'/'}>
            <button type="button">Home</button>
          </Link>
          <Link to={'movies'}>
            <button type="button">Movies</button>
          </Link>
        </nav>
      </div>
    </div>
  );
};

export default AppBar;
