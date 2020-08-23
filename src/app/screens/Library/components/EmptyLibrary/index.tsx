import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

function EmptyResults() {
  return (
    <View style={styles.container}>
      <Image source={require('@assets/general/ic_search_placeholder.png')} style={styles.image} />
      <View>
        <Text style={styles.title}>Search in Wbooks</Text>
        <Text style={styles.description}>Find your favorite writers and books!</Text>
      </View>
    </View>
  );
}

export default EmptyResults;
