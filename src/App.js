//Import React
import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaProvider, StyleSheet, StatusBar} from 'react-native';
import {red} from './styles/color'


//Import Navigation
import Navigation  from './navigations'; 


const App = () => {
  return (
    <>
      <StatusBar backgroundColor={red} />
          <Navigation /> 
    
     
    </>
  );
};

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
  },
});

export default App;
