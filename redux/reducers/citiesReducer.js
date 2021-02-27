
const initialState ={
    cities:[],
    filteredCities:[],
    singleCity:{},
    loading: ''
}

function citiesReducer(state= initialState, action){
    switch (action.type){
        case 'ALL_CITIES':
            /* obtener todas las cities*/
            return{
                ...state,
                cities:action.payload,
                filteredCities: action.payload,
                loading:false
            }
            
          /*   filtrar cities */
        case 'FILTER_CITIES':
        
     
            return{
                ...state,
                filteredCities:state.cities.filter(({cityName})=> (cityName.toUpperCase().indexOf(action.payload.toUpperCase().trim())=== 0))
            }
        case 'NEW_CITY':
          
            return{
                ...state,
                newCity:action.payload
            }
            
        case 'SINGLE_CITY':
                /* obtener city por id */
            
            return{
                ...state,
                singleCity:state.cities.find(city => city._id === action.payload),
                loading:false
               
            }  
            
        case 'LOADING':
            /* preloader */
            return{
                ...state,
                loading:action.payload
            }
    
        default:
            return state

    }

}

export default citiesReducer