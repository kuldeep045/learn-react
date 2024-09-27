import React, {useState} from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0) 

  function addVal (){
    if(counter >= 0) setCounter(counter + 1);
  }

  
  function subVal (){
    if(counter > 0) setCounter(counter - 1);
  }


  return (
    <div className='counter'>
    <div>My counter project</div>
    <div>counter value: {counter}</div>

    <div>
      <button onClick={addVal} className='btn'>Add one {counter}</button>
      <button onClick={subVal} className='btn'>Sub one {counter}</button>
      </div>


    </div>
  )
}

export default App