const initialState ={
    itineraries:[],
    newItineraries:[],
    loading:''
    
}

function itinerariesReducer(state= initialState, action){
    switch (action.type){
        case 'ALL_CITY_ITINERARIES':

            /*obtener todos los itinerarios de una ciudad */
            return{
                ...state,
                itineraries:action.payload,
                newItineraries:action.payload,
                loading:false   
            }
            default:
                return state
              
         }  }
export default itinerariesReducer