import { useReducer, useState } from 'react'
import './App.css'

const reducer = function (state, action){
  switch(action.type){
    case 'increament':
      return {count: state.count + 1}

    case 'decreament':
      return {count : state.count -1}

    case 'reset' : 
      return {count: 0}

    default :
      throw new Error('Error')
  }
}

function App() {
  
  const initialState = {count : 0}
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
    <div>Count : {state.count}</div>
    <button onClick={() => dispatch({type: 'increament'})}>Increase</button>
    <button onClick={() => dispatch({type: 'decreament'})}>Decrease</button>
    <button onClick={() => dispatch({type: 'reset'})}>Reset</button>
    
    </>
  )
}

export default App
