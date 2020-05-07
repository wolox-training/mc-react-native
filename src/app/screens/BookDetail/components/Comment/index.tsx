import React from 'react';
import { Text, Image, View } from 'react-native';
import styles from './styles';
import { imageMissing } from '../../../../../constants/constants';

interface Props {
  avatarImage: any;
  name: string;
  lastName: string;
  comment: string;
}
const Comment = ({ avatarImage, name, lastName, comment }: Props) => {
  return (
    <View style={styles.container}>
      <Image source={avatarImage ? avatarImage : imageMissing} style={styles.avatar} />
      <View style={styles.textContainer}>
        <Text style={styles.userName}> {`${name} ${lastName}`} </Text>
        <Text style={styles.comment}> {comment} </Text>
      </View>
    </View>
  );
};

export default Comment;
