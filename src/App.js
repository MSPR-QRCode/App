//Import React
import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

//Import Navigation
import Navigation from './navigations';

const App = () => {
  return (
    <>
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
    </>
  );
};

export default App;
