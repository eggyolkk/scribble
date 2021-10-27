import { useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'
import './loginStyle.scss'

const Login = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    // post user details to back-end to login
    const userLogin = async() => {
        const loginJSON = JSON.stringify({ username: username, password: password })
        const postHeader = { headers: { 'Content-Type': 'application/json' }}

        console.log(loginJSON)
        await axios.post('http://localhost:5000/auth/login', loginJSON, {postHeader, withCredentials: true})
        .then(response => {
            if (response.data.user) {
                window.location.href = './dashboard'
            }
        })
        .catch(error => console.log(error))
    }

    return (
        <div id="loginContainer">
            <label htmlFor="loginInput">Username</label>
            <input
                type="text"
                id="loginInput"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
            />

            <label htmlFor="passwordInput">Password</label>
            <input
                type="password"
                id="passwordInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <button onClick={() => {userLogin()}} id="loginButton">Login</button>
            
        </div>
    )
}

export default Login