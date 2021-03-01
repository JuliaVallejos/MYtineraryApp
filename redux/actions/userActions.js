import React from 'react'
import ToastAndroid from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import axios from 'axios'

const userActions  ={
  createNewUser: newUser => {
    return async (dispatch,getstate) => {
      try{
        const data = await axios.post('https://mytinerary-api.herokuapp.com/api/user/register',newUser)
        if (data.data.success){
          dispatch({type:'LOGIN', payload:data.data.response})
          return data.data.response
        } else{
        return data.data
        }
    }catch(error){
      const data ={errores:{details:[{message:'An error occurred'}]}}
      return data
    }}},
    loginUser: userToLogin =>{
       
        return async (dispatch,getstate) => {
            try{
              const data = await axios.post('https://mytinerary-api.herokuapp.com/api/user/login',userToLogin)
              if (data.data.success){
                
                dispatch({type:'LOGIN', payload:data.data.response})
                return data.data.response
              } else{
              
              return data.data
              }
          }catch(error){
       
            const data ={errores:{details:[{message:'An error occurred'}]}}
            return data
          }}},
          login_AS: (token) =>{
            return async (dispatch,getState) =>{
              try{
              const data = await axios.post('https://mytinerary-api.herokuapp.com/api/user/verification',{token},{
                headers:{
                  Authorization: `Bearer ${token}`
                }
    
              })
              if (data.data.success){
                dispatch({type:'LOGIN', payload:data.data.response})
              }
              
            } catch(error){
              
            if(error.response)
              {if(error.response.status===401){
              AsyncStorage.clear()
               .then((clear)=>{
                ToastAndroid.show(`You're not authorized`,ToastAndroid.LONG)
                return clear}
               ).catch(e => {
                return e
               })
              }else {
              return error}
            }
              
            }
          }},
        logout_user:()=>{
          return async (dispatch,getstate) => {
            const clearAll = async () => {
              try {
                await AsyncStorage.clear()
              } catch(e) {
                console.log(e)
              }
            
             
              dispatch({type:'LOGOUT', payload:''})}
              
              clearAll()
            }
           
           
          
        }
       
        
    }
export default userActions