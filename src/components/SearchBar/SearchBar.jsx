import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchForm, SearchFormInput, SearchFormBtn } from './SearchBar.styled';
const SearchBar = () => {
  const [search, setSearch] = useState('');
  // eslint-disable-next-line no-unused-vars
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
    <SearchForm onSubmit={onSubmit}>
      <SearchFormInput
        type="text"
        placeholder="Type movie name to find..."
        value={search}
        onChange={onInputChange}
      />
      <SearchFormBtn type="submit">Search</SearchFormBtn>
    </SearchForm>
  );
};

export default SearchBar;
