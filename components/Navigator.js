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
import {useState,useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer' 
import userActions from '../redux/actions/userActions';
import { TouchableOpacity } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Stack = createStackNavigator()
const Drawer= createDrawerNavigator()

const Navigator = ({loggedUser,logout_user,login_AS}) =>{

    const loginAS = async () =>{
        const data = await AsyncStorage.getItem('token')
 
    if(data){
         login_AS(data)
     
         
       } else{
           return false
       }
     }
     if(!loggedUser){
         loginAS()}
const StackNavigator=  () =>{

    return(
        
        <Stack.Navigator screenOptions={{
            headerTitleStyle:{color:'white',fontWeight:'bold'},
            headerStyle:{
                backgroundColor:'#645fce',
                
            },
            headerRight: () => (
               loggedUser&&
               <View style={{flexDirection:'row',width:120,justifyContent:'space-around',alignItems:'center'}}>
               <Text style={{fontWeight:'bold',color:'white'}}>{loggedUser.name}</Text>
               <TouchableOpacity style={{padding:3,borderWidth:1,borderRadius:5,borderColor:'black',backgroundColor:'#d5f1f2'}}
                onPress={() =>{
                    ToastAndroid.show('See you later!',ToastAndroid.SHORT)
                     logout_user()}}
                color="#000"
                ><Text>LOGOUT</Text>
                </TouchableOpacity>
                </View>
            )
            }}>
        <Stack.Screen name='HOME' options={{title:''}} component={Home}/>
        <Stack.Screen name="CITIES" component={Cities}/>
        <Stack.Screen name='ITINERARIES' component={Itineraries}/>
    </Stack.Navigator>
    )
}
    return(
    <NavigationContainer>
        <TouchableWithoutFeedback style={styles.container} onPress={() => Keyboard.dismiss()}>
        <Drawer.Navigator  drawerStyle={{
             backgroundColor: '#c6cbef',
             }}
             drawerContentOptions={{
                activeTintColor: '#45605c'}}>
          <Drawer.Screen name='HOME' children={StackNavigator} />
       
     
        {!loggedUser&&
            <>
            <Drawer.Screen name="LOGIN" component={Login} />
            <Drawer.Screen name="SIGN UP" component={SignUp} /> 
            </>
        }
        </Drawer.Navigator>
       
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
      logout_user:userActions.logout_user,
      login_AS:userActions.login_AS
  }
export default connect(mapStateToProps,mapDispatchToProps)(Navigator)