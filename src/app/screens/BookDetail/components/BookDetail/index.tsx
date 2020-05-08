import React from 'react';
import { View, Text, Image } from 'react-native';
import Wbutton from '../../../../components/Wbutton';
import styles from './styles';
import { imageMissing } from '../../../../../constants/constants';
import { BookDetailInterface } from '../../../../interfaces';

const BookDetail = ({ title, author, imageUri, year, genre }: BookDetailInterface) => {
  return (
    <View style={[styles.container, styles.containerShadow, styles.fullScreen]}>
      <View style={[styles.top, styles.fullScreen]}>
        <Image
          source={imageUri ? { uri: imageUri } : imageMissing}
          style={[styles.cover, styles.fullScreen]}
        />
        <View style={[styles.description, styles.fullScreen]}>
          <Text style={styles.title}> {title} </Text>
          <Text style={[styles.text, styles.bookStatus]}> Available </Text>
          <Text style={styles.text}> {author} </Text>
          <Text style={styles.text}> {year} </Text>
          <Text style={styles.text}> {genre} </Text>
        </View>
      </View>
      <Wbutton text="ADD TO WISHLIST" />
      <Wbutton text="RENT" inverted={true} />
    </View>
  );
};

export default BookDetail;
