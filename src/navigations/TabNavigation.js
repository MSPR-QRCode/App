//Import React
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import {View} from 'react-native';

//Import BottomMenu
import BottomMenu from '../components/bottomMenu/BottomMenu';

//Import Components
import Scanner from '../pages/Scanner';
import DetailPromo from '../pages/DetailPromo'; 
import ListPromo from '../pages/ListPromo';
import ListPromoUser from '../pages/ListPromoUser';


export const StackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen options={{}} name="TAB" component={TabNavigation}/>
      <Stack.Screen options={{headerShown:false}} name="Detail" component={DetailPromo} /> 
    </Stack.Navigator>
  )
}

export const TabNavigation = () => {
  const Tab = createBottomTabNavigator();
 


  return (
    <View style={{flex: 1, position: 'relative'}}>
      <Tab.Navigator
        screenOptions={{headerShown:true}}
        initialRouteName="fullscreen"
        tabBar={(props) => <BottomMenu {...props} />}>
        <Tab.Screen
          options={{title: 'Promotions', icon:"format-list-bulleted"}}
          name="format-list-bulleted"
          component={ListPromo}
        />
        <Tab.Screen
          options={{title: 'Scanner', icon:"fullscreen"}}
          name="fullscreen"
          component={Scanner}
        />
        <Tab.Screen
          options={{title: 'Mes codes', icon:"person"}}
          name="person"
          component={ListPromoUser}
        />
      </Tab.Navigator>
    </View>
  );
};
