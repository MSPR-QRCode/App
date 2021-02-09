//Import React
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

//Import Navigation
import Navigation from './navigations';

//import redux
import {Provider} from 'react-redux';
import {store, persistor } from './store';
import Store from './store'; 
import { PersistGate } from 'redux-persist/integration/react'


/**
 * App component : Enter point
 */
const App = () => {


  return (
    <>
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
