import React,{useState, useContext} from 'react'
import userContext from '../Context/userContext'

function Login() {
    const [userName, setUserName] = useState('');
    const [Password, setPassword] = useState('')
    
    const {setUser} = useContext(userContext)

    function handleSubmit (e) {
        e.preventDefault()

        setUser({userName, Password})
        

    }
    return (
    <div>
        <h2>Login</h2>
        <input  placeholder='UserName' value={userName} onChange={(e) => setUserName(e.target.value)} type="text" />
        <br />
        <input placeholder='Password' value={Password} onChange={(e) => setPassword(e.target.value)} type="password" />
        <br /><button onClick={(e) =>{handleSubmit(e)}}>Submit</button>

    </div>
    )
}

export default Login