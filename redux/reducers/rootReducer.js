import { combineReducers } from "redux";
import citiesReducer from './citiesReducer'
import itinerariesReducer from './itinerariesReducer'
import usersReducer from './usersReducer'

const rootReducer = combineReducers({
    city: citiesReducer,
    itinerary: itinerariesReducer,
    user: usersReducer 
 
})

export default rootReducer