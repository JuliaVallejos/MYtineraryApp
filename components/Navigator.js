import 'react-native-gesture-handler'
import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Keyboard, StyleSheet, Text,Button, TouchableWithoutFeedback, View,ScrollView, ToastAndroid} from 'react-native';
import Home from './Home';
import Login from './Login';
import SignUp from './SignUp'
import Cities from './Cities'
import Itineraries from './Itineraries'
import {connect}from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer' 
import userActions from '../redux/actions/userActions';


const Stack = createStackNavigator()
const Drawer= createDrawerNavigator()

const Navigator = ({loggedUser,logout_user}) =>{

const StackNavigator= () =>{
    return(
        <Stack.Navigator>
        <Stack.Screen
        name="Cities"
        component={Cities}
        options={{
        headerRight: () => (
           loggedUser&&<Button
            onPress={() =>{
                ToastAndroid.show('See you later!',ToastAndroid.SHORT)
                 logout_user()}}
            title="Logout"
            color="#000"
            />
        ),
        }}
        />
        <Stack.Screen name='Itineraries' component={Itineraries}/>
    </Stack.Navigator>
    )
}
    return(
    <NavigationContainer>
        <TouchableWithoutFeedback style={styles.container} onPress={() => Keyboard.dismiss()}>
        <Drawer.Navigator>
            <Drawer.Screen name='Home' component={Home}/>
            <Drawer.Screen name='Cities' children={StackNavigator}/>
     
        {!loggedUser&&
            <>
            <Drawer.Screen name="Login" component={Login} />
            <Drawer.Screen name="SignUp" component={SignUp} /> 
            </>
        }
        </Drawer.Navigator>
       
        {/* <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />

        
    {/*  <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} /> 

        <Stack.Screen name='Cities' component={Cities}/>
        <Stack.Screen name='Itineraries' component={Itineraries}/>
        </Stack.Navigator> 
    <View style={styles.container}>
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

  const mapStateToProps= state =>{
      return{
          loggedUser:state.user.loggedUser
      }
  }
  const mapDispatchToProps={
      logout_user:userActions.logout_user
  }
export default connect(mapStateToProps,mapDispatchToProps)(Navigator)