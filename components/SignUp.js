import React from 'react'
import { Alert, Button, StyleSheet, TextInput, ToastAndroid, View,Text, ImageBackground, TouchableOpacity} from 'react-native'
import {useState,useEffect} from 'react'
import SelectPicker from 'react-native-form-select-picker'
import Countries from './Countries'
import KeyboardAwareScrollView from 'react-native-keyboard-aware-scroll-view'
import {connect} from 'react-redux'
import userActions from '../redux/actions/userActions'


const SignUp = ({loggedUser,createNewUser}) =>{
    const [errors,setErrors] = useState([])
  
   
    const [newUser,setNewUser] = useState({
        username:'',
        password:'',
        name:'',
        lastName:'',
        country:''
    })
  

    const send_data= async () =>{
      
            const {username,password,name,lastName,country} = newUser
            if(username==='' || password===''|| name ==='' || lastName==='' || country===''){
                setErrors([{message:'All required(*) fields must be completed'}])
                return false
            }
        
            const data= await createNewUser(newUser)
            console.log(data)
            if (!data.errores){
                ToastAndroid.show(`Welcome ${data.name}`,ToastAndroid.LONG)
                setErrors([])
         
           }else{
             setErrors(data.errores.details)
   
           }
            
           
        
        

    }


    return (
        <ImageBackground style={styles.bgForm} source={require('../assets/background.jpg')}>
        <Text style={styles.title}>Create an account</Text>
       {/*  <KeyboardAwareScrollView
            resetScrollToCoords={{ x: 0, y: 0 }}
            contentContainerStyle={styles.container}
            scrollEnabled
        > */}
        
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
            {errors.length!==0&& errors.map(error=><Text style={styles.error}>{error.message}</Text>)}
        </View>
    {/*     </KeyboardAwareScrollView> */}
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
     
        fontSize:40,
        textAlign:'center', 
        marginBottom:'5%'
    },
    form:{
        justifyContent:'space-between',
        paddingBottom:'5%',
        width:'70%',
        height:'35%'
    },
    inp:{
        fontSize:15,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'blue',
        borderRadius:15,
        paddingStart:10,

     
    },
    sendBtn:{
        backgroundColor:'brown',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        alignSelf:'center',
        width:'50%',
        height:'10%'
    },
    send:{
        color:'white',
        fontWeight:'bold',
        marginBottom:'5%'

    },
    error:{
        textAlign:'center'
    }
})
 
const mapStateToProps = state =>{
    return {
        loggedUser:state.user.loggedUser
    }
}
const mapDispatchToProps = {
    createNewUser:userActions.createNewUser
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp)