import React from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import BookDetail from './components/BookDetail';
import Comment from './components/Comment';
import styles from './styles';
import { Comments } from '../../../constants/constants';
import { BookDetailInterface } from '../../interfaces';
import actionCreators from '../../../redux/books/actions';

interface Props {
  route: {
    params: BookDetailInterface;
  };
  fullComments: boolean;
  dispatch: any;
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

function BookDetailView({ route, fullComments, dispatch }: Props) {
  // const [fullComments, setFullComments] = useState(false);
  const { author, title, imageUri, year, genre } = route.params;
  const keyExtractor = (item: { id: number }) => `${item.id}`;
  const renderItem = ({ item: { name, lastname, comment, avatarImage } }: dataComments) => (
    <Comment name={name} lastName={lastname} comment={comment} avatarImage={avatarImage} />
  );
  const comments = fullComments ? Comments : Comments.slice(0, 2);
  const toggleComments = () => dispatch(actionCreators.toggleComments);
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

const mapStateToProps = (state: any) => {
  return {
    fullComments: state.fullComments
  };
};
export default connect(mapStateToProps)(BookDetailView);
