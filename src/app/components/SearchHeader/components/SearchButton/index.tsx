import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const SearchButton = () => {
  const navigation = useNavigation();
  const redirectSearchView = () => navigation.navigate('LibrarySearch', { searchingMode: true });
  return (
    <TouchableOpacity onPress={redirectSearchView}>
      <Image source={require('@assets/general/ic_search_placeholder.png')} style={styles.headerRight} />
    </TouchableOpacity>
  );
};

export default SearchButton;
