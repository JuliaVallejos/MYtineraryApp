import axios from 'axios'

const itinerariesActions={
    /* ver todos los itinerarios de una ciudad */
    itinerariesByCity:(idCity)=>{
            return async (dispatch,getstate) => {
            try{
                const data = await axios.get(`https://mytinerary-api.herokuapp.com/api/${idCity}/itineraries`)
                dispatch({type:'ALL_CITY_ITINERARIES', payload:data.data.response})}
            catch(error){
                setTimeout(function(){
                    Swal.fire('Error, back to Home')
                    window.location.href ='/'
                  },5000)
                }  
            }}
        }
export default itinerariesActions