import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { imageMissing } from '../../../../../constants/constants';
import { BookDetailInterface } from '../../../../interfaces';

function BookItem({ title, author, year, genre, imageUri }: BookDetailInterface) {
  const navigation = useNavigation();
  const redirectBookDetail = () => {
    navigation.navigate('BookDetail', { title, author, imageUri, year, genre });
  };
  return (
    <TouchableOpacity style={styles.bookContainer} onPress={redirectBookDetail}>
      <Image source={imageUri ? { uri: imageUri } : imageMissing} style={styles.cover} />
      <View style={styles.description}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.author}>{author}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default BookItem;
