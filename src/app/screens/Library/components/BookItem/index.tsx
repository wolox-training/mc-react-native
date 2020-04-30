import React from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';
import {imageMissing} from '../../../../../constants/constants';

interface Props {
  title: string;
  author: string;
  uri: string | null;
}

function BookItem({title, author, uri}: Props) {
  return (
    <View style={styles.bookContainer}>
      <Image source={uri ? {uri} : imageMissing} style={styles.cover} />
      <View style={styles.description}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </View>
  );
}

export default BookItem;
