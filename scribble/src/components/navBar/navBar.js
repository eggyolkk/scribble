import React from 'react'
import './navBarStyle.scss'
import { MdOutlineStickyNote2 } from 'react-icons/md'
import { RiCalendarEventLine, RiSettings4Line, RiLogoutCircleLine } from 'react-icons/ri'
import axios from 'axios'

const NavBar = () => {
    // log the user out
    const userLogout = () => {
        const postHeader = { headers: { 'Content-Type': 'application/json' }}
        axios.get('http://localhost:5000/auth/logout', {postHeader, withCredentials: true})
        .then(response => {
            window.sessionStorage.setItem("authenticated", "invalid")
            window.location.href = response.data.redirect
        })
        .catch(error => console.log(error))
    }

    return (
        <div id="navBarContainer">
            <h1 className="scribbleTitle" id="topUserBar">scribble!</h1>

            <div className="navSelectionDiv">
                <button id="navButtonsContainer" onClick={() => {window.location.href="/dashboard"}}>
                    <MdOutlineStickyNote2 id="postsIcon" />
                </button>
                <p className="navLabels" onClick={() => {window.location.href="/dashboard"}}>Dashboard</p>
            </div>
            
            <div className="navSelectionDiv">
                <RiCalendarEventLine id="calendarIcon" />
                <p className="navLabels">Calendar</p>
            </div>
            

            <div className="navSelectionDiv">
                <RiSettings4Line id="settingsIcon" onClick={() => {window.location.href='/settings'}}/>
                <p className="navLabels" onClick={() => {window.location.href='/settings'}}>Settings</p>
            </div>

            <div className="navSelectionDiv">
                <RiLogoutCircleLine id="logoutIcon" onClick={() => {userLogout()}}/>
                <p className="navLabels" onClick={() => {userLogout()}}>Logout</p>
            </div>
            
        </div>
    )
}

export default NavBar
