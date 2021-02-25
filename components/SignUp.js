import React from 'react'
import { Alert, Button, StyleSheet, TextInput, ToastAndroid, View,Text, ImageBackground, TouchableOpacity} from 'react-native'
import {useState,useEffect} from 'react'
import SelectPicker from 'react-native-form-select-picker'
import axios from 'axios'
import Countries from './Countries'


const SignUp = (props) =>{
    const [errors,setErrors] = useState([])
  
   
    const [newUser,setNewUser] = useState({
        username:'',
        password:'',
        name:'',
        lastName:'',
        country:''
    })
    const [loggedUser,setLoggedUser] = useState({})

    const send_data= async () =>{
      
            const {username,password,name,lastName,country} = newUser
            if(username==='' || password===''|| name ==='' || lastName==='' || country===''){
                setErrors([{message:'All required(*) fields must be completed'}])
                return false
            }
        
        try{
            const data = await axios.post('http://192.168.0.3:4000/api/user/register',newUser)
            console.log(data)
        if (data.data.success){
            /* ToastAndroid.show(`Welcome ${data.data.response.name}`,ToastAndroid.LONG) */
            alert(`Welcome ${data.data.response.name}`)
            setLoggedUser(data.data.response)
        }else{
            console.log(data.data.errores.details)
            setErrors(data.data.errores.details)

        }
        }catch(error){
            console.log(error)
           /*  ToastAndroid.show('Something went wrong',ToastAndroid.SHORT) */
        }
        

    }


    return (
        <ImageBackground style={styles.bgForm} source={require('../assets/avion.jpg')}>
        <Text style={styles.title}>Create an account</Text>
        <View style={styles.form}>
            <TextInput style={styles.inp} onChangeText={(name) =>setNewUser({...newUser,name})}  placeholder='First Name*'/>
            <TextInput style={styles.inp} onChangeText={(lastName) =>setNewUser({...newUser,lastName})}  placeholder='Last Name*'/>
            <TextInput style={styles.inp} onChangeText={(username) =>setNewUser({...newUser,username})}  placeholder='Username(email)*'/>
            <TextInput style={styles.inp} onChangeText={(password) =>setNewUser({...newUser,password})} placeholder='Password*' secureTextEntry/>
            <Countries  setNewUser={setNewUser} newUser={newUser}/>
            <TouchableOpacity style={styles.sendBtn} onPress={send_data}title='Send'>
                <Text style={styles.send}>SEND</Text>
            </TouchableOpacity>
            {console.log(errors)}
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

export default SignUp