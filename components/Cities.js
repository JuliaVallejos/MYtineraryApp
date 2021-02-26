import React from 'react'
import {useState,useEffect} from 'react'
import City from './City'
import { View,Text, StyleSheet, Touchable,ScrollView} from 'react-native'
import {TouchableOpacity,TouchableHighlight} from 'react-native-gesture-handler'

const Cities = (props) =>{
const [cities,setCities] = useState([/* {
    cityName:'Paris',
    cityPic:'https://images.adsttc.com/media/images/5d44/14fa/284d/d1fd/3a00/003d/newsletter/eiffel-tower-in-paris-151-medium.jpg?1564742900',
    _id:'1'
    },
    {cityName:'Rome',
    cityPic:'https://www.fodors.com/wp-content/uploads/2018/10/HERO_UltimateRome_Hero_shutterstock789412159.jpg',
    _id:'2'},
    {cityName:'Athens',
    cityPic:'https://horizon-media.s3-eu-west-1.amazonaws.com/s3fs-public/field/image/athens-1891719_crop.jpg',
    _id:'3'

    },
    {cityName:'Tokio',
    cityPic:'https://ep01.epimg.net/elviajero/imagenes/2020/04/30/actualidad/1588237365_988791_1588237524_noticia_normal.jpg',
    _id:'4'
    } */
    
])
 

 
   useEffect(() => {
      fetch('https://mytinerary-api.herokuapp.com/api/cities')
       .then(res => res.json())
       .then(data => setCities(data.response))
        .catch(error =>console.log(error))
    }, [])  
 
    return (
        <>
        <Text style={styles.find}>Find your city!</Text>
        <ScrollView style={styles.citiesContainer}>
            {cities.map(city =>{
                return(
  
                    
                 <TouchableHighlight onPress={() =>  props.navigation.navigate('Itineraries',{idCity:city._id,cityName:city.cityName,cityPic:city.cityPic}) } key={city._id} style={styles.city} > 
                     
                         <City key={city._id} city={city}/>   
                   
                   </TouchableHighlight> 
             
                )
            })}
        </ScrollView>
        </>


    )

}
const styles=StyleSheet.create({
    find:{
        margin:'5%',
        fontSize:20,
        textAlign:'center',
        justifyContent:'center',
        
    },
    citiesContainer:{
        flex:1,
        backgroundColor:'grey',
       

    },
  /*  */
 })

export default Cities