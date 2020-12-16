import React from 'react';
import {Text, View, TouchableOpacity, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

import BookCategory from '../screens/BookCategory';
import Favorite from '../screens/Favorite';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

const CategoryRoute = (props) => {
  return (
    <Stack.Navigator initialRouteName="Categories">
      <Stack.Screen
        name="Categories"
        component={BookCategory}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const FavRoute = (props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Favorite"
        component={Favorite}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Home = ({params}) => {
  return (
    <Tab.Navigator
      initialRouteName="BookCategory"
      tabBarOptions={{
        activeTintColor: 'red',
        inactiveTintColor: 'black',
        indicatorStyle: {
          backgroundColor: 'red',
        },
      }}>
      <Tab.Screen
        name="BookCategory"
        component={CategoryRoute}
        options={{
          tabBarLabel: 'Book Category',
        }}
      />
      <Tab.Screen name="Favorite" component={FavRoute} options={{
          tabBarLabel: 'Collection',
        }}/>
    </Tab.Navigator>
  );
};

export default Home;
