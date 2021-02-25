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
    console.log(newUser)

    return (
        <View>
        <SelectPicker style={styles.inp} label='Country*' placeholder='Country*' onValueChange={(country) =>setNewUser({...newUser,country})}>
               {countries.map((country,index) =>{
                    return(
                        <SelectPicker.Item label={country.name} value={country.name} key={index}>{country.name}</SelectPicker.Item>
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
        borderColor:'blue',
        borderRadius:15,
        padding:0,
        paddingLeft:'3%',
    
    }

})

export default Countries