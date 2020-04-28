import BookItem from './components/BookItem';
import React from 'react';
import {FlatList, View} from 'react-native';
import {LibraryData} from '../../../constants/constants';
import LibrarySeparator from './components/LibrarySeparator';
import styles from './styles';

interface dataItem {
  item: {
    id: number;
    author: string;
    title: string;
    genre: string;
    publisher: string;
    year: string;
    image_url: string | null;
  };
}
const Library = () => {
  console.log(LibraryData);
  const renderItem = ({item: {id, title, author, image_url}}: dataItem) => (
    <BookItem key={id} title={title} author={author} uri={image_url} />
  );
  const keyExtractor = (item: {id: number}) => `${item.id}`;
  return (
    <View style={styles.container}>
      <FlatList
        data={LibraryData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ItemSeparatorComponent={LibrarySeparator}
      />
    </View>
  );
};

export default Library;
