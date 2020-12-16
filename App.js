import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider as StoreProvider} from 'react-redux';
import store from './src/redux/Store';
import Splash from './src/screens/Splash';
import CategoryDetails from './src/screens/CategoryDetails';
import BookDetails from './src/screens/BookDetails';

import Home from './src/screens/Home';
import {SafeAreaView} from 'react-native';

const Stack = createStackNavigator();

const App = ({params}) => {
  return (
    <StoreProvider store={store}>
      <NavigationContainer>
        <SafeAreaView style={{flex: 1}}>
          <Stack.Navigator initialRouteName={'Splash'}>
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name="Home"
              component={Home}
              options={{headerShown: false}}
            />
            <Stack.Screen name="CategoryDetails" component={CategoryDetails} />
            <Stack.Screen name="BookDetails" component={BookDetails} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </StoreProvider>
  );
};

export default App;
