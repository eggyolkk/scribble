import { useState, useEffect, useRef } from 'react'
import './settingsPageStyle.scss'
import NavBar from '../../components/navBar/navBar'
import DeletePostModal from "../../components/deletePostModal/deletePostModal";
import ProfilePreferences from './components/profilePreferences/profilePreferences'
import AccountSettings from './components/accountSettings/accountSettings';
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

const Settings = () => {
    let firstRender = useRef(true)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [displayName, setDisplayName] = useState('')
    const [theme, setTheme] = useState('')
    const [avatar, setAvatar] = useState('')
    const [loading, setLoading] = useState(true)

    // on initial page render, get user's details and preferences
    useEffect(() => {
        getUserDetails()
        setLoading(false)
    }, [])

    // except for the initial page render, update changes when theme is changed
    useEffect(() => {
        if (!firstRender.current) {
            updateTheme()
            getUserDetails()
        }
    }, [firstRender, theme])

    // get user's details
    const getUserDetails = async () => {
        // get user id
        let userId = ''
        const getHeader = { headers: { 'Content-Type': 'application/json' }}
        await axios.get('http://localhost:5000/auth/get_user_id', {getHeader, withCredentials: true})
        .then(response => userId = response.data.user_id)

        // get details
        await axios.get(`http://localhost:5000/user/query?userId=${userId}`, {getHeader, withCredentials: true})
        .then(response => {
            console.log('response', response)
            setUsername(response.data.username)
            setDisplayName(response.data.displayName)
            setTheme(response.data.theme)
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
        await axios.get('http://localhost:5000/auth/get_user_id', {getHeader, withCredentials: true})
        .then(response => userId = response.data.user_id)

        // get details
        await axios.put(`http://localhost:5000/user/set_user_theme?userId=${userId}&theme=${theme}`, {getHeader, withCredentials: true})
        
    }

    return (
        <div className="pageBody">

            <div id="dashboardContainer">
                <div className="dashboardFlexLeft">
                    <NavBar />
                </div>

                <div id="dashboardFlexRight">
                    <div className="settingsContent">
                        <h1 id="settingsHeader">Settings</h1>

                        {!loading && username && avatar ?
                            <>
                                <div id="preferencesDiv">
                                    <div id="profileFlexLeft">
                                        <img src={require(`../../images/${avatar}Mood.png`).default} id="profileAvatarDisplay" alt="Avatar icon"/>
                                        <button className="settingsButton" id="avatar">Change avatar</button>
                                    </div>
        
                                    <div id="profileFlexRight">
                                        <ProfilePreferences theme={theme} setTheme={setTheme} displayName={displayName}/>
                                    </div>
                                </div>
        
                                <div id="accountDiv">
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