import React from 'react';
import { Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import store from '../redux/store';
import styles from './styles';
import colors from '../constants/colors';
import BookDetail from './screens/BookDetail';
import Library from './screens/Library';
import MissingView from './components/MissingView';

// eslint-disable-next-line init-declarations
declare const global: { HermesInternal: null | {} };

const LibraryStack = createStackNavigator();
const Tab = createBottomTabNavigator();

const LibraryStackScreen = () => {
  const headerOptions = {
    headerBackImage: () => <Image style={styles.squareSmall} source={require('./assets/ic_back.png')} />,
    headerBackground: () => <Image style={styles.imageHeader} source={require('./assets/bc_nav_bar.png')} />,
    headerStyle: styles.headerStyle,
    cardStyle: styles.headerCard,
    headerTitleStyle: styles.headerTitle
  };
  return (
    <LibraryStack.Navigator initialRouteName="Library" screenOptions={headerOptions}>
      <LibraryStack.Screen name="Library" component={Library} />
      <LibraryStack.Screen name="BookDetail" component={BookDetail} />
    </LibraryStack.Navigator>
  );
};

const icons = (focused: boolean, tabName: any) => {
  const iconsRoute = {
    Library: focused
      ? require('./assets/tool_bar/ic_library_active.png')
      : require('./assets/tool_bar/ic_library.png'),
    Whislist: focused
      ? require('./assets/tool_bar/ic_wishlist_active.png')
      : require('./assets/tool_bar/ic_wishlist.png'),
    'Add New': focused
      ? require('./assets/tool_bar/ic_add_new_active.png')
      : require('./assets/tool_bar/ic_add_new.png'),
    Rental: focused
      ? require('./assets/tool_bar/ic_myrentals_active.png')
      : require('./assets/tool_bar/ic_myrentals.png'),
    Setting: focused
      ? require('./assets/tool_bar/ic_settings_active.png')
      : require('./assets/tool_bar/ic_settings.png')
  };
  const iconToUse: keyof typeof iconsRoute = tabName;
  return iconsRoute[iconToUse];
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={colors.cerulean} />
        <Tab.Navigator
          initialRouteName="Library"
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, size }) => {
              const iconName = route.name;
              return (
                <Image
                  source={icons(focused, iconName)}
                  style={[styles.tabIcons, { height: size, width: size }]}
                />
              );
            }
          })}
          tabBarOptions={{
            activeTintColor: colors.cerulean,
            inactiveTintColor: colors.dustyGray
          }}>
          <Tab.Screen name="Library" component={LibraryStackScreen} />
          <Tab.Screen name="Whislist" component={MissingView} />
          <Tab.Screen name="Add New" component={MissingView} />
          <Tab.Screen name="Rental" component={MissingView} />
          <Tab.Screen name="Setting" component={MissingView} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
