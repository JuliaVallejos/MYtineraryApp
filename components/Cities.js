import React from 'react'
import {useState,useEffect} from 'react'
import City from './City'
import NoResults from './NoResults'
import { View,Text, StyleSheet, Touchable,ScrollView, ImageBackground, RefreshControl} from 'react-native'
import {TouchableNativeFeedback,TouchableHighlight, TextInput, TouchableWithoutFeedback} from 'react-native-gesture-handler'
import {connect} from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay'
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
        
        <ImageBackground style={{flex:1}} source={{uri:'https://static.vecteezy.com/system/resources/previews/000/626/032/non_2x/soft-geometric-abstract-background-in-light-colors-vector.jpg'}}>
        <TextInput style={styles.find} type='text' placeholder='Find your City!' value={search} onChangeText={(value) => setSearch(value)} ></TextInput>
        <ScrollView style={styles.citiesContainer}>           
        <Spinner color='#645fce'
            visible={loading}
          textContent={'Loading...'}
          textStyle={{color:'#645fce'}}/>
            {!loading && filteredCities.map(city =>{
                return(
  
                 <TouchableHighlight activeOpacity = { 0.9 } underlayColor = '#3F7FBF' onPress={() => {
              
                    props.navigation.navigate('ITINERARIES',{idCity:city._id,cityName:city.cityName,cityPic:city.cityPic,setSearch}) 
  
                 } } key={city._id} style={styles.city} > 
                     
                         <City setSearch={setSearch} key={city._id} city={city}/>   
                   
                   </TouchableHighlight> 
                )
            })}
            {(filteredCities.length===0 && !loading)&& <NoResults/>}
            
        </ScrollView>
        </ImageBackground>
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
     
     
    },
    city:{
        borderRadius:20,
        margin:1
 
    }

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