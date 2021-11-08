import { useEffect, useState } from 'react'
import './navBarStyle.scss'
import { MdOutlineStickyNote2 } from 'react-icons/md'
import { RiCalendarEventLine, RiSettings4Line, RiLogoutCircleLine } from 'react-icons/ri'
import axios from 'axios'
import { API } from '../../utilities/utilities'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

const NavBar = () => {
    const [loading, setLoading] = useState(true)
    const selectedTheme = window.sessionStorage.getItem('theme')

    // save the user display name and avatar in session storage
    useEffect(() => {
        if (!window.sessionStorage.getItem('avatar')) {
            getUserDetails()
        }
        else {
            setLoading(false)
        }
    }, [window.sessionStorage.getItem('avatar'), window.sessionStorage.getItem('displayName')])


    // log the user out
    const userLogout = () => {
        const postHeader = { headers: { 'Content-Type': 'application/json' }}
        axios.get(`${API}/auth/logout`, {postHeader, withCredentials: true})
        .then(response => {
            window.sessionStorage.setItem("authenticated", "invalid")
            window.sessionStorage.setItem("displayName", "")
            window.sessionStorage.setItem("avatar", "")
            window.sessionStorage.setItem("theme", "")
            window.location.href = response.data.redirect
        })
        .catch(error => console.log(error))
    }

    // fetch user's profile details
    const getUserDetails = async () => {
        // get user id
        let userId = ''
        const getHeader = { headers: { 'Content-Type': 'application/json' }}
        await axios.get(`${API}/auth/get_user_id`, {getHeader, withCredentials: true})
        .then(response => userId = response.data.user_id)

        // get details
        await axios.get(`${API}/user/query?userId=${userId}`, {getHeader, withCredentials: true})
        .then(response => {
            console.log('response', response)
            window.sessionStorage.setItem('displayName', response.data.displayName)
            window.sessionStorage.setItem('avatar', response.data.avatar)
            window.sessionStorage.setItem('theme', response.data.theme)
        })
        .catch(error => console.log(error))

        setLoading(false)
    }

    return (
        <div id="navBarContainer">
            <h1 className={selectedTheme === 'light' ? "scribbleTitle" : "scribbleTitleDark"} id="topUserBar" onClick={() => {window.location.href = '/dashboard'}}>scribble!</h1>

            <div id="navRoutesContainer">
                <div className="navSelectionDiv">
                    <button id="navButtonsContainer" onClick={() => {window.location.href="/dashboard"}}>
                        <MdOutlineStickyNote2 id={selectedTheme === 'light' ? "postsIcon" : "postsIconDark"} />
                    </button>
                    <p className={selectedTheme === 'light' ? "navLabels" : "navLabelsDark"} onClick={() => {window.location.href="/dashboard"}}>Dashboard</p>
                </div>
                
                <div className="navSelectionDiv">
                    <RiSettings4Line id={selectedTheme === 'light' ? "settingsIcon" : "settingsIconDark"} onClick={() => {window.location.href='/settings'}}/>
                    <p className={selectedTheme === 'light' ? "navLabels" : "navLabelsDark"} onClick={() => {window.location.href='/settings'}}>Settings</p>
                </div>

                <div className="navSelectionDiv">
                    <RiLogoutCircleLine id={selectedTheme === 'light' ? "logoutIcon" : "logoutIconDark"} onClick={() => {userLogout()}}/>
                    <p className={selectedTheme === 'light' ? "navLabels" : "navLabelsDark"} onClick={() => {userLogout()}}>Logout</p>
                </div>
            </div>
            
            {window.sessionStorage.getItem('avatar') && !loading ? 
                <div id="navProfileDiv">
                    <img 
                        src={require(`../../images/${window.sessionStorage.getItem('avatar')}Mood.png`).default} 
                        alt="Avatar icon" 
                        id="navProfileAvatar" 
                        onClick={() => {window.location.href = '/settings'}}>
                    </img>
                    <p id={selectedTheme === 'light' ? "navProfileName" : "navProfileNameDark"} onClick={() => {window.location.href = '/settings'}}>{window.sessionStorage.getItem('displayName')}</p>
                </div>
                :
                <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>
            }
        </div>
    )
}

export default NavBar
