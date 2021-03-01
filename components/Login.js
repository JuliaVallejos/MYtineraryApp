import React from 'react'
import { Alert, Button, TextInput,TouchableWithoutFeedback, TouchableOpacity,ToastAndroid, View,StyleSheet,ImageBackground,Text, Keyboard,KeyboardAvoidingView} from 'react-native'
import {useState,useEffect} from 'react'
import {connect} from 'react-redux'
import userActions from '../redux/actions/userActions'
import { SafeAreaView } from 'react-native-safe-area-context'



const Login = ({loginUser,loggedUser,navigation}) =>{
    const [errors,setErrors] = useState([])
    const [userToLogin,setUserToLogin] = useState({
        username:'',
        password:''
    })
    useEffect(() => {

        return () => {
            setErrors([])
        }
    }, [loggedUser])
    const send_data= async () =>{
        const {username,password} = userToLogin
            if(username==='' || password===''){
                setErrors([{message:'All required(*) fields must be completed'}])
                return false
            }
            const data = await loginUser(userToLogin)
        if (!data.errores){
             ToastAndroid.show(`Welcome ${data.name}`,ToastAndroid.LONG)
           
        }else{
          setErrors(data.errores.details)

        }

    }
    
    

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ImageBackground style={styles.bgForm} source={require('../assets/background.jpg')}>
           
            <Text style={styles.title}>LOGIN</Text>
            <KeyboardAvoidingView  behavior={"height"} style={styles.containerForm}> 
            <View style={styles.form}>
               
                    <TextInput style={styles.inp} onChangeText={(username) =>setUserToLogin({...userToLogin,username})}  placeholder='Username(email)*'/>
                    <TextInput style={styles.inp} onChangeText={(password) =>setUserToLogin({...userToLogin,password})} placeholder='Password*' secureTextEntry/>
               
                <TouchableOpacity style={styles.sendBtn} onPress={send_data}title='Send'>
                <Text style={styles.send}>SEND</Text>
                </TouchableOpacity>
                {errors.length!==0&& errors.map((error,index)=><Text key={index} style={styles.error}>{error.message}</Text>)}
                <Text style={{color:'#322b53',textAlign:'center'}} onPress={() =>navigation.navigate('SIGN UP')}>Don't have account? Create one!</Text>
                
            </View>
            </KeyboardAvoidingView>
            <TouchableOpacity onPress={() =>navigation.navigate('HOME')}  style={styles.logo}>
                    <ImageBackground style={styles.logoImg} resizeMode='contain' source={require('../assets/logo_transparent.png')}>
                    </ImageBackground>
            </TouchableOpacity>
        </ImageBackground>
        </TouchableWithoutFeedback>
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
        flex:1,
        fontSize:40,
        textAlign:'center',
       textAlignVertical:'bottom',
        margin:'10%',
        color:'#322b53'
    },
    containerForm:{
        flex:1,
       
        width:'80%',
        alignItems:'center',
        justifyContent:'center'
    },
    form:{
       flex:1,
       height:150,
        justifyContent:'space-between',
        paddingBottom:'5%',
        width:'70%',
    },
    inputs:{
        height:'20%',
        justifyContent:'space-around'
    },
    inp:{
        fontSize:15,
        backgroundColor:'white',
        borderWidth:1,        
        borderColor:'#3F7FBF',
        borderRadius:15,
        paddingStart:'5%'
    },
    sendBtn:{
        backgroundColor:'#322b53',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        alignSelf:'center',
        width:120,
        height:40
    },
    send:{
        color:'white',
        fontWeight:'bold'

    },
    error:{
        textAlign:'center',
        color:'#ac2424'
    },
    logo:{
        width:'100%',
        height:'20%',
        justifyContent:'flex-end',

    },
    logoImg:{
        width:'100%',
        flex:1
     
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