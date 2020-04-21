import React from 'react';
import styles from './styles';
import Library from './screens/Library';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <Library
      title="A Little Bird Told Me"
      author="Timothy Cross"
      uri={{
        uri: 'http://wolox-training.s3.amazonaws.com/uploads/6942334-M.jpg',
      }}
    />
  );
};

export default App;
