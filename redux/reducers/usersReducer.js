import AsyncStorage from '@react-native-async-storage/async-storage'

const initialState ={
    loggedUser:null,
    
}
 function usersReducer(state= initialState,action){
    switch (action.type) {
      
        
            case 'LOGIN':
                console.log(action.payload)
             
                AsyncStorage.setItem('name',action.payload.name)
                AsyncStorage.setItem('userPic',action.payload.userPic)
                AsyncStorage.setItem('token',action.payload.token)
            return {
                ...state,
                loggedUser:action.payload,
            
            }
        case 'LOGOUT':
            AsyncStorage.clear()
           
            return{
                ...state,
                loggedUser:null
                
            }
      
      
        default:
            return state


}}

export default usersReducer
