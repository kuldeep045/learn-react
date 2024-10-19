import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'
import Layout from './components/layout.jsx'
import Github, {loaderData} from './components/Github.jsx'
import User from './components/User.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element:<Layout/>,
//     children:[
//       {
//         path:'',
//         element: <Home/>
//       },
//       {
//         path:'/about',
//         element:<About/>
//       },
//       {
//         path:'/contact',
//         element:<Contact/>
//       },      
//       {
//         path: '/login',
//         element: ""        
//       },
//       {
//         path: '/signup',
//         element: ""        
//       },
//       {
//         path:'github',
//         element:<Github/>
//       }
//     ]
//   }
  
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route loader={loaderData} path='/github' element= {<Github/>}/>
      <Route path='/login' />
      <Route path='/signup' />
      <Route path='user/:userid' element={<User/>}/>
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
    {/* <App/> */}
  </StrictMode>,
)
