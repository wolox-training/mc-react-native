import React from 'react';
import { View } from 'react-native';
import BookDetail from './components/BookDetail';
import styles from './styles';
import { BookDetailInterface } from '../../interfaces';

interface Props {
  route: {
    params: BookDetailInterface;
  };
}

function BookDetailView({ route }: Props) {
  const { author, title, imageUri, year, genre } = route.params;
  return (
    <View style={styles.container}>
      <BookDetail author={author} title={title} imageUri={imageUri} year={year} genre={genre} />
    </View>
  );
}

export default BookDetailView;
