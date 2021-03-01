
import * as React from 'react';
import Carousel from 'react-native-looped-carousel'
import {useState,useEffect} from 'react'
import {View,Text,StyleSheet,Image, ImageBackground} from 'react-native'
import { FlatList } from 'react-native-gesture-handler';
import CarouselActivities from './CarouselActivities'
const SingleItinerary = ({itinerary}) =>{
    const [pictures,setPictures] = useState(false)
    return(
        <View style={styles.itinerary}>
            <Text style={styles.itTitle}>{itinerary.title}</Text>
            <View style={{flexDirection:'row',justifyContent:'space-around',alignItems:'center'}}>
                <View style={{alignItems:'center'}}>
                <Image style={styles.userPic} source={{uri:itinerary.userPic}}/> 
                <Text style={{color:'#322b53'}}>{itinerary.userName}</Text>
                </View>
                <View style={styles.info}>
                    <Text style={{color:'#322b53'}}>{itinerary.likes.length} ❤️</Text>
                    <Text style={{color:'#322b53'}}>{itinerary.duration} hs</Text>
                    <Text style={{color:'#322b53'}}>{'💵 '.repeat(itinerary.price)} </Text>
                </View>
            </View>
       <Text style={styles.view} onPress={() =>setPictures(!pictures)}>{pictures? 'Hide ': 'View '}Photos</Text>
      {pictures&&<CarouselActivities activities={itinerary.activities}/>}
            
        </View>
    )

}
const styles= StyleSheet.create({
    itTitle:{
        margin:'3%',
        fontWeight:'bold',
        fontSize:15,
        textAlign:'center',
        color:'#322b53'
    },
    itinerary:{
        flex:1,
        backgroundColor:'#ededf5',
        minHeight:150,
        margin:'4%',
        borderRadius:10
    },
    info:{
        justifyContent:'space-around'
    },
    userPic:{
        marginTop:'2%',
        height:50,
        width:50,
        borderRadius:100
        
    },
    view:{
        marginTop:'6%',
        backgroundColor:'#c6cbef',
        textAlign:'center',
        padding:2,
    

    }

})
export default SingleItinerary