import React, { useRef } from 'react';
import { View, Image, TextInput, TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect'
import bookActions from '@redux/books/actions';
import { State, Books } from '@interfaces';
import { booksSortFunction } from '@utils';
import styles from './styles';

interface FilterBook {
  books: Books;
  text: string;
}
const SearchExtended = () => {
  const textInput = useRef({});
  const dispatch = useDispatch();
  const booksStored = useSelector<State, Books>((state) => state.bookReducer.books);

  const filterBooks = createSelector(
    (state: FilterBook) => state.books,
    (state: FilterBook) => state.text,
    (books, textSearched) =>
      books.filter((item: Books) => item.title.includes(textSearched)).sort(booksSortFunction)
  );

  const searching = (text: string) => {
    if (text.length > 0) {
      const result = filterBooks({ books: booksStored, text });
      dispatch(bookActions.booksFiltered(dispatch, result));
    }
  };
  const wipeSearch = () => {
    textInput.current.clear();
    dispatch(bookActions.wipeBooksFiltered(dispatch));
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('@assets/general/ic_search_placeholder.png')}
        style={styles.icon}
        resizeMode="contain"
      />
      <TextInput
        style={styles.input}
        maxLength={36}
        onChangeText={searching}
        placeholder="Search"
        ref={textInput}
      />
      <TouchableOpacity onPress={wipeSearch}>
        <Image source={require('@assets/general/close.png')} style={styles.icon} resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchExtended;
