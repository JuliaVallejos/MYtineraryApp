import React from 'react'
import {useState,useEffect} from 'react'
import City from './City'
import { View,Text, StyleSheet, Touchable,ScrollView, ImageBackground, RefreshControl} from 'react-native'
import {TouchableOpacity,TouchableHighlight, TextInput} from 'react-native-gesture-handler'
import {connect} from 'react-redux'
import citiesActions from '../redux/actions/citiesActions'

const Cities = (props) =>{
const {cities,filteredCities,getCities,filterCities} = props

const [loading,setLoading] = useState(false)
const [search,setSearch] = useState('')
 
   useEffect(() => {
      fetchCities()
    }, [])

    useEffect(() => {
       filterCities(search)
    }, [search])

 const fetchCities = async() =>{
     setLoading(true)
    const data = await getCities()
    if(data){
        setLoading(false)
    }
 }
    return (
        <>
        <Text style={styles.find}>Find your city!</Text>
        <TextInput  type='text' placeholder='Find your City!' value={search} onChangeText={(value) => setSearch(value)} ></TextInput>
        <ScrollView style={styles.citiesContainer} refreshControl={<RefreshControl onRefresh={()=> alert('refresh')}/>}>
            <ImageBackground style={{flex:1}} source={{uri:'https://static.vecteezy.com/system/resources/previews/000/626/032/non_2x/soft-geometric-abstract-background-in-light-colors-vector.jpg'}}>
            {filteredCities.map(city =>{
                return(
  
                    
                 <TouchableHighlight onPress={() =>  props.navigation.navigate('Itineraries',{idCity:city._id,cityName:city.cityName,cityPic:city.cityPic}) } key={city._id} style={styles.city} > 
                     
                         <City key={city._id} city={city}/>   
                   
                   </TouchableHighlight> 
             
                )
            })}
            </ImageBackground>
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
const mapStateToProps= state =>{
    return{
        cities:state.city.cities,
        filteredCities:state.city.filteredCities

    }
}
const mapDispatchToProps={
    getCities:citiesActions.getCities,
    filterCities: citiesActions.filterCities
}
export default connect(mapStateToProps,mapDispatchToProps)(Cities)