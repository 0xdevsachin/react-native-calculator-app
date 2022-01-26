import React from 'react';
import { View } from 'react-native';
import { StateProvider } from './src/context/context'
import HomeScreen from './src/HomeScreen/HomeScreen';

const App = () => {

  return (
    <View style={{flex : 1}}>
      <StateProvider>
        <HomeScreen />
      </StateProvider>
    </View>
  );
};

export default App;

