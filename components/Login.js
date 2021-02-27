import React from 'react'
import { Alert, Button, TextInput, TouchableOpacity,ToastAndroid, View,StyleSheet,ImageBackground,Text} from 'react-native'
import {useState,useEffect} from 'react'
import {connect} from 'react-redux'
import userActions from '../redux/actions/userActions'


const Login = ({loginUser}) =>{
    const [errors,setErrors] = useState([])
    const [userToLogin,setUserToLogin] = useState({
        username:'',
        password:''
    })

    const send_data= async () =>{
        const {username,password} = userToLogin
            if(username==='' || password===''){
                setErrors([{message:'All required(*) fields must be completed'}])
                return false
            }
            const data = await loginUser(userToLogin)
        if (!data.errores){
             ToastAndroid.show(`Welcome ${data.name}`,ToastAndroid.LONG)
             setErrors([])
             
      
        }else{
          setErrors(data.errores.details)

        }
        
        

    }
    
    

    return (
        <ImageBackground style={styles.bgForm} source={require('../assets/background.jpg')}>
            <View style={styles.form}>
                <Text style={styles.title}>Log In</Text>
                <View style={styles.inputs}>
                <TextInput style={styles.inp} onChangeText={(username) =>setUserToLogin({...userToLogin,username})}  placeholder='Username(email)'/>
                <TextInput style={styles.inp} onChangeText={(password) =>setUserToLogin({...userToLogin,password})} placeholder='Password' secureTextEntry/>
                </View>
                <TouchableOpacity style={styles.sendBtn} onPress={send_data}title='Send'>
                <Text style={styles.send}>SEND</Text>
                </TouchableOpacity>
                {errors.length!==0&& errors.map((error,index)=><Text key={index} style={styles.error}>{error.message}</Text>)}
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
     
        fontSize:40,
        textAlign:'center', 
        marginBottom:'5%'
    },
    form:{
        justifyContent:'space-between',
        paddingBottom:'5%',
        width:'70%'
    },
    inputs:{
        height:'30%',
        justifyContent:'space-around'
    },
    inp:{
        fontSize:15,
        backgroundColor:'white',
        borderWidth:1,        
        borderColor:'blue',
        borderRadius:15,
        paddingStart:'5%'
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
        fontWeight:'bold'

    },
    error:{
        textAlign:'center'
    }
})
const mapStateToProps= state =>{
    return{
        loggedUser:state.user.loggedUser

    }
}
const mapDispatchToProps = {
    loginUser:userActions.loginUser
}
export default connect(mapStateToProps,mapDispatchToProps)(Login)