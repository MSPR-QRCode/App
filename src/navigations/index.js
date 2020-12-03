//Import React
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {View} from 'react-native';

//Import BottomMenu
import BottomMenu from '../components/bottomMenu/BottomMenu';

//Import Components
import Scanner from '../pages/Scanner';
import DetailPromo from '../pages/DetailPromo';
import ListPromo from '../pages/ListPromo';
import ListPromoUser from '../pages/ListPromoUser';

const Navigation = () => {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen options={{}} name="TAB" component={TabNavigation} />
        <Stack.Screen
          options={{headerShown: false}}
          name="Detail"
          component={DetailPromo}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export const TabNavigation = () => {
  const Tab = createBottomTabNavigator();

  return (
    <View style={{flex: 1, position: 'relative'}}>
      <Tab.Navigator
        initialRouteName="fullscreen"
        tabBar={(props) => <BottomMenu {...props} />}>
        <Tab.Screen
          options={{title: 'Promotions', icon: 'format-list-bulleted'}}
          name="listPromo"
          component={ListPromo}
        />
        <Tab.Screen
          options={{title: 'Scanner', icon: 'fullscreen'}}
          name="scanner"
          component={Scanner}
        />
        <Tab.Screen
          options={{title: 'Mes codes', icon: 'person'}}
          name="listPromoUse"
          component={ListPromoUser}
        />
      </Tab.Navigator>
    </View>
  );
};

export default Navigation;
