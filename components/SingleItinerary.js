import React from 'react'
import {View,Text,StyleSheet,Image} from 'react-native'


const SingleItinerary = ({itinerary}) =>{
 
    return(
        <View style={styles.itinerary}>
            <Text style={styles.itTitle}>{itinerary.title}</Text>
            <View style={styles.info}>
                <Text>{itinerary.likes.length} likes</Text>
                <Text>{itinerary.duration} hs</Text>
                <Text>{'$'.repeat(itinerary.price)} </Text>
            </View>
            <View style={{alignItems:'center'}}>
             <Image style={styles.userPic} source={{uri:itinerary.userPic}}/> 
             <Text>{itinerary.userName}</Text>
            </View>
        </View>
    )

}
const styles= StyleSheet.create({
    itTitle:{
        marginTop:'4%',
        fontWeight:'bold',
        fontSize:15,
        textAlign:'center'
    },
    itinerary:{
        flex:1,
        backgroundColor:'white',
        height:150,
        margin:'4%',
        borderRadius:10
    },
    info:{
        marginTop:'3%',
        flexDirection:'row',
        justifyContent:'space-around'
    },
    userPic:{
        marginTop:'2%',
        height:50,
        width:50,
        borderRadius:100
        
    }

})
export default SingleItinerary