import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import User from './components/User'
import Github from './components/Github'


function App() {

  return (
  <BrowserRouter>
  <Header/>
    <Routes>
      
      <Route path='/' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path="/github" element={<Github />}/>
      <Route path='/user/:userid' element={<User/>} />
      


    



    </Routes>


  <Footer/>
  </BrowserRouter>
  )
}

export default App
