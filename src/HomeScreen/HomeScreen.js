import React, {useState, useContext} from 'react';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import StateContext from '../context/context';
import ButtonsData from '../data';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  StatusBar,
} from 'react-native';
import CustomButton from '../buttons/button';

const HomeScreen = () => {
  const [btn] = useState(ButtonsData)
  const [mode, setMode] = useState(false);
  const { input, res} = useContext(StateContext);
  return (
    <View style={[style.container, mode ? style.dark : style.light]}>
      <StatusBar
        barStyle={mode ? 'light-content' : 'dark-content'}
        backgroundColor={mode ? '#101010' : '#fff'}
      />
      <View
        style={{width: '100%', marginTop: 12, paddingLeft: 8, height: '10%'}}>
        <TouchableOpacity
          onPress={() => setMode(!mode)}
          style={[style.mode, mode ? style.dark : style.light]}>
          <FontAwesome5
            name={mode ? 'moon' : 'sun'}
            size={20}
            style={{color: mode ? '#fff' : '#101010'}}
          />
        </TouchableOpacity>
      </View>
      <View
        style={style.evalArea}>
        <ScrollView horizontal={true}>
          <Text style={{fontSize: 30, color: mode ? '#fff' : '#101010'}}>
            {res}
          </Text>
        </ScrollView>
      </View>
      <View
        style={style.evalArea}>
        <ScrollView horizontal={true}>
          <Text style={{fontSize: 18, color: mode ? '#fff' : '#101010'}}>
            {input}
          </Text>
        </ScrollView>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          width: '100%',
          flexWrap: 'wrap',
          flex: 1,
          padding: 6,
          height: '75%',
        }}>
        {btn.map(item => {
          return <CustomButton key={item.data} mode={mode} item={item} />;
        })}
      </View>
    </View>
  );
};

export default HomeScreen;

const style = StyleSheet.create({
  mode: {
    width: '16%',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  evalArea : {
    paddingRight: 30,
    width: '100%',
    height: '7%',
    alignItems: 'flex-end',
    flexDirection: 'column-reverse',
  },
  dark: {
    backgroundColor: '#101010',
  },
  light: {
    backgroundColor: '#fff',
  },
});
