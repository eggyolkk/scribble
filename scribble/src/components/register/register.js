import { useState } from 'react'
import axios from 'axios'
import './registerStyle.scss'

const Register = (props) => {
    const { setShowRegister } = props
    const [ registerUsername, setRegisterUsername ] = useState('')
    const [ registerPassword, setRegisterPassword ] = useState('')
    const [ usernameError, setUsernameError ] = useState('')
    const [ passwordError, setPasswordError ] = useState('')

    // post user details to back-end to register
    const userRegister = async () => {
        const registerJSON = JSON.stringify({ username: registerUsername, password: registerPassword })
        const postHeader = { headers: { 'Content-Type': 'application/json' }}

        console.log(registerJSON)
        await axios.post('http://localhost:5000/auth/signup', registerJSON, {postHeader, withCredentials: true})
        .then(response => {
            if (response.data.user) {
                window.location.href = './dashboard'
            }
            // if login unsuccessful, set errors
            else {
                setUsernameError(response.data.errors.username)
                setPasswordError(response.data.errors.password)
                console.log("resopnse:", response.data.errors)
            }
        })
    }

    return (
        <div id="registerContainer">
            <h2 id='registerTitle'>Register</h2>
            <h2 id="registerSubtitle">Fill in the details below to get started</h2>
            
            <input
                type="text"
                id="loginInput"
                placeholder="Username"
                value={registerUsername}
                onChange={(e) => setRegisterUsername(e.target.value)}
            />
            <p className="userDetailsError">{usernameError}</p>

            <input
                type="password"
                id="passwordInput"
                placeholder="Password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
            />
            <p className="userDetailsError">{passwordError}</p>

            <button id="loginButton" onClick={() => {userRegister()}}>Create Account</button>
            <p id="registerPromptSubtitle">Already have an account? <span id="registerNowSpan" onClick={() => setShowRegister(false)}>Login</span></p>
        </div>
    )
}

export default Register
