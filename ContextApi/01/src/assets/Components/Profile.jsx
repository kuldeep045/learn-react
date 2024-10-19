import React,{useContext} from 'react'
import userContext from '../Context/userContext'

function Profile() {
    const {user} = useContext(userContext)
    if(!user)return <div>Please Login</div>

    return <div>Hello, {user.Password}</div>
  
}

export default Profile