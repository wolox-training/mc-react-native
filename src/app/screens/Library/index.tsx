import React, {Component} from 'react';
import {Text, View, Image} from 'react-native';
import styles from './styles';

export interface Props {
  title: string;
  author: string;
  uri: object;
}

class Library extends Component<Props> {
  render() {
    return (
      <View style={styles.bookContainer}>
        <Image source={this.props.uri} style={styles.cover} />
        <View style={styles.description}>
          <Text style={styles.title}>{this.props.title}</Text>
          <Text style={styles.author}>{this.props.author}</Text>
        </View>
      </View>
    );
  }
}

export default Library;
