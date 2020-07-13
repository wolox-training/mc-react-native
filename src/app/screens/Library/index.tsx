import React, { useEffect } from 'react';
import { FlatList, View, ActivityIndicator } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import bookActions from '@redux/books/actions';
import { State, Books } from '@interfaces';
import colors from '@constants/colors';
import BookItem from './components/BookItem';
import LibrarySeparator from './components/LibrarySeparator';
import EmptyLibrary from './components/EmptyLibrary';
import styles from './styles';

interface dataBook {
  item: Books;
}

interface librarySearched {
  route: {
    params?: {
      searchingMode?: boolean;
    };
  };
}

const Library = ({ route: { params } }: librarySearched) => {
  const renderItem = ({ item: { id, title, author, image, year, genre } }: dataBook) => (
    <BookItem key={id} title={title} author={author} imageUri={image.url} year={year} genre={genre} />
  );
  const dispatch = useDispatch();
  const stillLoading = useSelector<State, boolean>((state) => state.bookReducer.booksLoading);
  const LibraryData = useSelector<State, Books>((state) => state.bookReducer.books);
  const SearchedData = useSelector<State, Books>((state) => state.bookReducer.booksFiltered);
  const keyExtractor = (item: { id: number }) => `${item.id}`;
  const searchedView = params?.searchingMode;

  useEffect(() => {
    if (!searchedView) dispatch(bookActions.getBooks());
  }, [dispatch, searchedView]);

  return (
    <View style={styles.container}>
      {stillLoading ? (
        <ActivityIndicator size="large" color={colors.black} />
      ) : (
        <FlatList
          data={searchedView ? SearchedData : LibraryData}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={LibrarySeparator}
          ListEmptyComponent={EmptyLibrary}
        />
      )}
    </View>
  );
};

export default Library;
