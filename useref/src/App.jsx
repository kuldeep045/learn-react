import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {

let [length, setLength] = useState(8);
let [char, setChar] = useState(true);
let [num, setNum] = useState(true);
let [password, setPassword] = useState("");


//useRef hook
const passwordRef = useRef(null)




let createPass = useCallback(() =>{
  let pass = ""
  let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  if(char)str+="@#$%^&*()<>?|";
  if(num)str+="1234567890";

  // generate random pass

  for (let i = 0; i < length; i++) {
    let index = Math.floor(Math.random() * str.length)
        pass += str[index]
    
  }
  setPassword(pass)

}, [length, char, num, setPassword])

useEffect( () => {
  createPass()

},[length, char, num, createPass])

const copyPasswordToClipBoard = useCallback( () =>{
  passwordRef.current?.select();
  // passwordRef.current.setSelectionRange(0,9); //select only certain index range
  
  window.navigator.clipboard.writeText(password)
}, [password])






  return (
    <>
    <div className='bg-purple-500 min-h-56 rounded-lg w-3/5 translate-x-1/3 translate-y-2/3'>
    <div className='text-3xl text-center'>Password Generator : </div>

    {/* // password field */}
    <div className="h-10 w-full flex flex-row">
    <input className='text-black  cursor-pointer outline-none w-11/12 bg-white h-10 py-1 px-3 text-2xl'
    readOnly
    placeholder='Password'
    value={password}
    ref={passwordRef}
    ></input>
    <button 
    className='bg-orange-600 w-1/12'
    onClick={copyPasswordToClipBoard}
    >Copy</button>
    <div>
    </div>
    </div>


    {/*  range button */ }
    
    <input 
    type="range" 
    name='length'
    className='my-9 mx-4 cursor-pointer' 
    min={6}
    max={100}
    onChange={(e)=>setLength(e.target.value)}
    />
    <label>length : {length}</label>


    {/* Using character */}


    <input
    className='mx-4 text-4xl cursor-pointer'
    type="checkbox" 
    defaultChecked ={char}
    onChange={ () => {setChar((char) => !char)} }
    />
    <label htmlFor="">Use Character</label>


    {/* using number */}

    <input 
    className='mx-4 text-4xl cursor-pointer' 
    type="checkbox" 
    defaultChecked ={num}
    onChange={ () => setNum((num) => !num) }
    />
    <label>Use Numbers</label>
    
  


    </div>

    </>
  )
}

export default App
