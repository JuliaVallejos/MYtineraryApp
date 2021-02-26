import React from 'react'
import {Text,View,ImageBackground, StyleSheet, Alert} from 'react-native'



const City = ({city}) =>{

    const cityPhoto= require(`../assets/paris.jpg`)
    

    return (

            <View style={styles.city}>
                <ImageBackground style={styles.cityImg} source={cityPhoto}>
                    <Text style={styles.cityName}>{city.cityName}</Text>
                </ImageBackground>
           </View>
        
    )
}

const styles = StyleSheet.create({
    city:{
        flex:1,
        height:150,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'red',
        margin: 6,
     
    },
    cityImg:{
        flex:1,
        borderRadius:20,
        width:'100%',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        height:150,
       
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,

        elevation: 17,
            
    },
    cityName:{
        fontSize:20,
        width:'100%',
        color:'white',
        fontWeight:'bold',
        backgroundColor:'rgba(193,66,66,0.56)',
        
        textAlign:'center'
    }
})
export default City