import React from 'react'
import {useState,useEffect} from 'react'
import { ImageBackground, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import SingleItinerary from './SingleItinerary'
import { ScrollView } from 'react-native-gesture-handler'
import Spinner from 'react-native-loading-spinner-overlay'

const Itineraries = (props) =>{
    const idCity=props.route.params.idCity
    const cityName=props.route.params.cityName
    const cityPic=props.route.params.cityPic
    const [loading,setLoading] = useState(false)

    const [itineraries,setItineraries]=useState([])
   useEffect(() => {
       setLoading(true)
    fetch(`https://mytinerary-api.herokuapp.com/api//${idCity}/itineraries`)
     .then(res => res.json())
     .then(data => {
         setItineraries(data.response)
         setLoading(false)})
      .catch(error =>console.log(error))
  }, []) 
   useEffect(() => {
    props.route.params.setSearch('')
}, []) 

    return(
        <ImageBackground source={require('../assets/background.jpg')}style={styles.itineraries}>
            <Spinner color='#645fce'
            visible={loading}
          textContent={'Loading...'}
          textStyle={{color:'#645fce'}}/>
            {!loading&& 
            <>
            <ImageBackground style={styles.imgCity} source={{uri:cityPic}}>
                <Text style={styles.cityName}>{cityName}</Text> 
            </ImageBackground>
            <ScrollView>
                {itineraries.length===0?
                <View style={styles.noResults}>
               <Text style={{fontWeight:'bold',textAlign:'center',color:'black'}}>No itineraries yet. Make One!</Text></View>
                :
                itineraries.map(itinerary =>{
                    return(
                    <SingleItinerary key={itinerary._id} itinerary={itinerary}/>
                    )
                })}
            <TouchableOpacity style={styles.sendBtn} onPress={() =>props.navigation.navigate('HOME')} title='Send'>
                <Text style={styles.send}>Back to Home</Text>
            </TouchableOpacity>
            </ScrollView>
            </>}
            
        </ImageBackground>
        

    )
}
const styles= StyleSheet.create({
    imgCity:{
        height:100,
        width:'100%',
        justifyContent:'center'
    },
    cityName:{
        fontSize:30,
        textAlign:'center',
        color:'white',
        fontWeight:'bold',
        backgroundColor:'rgba(100,95,206,0.56)'
    },
    itineraries:{
        flex:1,
    },
    
    noResults:{
       
       
        backgroundColor:'#ededf5',
        alignItems:'center',
        justifyContent:'center',
        height:120,
        margin:'4%',
        borderRadius:10
    },
    sendBtn:{
        backgroundColor:'#322b53',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:20,
        alignSelf:'center',
        width:120,
        height:20,
        margin:'5%'
    },
    send:{
        color:'white',
        fontWeight:'bold'

    },
})
export default Itineraries