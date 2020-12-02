//Import React
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider, StyleSheet, StatusBar} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";

//Import Navigation
import {TabNavigation, StackNavigator } from './navigations/TabNavigation'; 


const App = () => {
  return (
    <>
      <StatusBar />
      <NavigationContainer>
        {/* <SafeAreaProvider> */}
          <StackNavigator />
        {/* </SafeAreaProvider> */}
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
});

export default App;
