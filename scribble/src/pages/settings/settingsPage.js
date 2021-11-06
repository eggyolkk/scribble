import { useState, useEffect, useRef } from 'react'
import './settingsPageStyle.scss'
import NavBar from '../../components/navBar/navBar'
import ProfilePreferences from './components/profilePreferences/profilePreferences'
import AccountSettings from './components/accountSettings/accountSettings';
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { API } from '../../utilities/utilities';

const Settings = () => {
    let firstRender = useRef(true)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [theme, setTheme] = useState('')
    const [avatar, setAvatar] = useState('')
    const [loading, setLoading] = useState(true)

    const selectedTheme = window.sessionStorage.getItem('theme')

    // on initial page render, get user's details and preferences
    useEffect(() => {
        getUserDetails()
        setLoading(false)
    }, [])

    // except for initial page render, update changes when theme is changed
    useEffect(() => {
        if (!firstRender.current) {
            updateTheme()
        }
    }, [firstRender, theme])

    useEffect(() => {
        if (window.sessionStorage.getItem('theme') === 'dark') {
            document.body.classList.add('darkBody')
        }
        else {
            document.body.classList.remove('darkBody')
        }
    }, [theme])

    // get user's details
    const getUserDetails = async () => {
        // get user id
        let userId = ''
        const getHeader = { headers: { 'Content-Type': 'application/json' }}
        await axios.get(`${API}/auth/get_user_id`, {getHeader, withCredentials: true})
        .then(response => userId = response.data.user_id)

        // get details
        await axios.get(`${API}/user/query?userId=${userId}`, {getHeader, withCredentials: true})
        .then(response => {
            setTheme(response.data.theme)
            window.sessionStorage.setItem('theme', response.data.theme)
            setUsername(response.data.username)
            setDisplayName(response.data.displayName)
            setAvatar(response.data.avatar)
        })
        .catch(error => console.log(error))

        firstRender.current = false
    }

    // set preferred theme
    const updateTheme = async () => {
        // get user id
        let userId = ''
        const getHeader = { headers: { 'Content-Type': 'application/json' }}
        await axios.get(`${API}/auth/get_user_id`, {getHeader, withCredentials: true})
        .then(response => userId = response.data.user_id)

        // update theme
        await axios.put(`${API}/user/set_user_theme?userId=${userId}&theme=${theme}`, {getHeader, withCredentials: true})
    }

    // set display name
    const updateDisplayName = async () => {
        // get user id
        let userId = ''
        const getHeader = { headers: { 'Content-Type': 'application/json' }}
        await axios.get(`${API}/auth/get_user_id`, {getHeader, withCredentials: true})
        .then(response => userId = response.data.user_id)

        // update display name
        if (displayName) {
            await axios.put(`${API}/user/set_display_name?userId=${userId}&displayName=${displayName}`, {getHeader, withCredentials: true})
            window.sessionStorage.setItem('displayName', displayName)
        } 
        else {
            console.log("needs to be valid")
        }
        
    }

    return (
        <div className="pageBody">

            <div id="dashboardContainer">
                <div className={selectedTheme === 'light' ? "dashboardFlexLeft" : "dashboardFlexLeftDark"}>
                    <NavBar />
                </div>

                <div id="dashboardFlexRight">
                    <div className="settingsContent">
                        <h1 id={selectedTheme === 'light' ? "settingsHeader" : "settingsHeaderDark"}>Settings</h1>

                        {!loading && username && avatar ?
                            <>
                                <div id={selectedTheme === 'light' ? "preferencesDiv" : "preferencesDivDark"}>
                                    <div id="profileFlexLeft">
                                        <img src={require(`../../images/${avatar}Mood.png`).default} id="profileAvatarDisplay" alt="Avatar icon"/>
                                        <button className="settingsButton" id="avatar">Change avatar</button>
                                    </div>
        
                                    <div id="profileFlexRight">
                                        <ProfilePreferences theme={theme} setTheme={setTheme} displayName={displayName} setDisplayName={setDisplayName} updateDisplayName={updateDisplayName}/>
                                    </div>
                                </div>
        
                                <div id={selectedTheme === 'light' ? "accountDiv" : "accountDivDark"}>
                                    <AccountSettings />
                                </div>
                            </>
                        
                        : 
                        
                        <Box sx={{ display: 'flex' }}>
                            <CircularProgress />
                        </Box>

                        }
                        
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Settings