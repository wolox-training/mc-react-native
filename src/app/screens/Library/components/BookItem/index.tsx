import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';

interface Props {
  title: string;
  author: string;
  uri: object;
}

function BookItem({title, author, uri, ...props}: Props) {
  return (
    <View style={styles.bookContainer}>
      <Image source={uri} style={styles.cover} />
      <View style={styles.description}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
}

export default BookItem;
