import React from 'react'
import { Alert, Button, TextInput, ToastAndroid, View,StyleSheet,ImageBackground,Text} from 'react-native'
import {useState,useEffect} from 'react'
import axios from 'axios'


const Login = (props) =>{
    const [errors,setErrors] = useState([])
  
    const [loginUser,setLoginUser] = useState({
        username:'',
        password:''
    })
    const [loggedUser,setLoggedUser] = useState({})

    const send_data= async () =>{
        try{
            const data = await axios.post('http://192.168.0.3:4000/api/user/login',loginUser)
            console.warn(data)
        if (data.data.success){
            alert(`Welcome ${data.data.response.name}`)
            /* ToastAndroid.show(`Welcome ${data.data.response.name}`,ToastAndroid.LONG) */
            setLoggedUser(data.data.response)
        }else{
            setErrors(data.data.errores.details)
           /*  ToastAndroid.show(data.data.errores.details,ToastAndroid.SHORT) */

        }
        }catch(error){
            alert('Something went wrong')
          /*   ToastAndroid.show('Something went wrong',ToastAndroid.SHORT) */
        }
        

    }
    
    

    return (
        <ImageBackground style={styles.bgForm} source={require('../assets/avion.jpg')}>
            <View style={styles.form}>
                <Text style={styles.title}>Log In</Text>
                <TextInput style={styles.inp} onChangeText={(username) =>setLoginUser({...loggedUser,username})}  placeholder='Username(email)'/>
                <TextInput style={styles.inp} onChangeText={(password) =>setLoginUser({...loggedUser,password})} placeholder='Password' secureTextEntry/>
                <Button onPress={send_data}title='Send'/>
                {errors.length!==0&& errors.map(error=><Text>{error.message}</Text>)}
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    bgForm:{
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    title:{
     
        fontSize:20,
        backgroundColor:'red',
        alignItems:'center',
        justifyContent:'center',
        marginBottom:'5%'
    },
    form:{
        justifyContent:'space-between',
        paddingBottom:'5%'
  
    },
    inp:{
        fontSize:15,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'blue',
        borderRadius:15,
        paddingLeft:'3%'
    },
    sendBtn:{
        backgroundColor:'brown',
        alignItems:'center',
        width:'40%',
        borderRadius:5,
        marginTop:'5%',
        alignSelf:'center',
    },
    send:{
        color:'white',
        fontWeight:'bold'

    }
})
export default Login