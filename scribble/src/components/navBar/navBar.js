import React from 'react'
import './navBarStyle.scss'
import { MdOutlineStickyNote2 } from 'react-icons/md'
import { RiCalendarEventLine, RiSettings4Line } from 'react-icons/ri'

const NavBar = () => {
    return (
        <div id="navBarContainer">
            <MdOutlineStickyNote2 id="postsIcon"/>
            <RiCalendarEventLine id="calendarIcon"/>
            <RiSettings4Line id="settingsIcon"/>
        </div>
    )
}

export default NavBar
