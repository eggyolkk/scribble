import React from 'react'
import './topUserBarStyle.scss'
import axios from 'axios'

const TopUserBar = () => {
    // log the user out
    const userLogout = () => {
        const postHeader = { headers: { 'Content-Type': 'application/json' }}
        axios.get('http://localhost:5000/auth/logout', {postHeader, withCredentials: true})
        .then(response => window.location.href = response.data.redirect)
        .catch(error => console.log(error))
    }

    return (
        <div id="topUserBarContainer">
            <h1 className="scribbleTitle" id="topUserBar">scribble!</h1>
            <button id="logoutButton" onClick={() => {userLogout()}}>Logout</button>
        </div>
    )
}

export default TopUserBar
