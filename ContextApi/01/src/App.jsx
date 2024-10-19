    import './App.css'
import Login from './assets/Components/Login'
import Profile from './assets/Components/Profile'
import UserContextProvider from './assets/Context/UserContextProvider'

function App() {
  

  return (
    <UserContextProvider>
      <h1>Hey cooldeep ! How are You?</h1>
      <Login/>
      <Profile/>
      
    </UserContextProvider>
  )
}

export default App
