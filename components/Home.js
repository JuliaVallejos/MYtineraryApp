import {ImageBackground, StyleSheet,Text,View,Image, Button} from 'react-native'
import { StatusBar } from 'expo-status-bar';

import {useState,useEffect} from 'react'
import CarouselPhoto from './CarouselPhoto'
import {connect} from 'react-redux'

import React from 'react';

const Home = (props) =>{
    const {navigation,loggedUser} = props
    const[fontLoaded,setFontLoaded] = useState(false)
 
    return(
        
                <ImageBackground source={{uri:'https://static.vecteezy.com/system/resources/previews/000/626/032/non_2x/soft-geometric-abstract-background-in-light-colors-vector.jpg'}} resizeMode='cover' style={styles.bgImage}>
                   
                   
                    
                    <View style={styles.logo}>
                        <ImageBackground style={styles.logoImg} resizeMode='contain' source={require('../assets/logo_transparent.png')}>
                        </ImageBackground>
                    </View>
                    <View style={styles.slogan}>
                        <Text style={styles.text}>{'Find your perfect trip, designed by insiders who know and love their cities'.toUpperCase()}</Text>
                    </View>
                    <View style={styles.viewDiscover}>
                        <View style={styles.discover} >
                            <Text style={styles.discoverBtn} title='Discover Cities' onPress={() =>navigation.navigate('CITIES')}>DISCOVER CITIES</Text>
                        </View>
                    </View>
                    <CarouselPhoto/> 
                   
                    {!loggedUser&&
                    <View style={styles.btns}>
                        <View style={styles.discover} >
                        <Text style={styles.btnsText} title='LOGIN' onPress={() =>navigation.navigate('LOGIN')}>Login</Text>
                        </View>
                        <View style={styles.discover} >
                        <Text style={styles.btnsText} title='SIGN UP' onPress={() =>navigation.navigate('SIGN UP')}>Sign Up</Text>
                        </View>
                    </View>}
           
                </ImageBackground>
       
    )
}

const styles = StyleSheet.create({
 
    slogan:{
  
       textAlign:'center',
        flex:2,
        padding:5,
  
  
    },
    menu:{
        color:'black',
        marginTop:'10%',
        padding:'6%',
        width:'40%',
        alignSelf:'center',
        borderRadius:10
    },
    text:{
        fontSize:25,
        textAlign:'center',
        color:'#645fce',
   /*     fontFamily:'Marmelad-Regular' */
      
    },

    logo:{
        marginTop:'10%',
        width:'100%',
        flex:5,
        justifyContent:'flex-end' 
       

    },
    logoImg:{
        width:'100%',
        height:'100%',
      
    },
    bgImage:{
        width:'100%',
        height:'100%',
        flex:1,
        alignItems:'center',
        flex:1
    },
    viewDiscover:{
        marginTop:'8%',
        flex:1
    },
    discover:{
     marginBottom:20,
        backgroundColor:'#322b53',
        padding:10,
        borderRadius:15,
        height:40
    },
    discoverBtn:{
        color:'white',
        fontWeight:'bold',
       
    },
    btns:{
        flexDirection:'row',
        justifyContent:'space-around',
        width:'60%'
    },
    btnsText:{
        color:'white',
        width:60,
        textAlign:'center'
    }
    

})
const mapStateToProps = state =>{
   return{
        loggedUser:state.user.loggedUser
   }
}
const mapDispatchToProps={

}
export default connect(mapStateToProps,mapDispatchToProps)(Home)