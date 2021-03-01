import React from 'react'
import {KeyboardAvoidingView, Alert, Button, StyleSheet, TextInput, Keyboard,ScrollView, ToastAndroid, View,Text, ImageBackground,TouchableWithoutFeedback, TouchableOpacity} from 'react-native'
import {useState,useEffect} from 'react'
import SelectPicker from 'react-native-form-select-picker'
import Countries from './Countries'
import {connect} from 'react-redux'
import userActions from '../redux/actions/userActions'



const SignUp = ({loggedUser,createNewUser,navigation}) =>{
    const [errors,setErrors] = useState([])
    const [newUser,setNewUser] = useState({
        username:'',
        password:'',
        name:'',
        lastName:'',
        country:''
    })
  
    useEffect(() => {

        return () => {
            setErrors([])
        }
    }, [loggedUser])
    const send_data= async () =>{
      
            const {username,password,name,lastName,country} = newUser
            if(username==='' || password===''|| name ==='' || lastName==='' || country===''){
                setErrors([{message:'All required(*) fields must be completed'}])
                return false
            }

            const data= await createNewUser(newUser)
          
            if (!data.errores){
                ToastAndroid.show(`Welcome ${data.name}`,ToastAndroid.LONG)

         
           }else{
             setErrors(data.errores.details)
   
           }
            
   
    }


    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <ImageBackground style={styles.bgForm} source={require('../assets/background.jpg')}>
            
            <Text style={styles.title}>SIGN UP</Text>
            <KeyboardAvoidingView  behavior={"height"} style={styles.containerForm}>
           
            <View style={styles.form}> 
                <TextInput style={styles.inp} onChangeText={(name) =>setNewUser({...newUser,name})}  placeholder='First Name*'/>
                <TextInput style={styles.inp} onChangeText={(lastName) =>setNewUser({...newUser,lastName})}  placeholder='Last Name*'/>
                <TextInput style={styles.inp} onChangeText={(username) =>setNewUser({...newUser,username})}  placeholder='Username(email)*'/>
                <TextInput style={styles.inp} onChangeText={(password) =>setNewUser({...newUser,password})} placeholder='Password*' secureTextEntry/>
                <Countries  setNewUser={setNewUser} newUser={newUser}/>
                <TouchableOpacity style={styles.sendBtn} onPress={send_data}title='Send'>
                    <Text style={styles.send}>SEND</Text>
                </TouchableOpacity>
           
                {errors.length!==0&& errors.map((error,index)=><Text key={index} style={styles.error}>{error.message}</Text>)}
                <Text style={{color:'#322b53',textAlign:'center'}} onPress={() =>navigation.navigate('LOGIN')}>Do you already have an account? Log in here</Text>
           </View>
       
         </KeyboardAvoidingView>
        <View style={styles.logo}>
            <ImageBackground style={styles.logoImg} resizeMode='contain' source={require('../assets/logo_transparent.png')}>
            </ImageBackground>
         </View>
         
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
        flex:2,
        justifyContent:'center',

    },
    form:{
       justifyContent:'space-between',
       alignSelf:'center',
        width:'80%',
       flex:1,
       height:350,
    
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
     
    },
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