//Import React
import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

//Import Navigation
import Navigation from './navigations';

//import redux
import {Provider} from 'react-redux';
import Store from './store';

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </Provider>
    </>
  );
};

export default App;
