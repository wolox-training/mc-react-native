import React from 'react';
import SearchExtended from './components/SearchExtended';
import SearchButton from './components/SearchButton';

interface Props {
  extended?: boolean;
}
const SearchHeader = ({ extended = false }: Props) => {
  return extended ? <SearchExtended /> : <SearchButton />;
};

export default SearchHeader;
