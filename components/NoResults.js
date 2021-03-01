import React from 'react'
import { ImageBackground, Text, View,StyleSheet } from 'react-native'

const NoResults = () =>{
   
           return(
   
               <View style={styles.city}>
                       <ImageBackground imageStyle={{borderRadius:15}} style={styles.cityImg} source={require('../assets/no_results.jpg')} resizeMode='cover'>
                           <Text style={styles.cityName}>No results found</Text>
                       </ImageBackground>
                  
               </View>)
     
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
   export default NoResults