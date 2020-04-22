import React from 'react';
import BookItem from './components/BookItem';

const Library = () => {
  return (
    <BookItem
      title="A Little Bird Told Me"
      author="Timothy Cross"
      uri={{
        uri: 'http://wolox-training.s3.amazonaws.com/uploads/6942334-M.jpg',
      }}
    />
  );
};

export default Library;
