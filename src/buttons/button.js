import React, { useContext } from 'react';
import {StyleSheet, TouchableOpacity, Text} from 'react-native';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import StateContext from '../context/context';
const CustomButton = ({item, mode}) => {
  const { res, setResult, input, setInput } = useContext(StateContext)
  const CalculateResult = (data) =>{
    // console.log(data)
    if(data.type === 'clear'){
      setInput('')
      setResult(0)
      return
    }
    if(data.type === 'evaluate'){
      if(input === ''){
        return
      }
      let result = input.toString()
      try {
        setResult(eval(result))
      }catch {

      }
      return
    }
    if(data.type === 'delete'){
      let new_input = input.slice(0,-1)
      setInput(new_input)
      return
    }
    setInput(input + data.data)
  }
  return (
    <TouchableOpacity
      style={[styles.btnStyles, mode ? styles.dark : styles.light]}
      onPress={() => CalculateResult(item)}
      >
      {item.icon ? (
        <FontAwesome5Icon style={{color: mode ? '#fff' : '#101010', fontSize: 16}} name={item.data}  />
      ) : (
        <Text style={{color: mode ? '#fff' : '#101010', fontSize: 20}}>
          {item.data}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  btnStyles: {
    height: '15%',
    width: '21%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 25,
    borderRadius: 14,
  },
  dark: {
    backgroundColor: '#141414',
  },
  light: {
    backgroundColor: '#fff',
  },
});
