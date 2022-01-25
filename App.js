import React from 'react';
import { StateProvider } from './src/context/context'
import HomeScreen from './src/HomeScreen/HomeScreen';

const App = () => {

  return (
    <StateProvider>
        <HomeScreen />
    </StateProvider>
  );
};

export default App;

