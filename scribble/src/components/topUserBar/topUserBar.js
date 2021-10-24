import React from 'react'
import './topUserBarStyle.scss'

const TopUserBar = () => {
    return (
        <div id="topUserBarContainer">
            <h1 className="scribbleTitle" id="topUserBar">scribble!</h1>
            <button id="logoutButton" onClick={() => window.location.href = '/'}>Logout</button>
        </div>
    )
}

export default TopUserBar
