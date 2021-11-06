import { useState } from 'react'
import axios from 'axios'
import './loginStyle.scss'
import { API } from '../../../../utilities/utilities';

const Login = (props) => {
    const {setShowRegister} = props
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [usernameError, setUsernameError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    
    // post user details to back-end to login
    const userLogin = async() => {
        const loginJSON = JSON.stringify({ username: username, password: password })
        const postHeader = { headers: { 'Content-Type': 'application/json' }}

        await axios.post(`${API}/auth/login`, loginJSON, {postHeader, withCredentials: true})
        .then(response => {
            // if login is successful, redirect to dashboard
            if (response.data.user) {
                window.sessionStorage.setItem('authenticated', 'valid')
                window.location.href = './dashboard'
            }
            // if login unsuccessful, set errors
            else {
                setUsernameError(response.data.errors.username)
                setPasswordError(response.data.errors.password)
            }
        })
    }

    // handle "enter" press for logging in
    const enterSearch = async (e) => {
        if (e.keyCode === 13) {
            userLogin()
        }
    }

    return (
        <div id="loginContainer">
            <h2 id="loginSubtitle">Please login to continue</h2>
            <input
                type="text"
                id="loginInput"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Username"
            />
            <p className="userDetailsError">{usernameError}</p>

            <input
                type="password"
                id="passwordInput"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => enterSearch(e)}
                placeholder="Password"
            />
            <p className="userDetailsError">{passwordError}</p>

            <button onClick={() => {userLogin()}} id="loginButton">Login</button>
            <p id="registerPromptSubtitle">Don't have an account? <span id="registerNowSpan" onClick={() => setShowRegister(true)}>Register</span></p>
        </div>
    )
}

export default Login