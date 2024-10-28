import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './assets/component/Home'
import About from './assets/component/About'
import Contact from './assets/component/Contact'
import Latest from './assets/component/Latest'
import Followers from './assets/component/Followers'
import Layout from './assets/component/Layout'
import User from './User'



const loadData = async () =>{
const data = await fetch('https://api.github.com/users/hiteshchoudhary')
return await data.json()
}




const router = createBrowserRouter(
  createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home/>}/>
          <Route path='/:speciality' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route loader={loadData} path='/followers' element={<Followers/>}/>
          <Route path='/latest' element={<Latest/>}/>
          <Route path='/signup' element={""}/>
          <Route path='/user/:id' element={<User/>}/>


      </Route>
  )
)
function App() {
  
  return (
    <>
    
    <RouterProvider router={router} />
    
    
    </>
  )
}

export default App
