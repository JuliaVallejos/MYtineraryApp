import {ImageBackground, StyleSheet,Text,View,Image, Button} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import CarouselPhoto from './CarouselPhoto'
import {connect} from 'react-redux'
import LottieView from 'lottie-react-native'
import React from 'react';
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
const Home = (props) =>{
  const {navigation,loggedUser} = props
    return(
        
                <ImageBackground source={{uri:'https://static.vecteezy.com/system/resources/previews/000/626/032/non_2x/soft-geometric-abstract-background-in-light-colors-vector.jpg'}} resizeMode='cover' style={styles.bgImage}>
                   
                   {/*  <Text style={styles.menu} title='Menu' onPress={() => props.navigation.toggleDrawer()}>Menu</Text> */}
                    
                    <View style={styles.logo}>
                        <ImageBackground style={styles.logoImg} resizeMode='contain' source={require('../assets/logo.png')} >

                        </ImageBackground>
                    </View>
                    <View style={styles.slogan}>
                        <Text style={styles.text}>{'Find your perfect trip, designed by insiders who know and love their cities'.toUpperCase()}</Text>
                    </View>
                    <View style={styles.discover} >
                    <Text style={styles.discoverBtn} title='Discover Cities' onPress={() =>navigation.navigate('Cities')}>DISCOVER CITIES</Text>
                    </View>
                    <CarouselPhoto/>
                   
                    {!loggedUser&&
                    <View style={styles.btns}>
                        <View style={styles.discover} >
                        <Text style={styles.btnsText} title='Login' onPress={() =>navigation.navigate('Login')}>Login</Text>
                        </View>
                        <View style={styles.discover} >
                        <Text style={styles.btnsText} title='Sign Up' onPress={() =>navigation.navigate('SignUp')}>Sign Up</Text>
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
        margin:'5%',
        padding:'6%',
        backgroundColor:'yellowgreen',
        alignSelf:'flex-end'
    },
    text:{
        fontSize:25,
        textAlign:'center',
        color:'black'
    },

    logo:{
        marginTop:'10%',
        width:'100%',
        flex:3,
        justifyContent:'flex-end' 
       

    },
    logoImg:{
        width:'100%',
        height:'75%',
      
    },
    bgImage:{
        width:'100%',
        height:'100%',
        flex:1,
        alignItems:'center',
        flex:1
    },
    discover:{
     marginBottom:20,
        backgroundColor:'brown',
        padding:10,
        borderRadius:15
    },
    discoverBtn:{
        color:'white',
        fontWeight:'bold'
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