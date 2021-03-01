import React from 'react'
import { Button, StyleSheet, TextInput, View } from 'react-native'
import {useState,useEffect} from 'react'
import axios from 'axios'
import SelectPicker from 'react-native-form-select-picker'


const Countries = ({setNewUser,newUser}) =>{
    const [countries,setCountries] = useState([])
    useEffect(() =>{
        fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data =>{
            setCountries(data)
        })
        
    },[])


    return (
        <View>
        <SelectPicker style={styles.inp} default='' label='Country*' placeholder='Country*' onValueChange={(country) =>setNewUser({...newUser,country})}>
               {countries.map((country) =>{
                    return(
                        <SelectPicker.Item label={country.name} value={country.name} key={country.name}>{country.name}</SelectPicker.Item>
                    )
                })}
            </SelectPicker>
        </View>
    )
}

const styles= StyleSheet.create({
    inp:{
        fontSize:15,
        backgroundColor:'white',
        borderWidth:1,
        borderColor:'#3F7FBF',
        borderRadius:15,
        paddingStart:10,
        height:'30%',
        justifyContent:'center'
     
    },

})

export default Countries