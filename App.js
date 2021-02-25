
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View} from 'react-native';

import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp'


const App= () =>{

  return (

      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
  {/*       <Home/> */}
      <Login/> 
   {/*   <SignUp/> */}
      </View>
      </TouchableWithoutFeedback>



  )
  }
  const styles =StyleSheet.create({
    container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center',
    },
  })

export default App