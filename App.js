
import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback, View,ScrollView} from 'react-native';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp'
import Cities from './components/Cities'
import Itineraries from './components/Itineraries'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App= () =>{

  return (
   
      <NavigationContainer>
        <TouchableWithoutFeedback style={styles.container} onPress={() => Keyboard.dismiss()}>
        
        <Stack.Navigator /* screenOptions={{
          headerStyle:{
            backgroundColor:'brown',
            headerRight:()=>{
              <Button>Menu</Button>
            }
          }

        }} */>
          <Stack.Screen name="Home" component={Home} />
  
            {/*
        <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SignUp" component={SignUp} />
   */} 
        <Stack.Screen name='Cities' component={Cities}/>
        <Stack.Screen name='Itineraries' component={Itineraries}/>
         </Stack.Navigator> 
       {/*  <View style={styles.container}>
       <Home/> 
        <Login/> 
     <SignUp/> 
        </View> */}
      </TouchableWithoutFeedback>
    
      </NavigationContainer>
    


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