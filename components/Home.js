import {ImageBackground, StyleSheet,Text,View,Image, Button} from 'react-native'
import { StatusBar } from 'expo-status-bar';
import { AppLoading } from 'expo';
import React from 'react';
const Home = ({navigation}) =>{
  
    return(
        
                <ImageBackground source={{uri:'https://static.vecteezy.com/system/resources/previews/000/626/032/non_2x/soft-geometric-abstract-background-in-light-colors-vector.jpg'}} resizeMode='cover' style={styles.bgImage}>
                    <View style={styles.logo}>
                        <ImageBackground style={styles.logoImg} resizeMode='contain' source={require('../assets/logo.png')} >
                          {/*   <ImageBackground style={styles.logoImg} /> */}
                        </ImageBackground>
                    </View>
                        <View style={styles.slogan}>
                            <Text>Find your perfect trip, designed by insiders who know and love their cities</Text>
                         </View>
                         <Button title='Discover Cities' onPress={() =>navigation.navigate('Cities')}/>
                       
                </ImageBackground>
            
     
       
    )
}

const styles = StyleSheet.create({
 
    slogan:{
        backgroundColor:'red',
        fontFamily:'Inter_500Medium ',
        flex:1
        
       
    },

    logo:{
        width:'100%',
        alignItems:'center',
        justifyContent:'flex-start',
        flex:10,
        margin:'auto'
       
        
        
    },
    logoImg:{
        width:'100%',
        height:'40%',
        marginTop:'20%'
       
        
    },
    bgImage:{
        width:'100%',
        height:'100%',
        flex:1,
        alignItems:'center',
        justifyContent:'space-between'
    } 

})

export default Home