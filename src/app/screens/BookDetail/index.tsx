import React, { useState } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import BookDetail from './components/BookDetail';
import Comment from './components/Comment';
import styles from './styles';
import { Comments } from '../../../constants/constants';
import { BookDetailInterface } from '../../interfaces';

interface Props {
  route: {
    params: BookDetailInterface;
  };
}

interface dataComments {
  item: {
    id: number;
    name: string;
    lastname: string;
    comment: string;
    avatarImage: string | null;
  };
}

function BookDetailView({ route }: Props) {
  const [fullComments, setFullComments] = useState(false);
  const { author, title, imageUri, year, genre } = route.params;
  const keyExtractor = (item: { id: number }) => `${item.id}`;
  const renderItem = ({ item: { name, lastname, comment, avatarImage } }: dataComments) => (
    <Comment name={name} lastName={lastname} comment={comment} avatarImage={avatarImage} />
  );
  const comments = fullComments ? Comments : Comments.slice(0, 2);
  const toggleComments = () => {
    setFullComments(!fullComments);
  };
  const selectTextForComments = fullComments ? 'Hide Comments' : 'View All';
  const listFooter = () => {
    return (
      <TouchableOpacity style={styles.linkContainer} onPress={toggleComments}>
        <Text style={styles.linkText}> {selectTextForComments} </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <BookDetail author={author} title={title} imageUri={imageUri} year={year} genre={genre} />
      <View style={styles.commentList}>
        <FlatList
          data={comments}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ListFooterComponent={listFooter}
        />
      </View>
    </View>
  );
}

export default BookDetailView;
