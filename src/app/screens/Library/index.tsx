import BookItem from './components/BookItem';
import React from 'react';
import {FlatList, View} from 'react-native';
import {LibraryData} from '../../../constants/constants';
import LibrarySeparator from './components/LibrarySeparator';
import listStyles from './styles';

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
  const renderItem = ({item}: dataItem) => (
    <BookItem
      key={item.id}
      title={item.title}
      author={item.author}
      uri={item.image_url}
    />
  );
  return (
    <View style={listStyles.container}>
      <FlatList
        data={LibraryData}
        renderItem={renderItem}
        keyExtractor={(item: {id: any}) => item.id}
        ItemSeparatorComponent={LibrarySeparator}
      />
    </View>
  );
};

export default Library;
