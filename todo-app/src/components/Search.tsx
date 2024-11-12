import React, { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebounce';

interface SearchProps {
  setSearchTerm: (value: string) => void;
}

const Search: React.FC<SearchProps> = ({ setSearchTerm }) => {
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); 

  useEffect(() => {
    setSearchTerm(debouncedValue);
  }, [debouncedValue, setSearchTerm]);

  return (
    <input
      type="text"
      placeholder="Search tasks"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className="search-input"
    />
  );
};

export default Search;
