import React from 'react';
import SearchExtended from './components/SearchExtended';
import SearchButton from './components/SearchButton';

interface Props {
  extended: true | false | undefined;
}
const SearchHeader = (props: Props) => {
  return props.extended ? <SearchExtended /> : <SearchButton />;
};

export default SearchHeader;
