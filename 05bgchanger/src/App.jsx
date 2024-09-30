import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("olive");

  return (
    <>
    <div className='w-full h-screen duration-200 relative' 
    style={{backgroundColor: color}}
    >
      <div className='w-3/4 justify-center align-middle absolute bottom-20 left-1/2 flex flex-row bg-white rounded-md -translate-x-1/2'>
      <button onClick={()=>setColor("green")} style={{backgroundColor: "green",color:'black'}} className='w-1/5 m-2 p-2 rounded-md'>Green</button>
      <button onClick={()=>setColor("yellow")} style={{backgroundColor: "yellow", color:'black'}} className='w-1/5 m-2 p-2 rounded-md'>Yellow</button>
      <button onClick={()=>setColor("orange")} style={{backgroundColor: "orange",color:'black'}} className='w-1/5 m-2 p-2 rounded-md'>Orange</button>
      <button onClick={()=>setColor("purple")} style={{backgroundColor: "purple",color:'black'}} className='w-1/5 m-2 p-2 rounded-md'>Purple</button>
 
      </div>


    </div>
    
    </>
  )
}

export default App
