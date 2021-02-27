import React from 'react'
import {Text,View,ImageBackground, StyleSheet} from 'react-native'



const City = ({city}) =>{

    return (

            <View style={styles.city}>
                <ImageBackground imageStyle={{borderRadius:15}} style={styles.cityImg} source={{uri:city.cityPic}}>
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
        borderRadius:15,
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

        elevation: 11,
            
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