import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {imageMissing} from '../../../../../constants/constants';
import {useNavigation} from '@react-navigation/native';

interface Props {
  title: string;
  author: string;
  uri: string | null;
}

function BookItem({title, author, uri}: Props) {
  const navigation = useNavigation();
  const redirectBookDetail = () => {
    navigation.navigate('BookDetail');
  };
  return (
    <TouchableOpacity style={styles.bookContainer} onPress={redirectBookDetail}>
      <Image source={uri ? {uri} : imageMissing} style={styles.cover} />
      <View style={styles.description}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default BookItem;
