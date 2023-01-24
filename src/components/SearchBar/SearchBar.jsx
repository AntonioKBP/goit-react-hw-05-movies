import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchBar = () => {
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const onInputChange = e => {
    setSearch(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    setSearchParams(search !== '' ? { query: search } : {});
    setSearch('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Type here to search..."
        value={search}
        onChange={onInputChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
