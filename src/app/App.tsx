import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import BookDetail from './screens/BookDetail';
import Library from './screens/Library';

// eslint-disable-next-line init-declarations
declare const global: { HermesInternal: null | {} };

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Library">
        <Stack.Screen name="Library" component={Library} />
        <Stack.Screen name="BookDetail" component={BookDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
