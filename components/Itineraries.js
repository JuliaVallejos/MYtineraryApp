import React from 'react'
import {useState,useEffect} from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import SingleItinerary from './SingleItinerary'
import { ScrollView } from 'react-native-gesture-handler'
/* import AnimatedLoader from 'react-native-animated-loader'
 */

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
  if(loading){
    /* <AnimatedLoader
    visible={visible}
    overlayColor="rgba(255,255,255,0.75)"
    source={require("./loader.json")}
    animationStyle={styles.lottie}
    speed={1}
  >
    <Text>Doing something...</Text>
  </AnimatedLoader> */<Text>Doing something...</Text>}
    return(
        <View style={styles.itineraries}>
            <ImageBackground style={styles.imgCity} source={{uri:cityPic}}>
                <Text style={styles.cityName}>{cityName}</Text> 
            </ImageBackground>
            <ScrollView style={{backgroundColor:'#982C19'}}>
                {itineraries.length===0?
                <View style={styles.noResults}>
                <ImageBackground style={{height:'100%',width:'100%',justifyContent:'center'}}source={{uri:'https://static.vecteezy.com/system/resources/previews/000/626/032/non_2x/soft-geometric-abstract-background-in-light-colors-vector.jpg'}}><Text style={{fontWeight:'bold',textAlign:'center',color:'black'}}>No itineraries yet. Make One!</Text></ImageBackground></View>
                :
                itineraries.map(itinerary =>{
                    return(
                    <SingleItinerary key={itinerary._id} itinerary={itinerary}/>
                    )
                })}

            </ScrollView>
        </View>

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
        backgroundColor:'rgba(193,66,66,0.56)'
    },
    itineraries:{
        flex:1,
        backgroundColor:'pink'
    },
    
    noResults:{
        padding:15,
        height:120,
        width:'100%',
    },
    lottie: {
        width: 100,
        height: 100
      }
})
export default Itineraries