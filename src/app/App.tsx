import React from 'react';
import { Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import styles from './styles';
import colors from '../constants/colors';
import BookDetail from './screens/BookDetail';
import Library from './screens/Library';

// eslint-disable-next-line init-declarations
declare const global: { HermesInternal: null | {} };

const Stack = createStackNavigator();

const App = () => {
  const headerOptions = {
    headerBackImage: () => <Image style={styles.squareSmall} source={require('./assets/ic_back.png')} />,
    headerBackground: () => <Image style={styles.imageHeader} source={require('./assets/bc_nav_bar.png')} />,
    headerStyle: styles.headerStyle,
    cardStyle: styles.headerCard,
    headerTitleStyle: styles.headerTitle
  };
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors.cerulean} />
      <Stack.Navigator initialRouteName="Library" screenOptions={headerOptions}>
        <Stack.Screen name="Library" component={Library} />
        <Stack.Screen name="BookDetail" component={BookDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
