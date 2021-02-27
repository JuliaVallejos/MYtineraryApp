import React from 'react'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import rootReducer from './redux/reducers/rootReducer'
import Navigator from './components/Navigator'
const myStore = createStore(rootReducer, applyMiddleware(thunk))

const App= () =>{

  return (
    <Provider store={myStore}>
      <Navigator/>
      </Provider>


  )
  }

export default App