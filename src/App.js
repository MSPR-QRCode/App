//Import React
import React, {useEffect} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native'

//Import Navigation
import Navigation from './navigations';

//import redux
import {Provider} from 'react-redux';
import {store, persistor } from './store';
import Store from './store'; 
import { PersistGate } from 'redux-persist/integration/react'
import RNBootSplash from "react-native-bootsplash";

//import styles
import {red} from './styles/color'


/**
 * COMPONENT
 * App component : Enter point
 */
const App = () => {

  useEffect(() => {
      RNBootSplash.hide({duration: 1000})
  }, [])


  return (
    <>
     <StatusBar barStyle="light-content" backgroundColor={red}  translucent={true} /> 
      <Provider store={store}>
      <PersistGate  loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </PersistGate>
      </Provider>
    </>
  );
};

export default App;
