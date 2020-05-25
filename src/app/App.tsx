import React from 'react';
import { Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Provider } from 'react-redux';
import Login from '@screens/Login';
import store from '../redux/store';
import styles from './styles';
import colors from '../constants/colors';
import BookDetail from './screens/BookDetail';
import Library from './screens/Library';
import MissingView from './components/MissingView';
import LogoutHeader from './components/LogoutHeader';
import SearchHeader from './components/SearchHeader';

// eslint-disable-next-line init-declarations
declare const global: { HermesInternal: null | {} };

const LibraryStack = createStackNavigator();
const Tab = createBottomTabNavigator();
const InitialStack = createStackNavigator();

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
      <LibraryStack.Screen
        name="Library"
        component={Library}
        options={{ headerLeft: () => <LogoutHeader />, headerRight: () => <SearchHeader extended={false} /> }}
      />
      <LibraryStack.Screen name="BookDetail" component={BookDetail} />
      <LibraryStack.Screen
        name="LibrarySearch"
        component={Library}
        options={{
          headerTitle: () => <SearchHeader extended={true} />,
          headerLeft: () => undefined,
          headerRight: () => undefined
        }}
      />
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

const screenOptions = ({ route }: any) => ({
  tabBarIcon: ({ focused, size }: any) => {
    return (
      <Image source={icons(focused, route.name)} style={[styles.tabIcons, { height: size, width: size }]} />
    );
  }
});

const tabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="Library"
      screenOptions={screenOptions}
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
  );
};

const InitialStackScreen = () => {
  return (
    <InitialStack.Navigator initialRouteName="Login" headerMode="none">
      <InitialStack.Screen name="Login" component={Login} />
      <InitialStack.Screen name="TabNavigator" component={tabNavigator} />
    </InitialStack.Navigator>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={colors.cerulean} />
        <InitialStackScreen />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
