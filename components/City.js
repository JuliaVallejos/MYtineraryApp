import React from 'react'
import {Text,View,ImageBackground, StyleSheet} from 'react-native'
import {useEffect} from 'react'



const City = ({city,setSearch}) =>{
    useEffect(() => {
        setSearch('')
    }, [])
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
        justifyContent:'center',
        alignItems:'center',
        margin: 6,
    
    
    },
    cityImg:{
        flex:1,
        borderRadius:20,
        width:'100%',
        alignSelf:'center',
        justifyContent:'center',
        alignItems:'center',
        height:125,  
    
    },
    cityName:{
        fontSize:20,
        width:'100%',
        color:'white',
        fontWeight:'bold',
        backgroundColor:'rgba(100,95,206,0.56)',  
        textAlign:'center'
    }
})
export default City