import {useState} from 'react'
import axios from 'axios'
import './accountSettingsStyle.scss'
import { API } from '../../../../utilities/utilities'

const AccountSettings = (props) => {
    const {username, password, setPassword, newPassword, setNewPassword, updatePassword} = props
    const selectedTheme = window.sessionStorage.getItem('theme')
    const [showChangePassword, setShowChangePassword] = useState(false)
    const [currentPasswordWarning, setCurrentPasswordWarning] = useState('')
    const [newPasswordWarning, setNewPasswordWarning] = useState('')

    // verify if current password is correct
    const verifyPassword = async () => {
        let verified = false
        const userJSON = JSON.stringify({ username: username, password: password })
        const postHeader = { headers: { 'Content-Type': 'application/json' }}

        await axios.post(`${API}/auth/verify_password`, userJSON, {postHeader, withCredentials: true})
        .then(response => {
            if (response.data.status) verified = true
            else setCurrentPasswordWarning('Current password is incorrect')
        })

        // if current password is correct, check if new password is valid
        if (verified) {
            setCurrentPasswordWarning('')
            if (newPassword.length < 6) {
                console.log("character error")
                setNewPasswordWarning('Please enter a minimum of 6 characters')
            } else {
                setNewPasswordWarning('')
                updatePassword()
            }
        }
    }

    return (
        <>
            <h1 className={selectedTheme === 'light' ? 'settingsSubtitles account' : 'settingsSubtitlesDark account'}>Account</h1>

            <h2 className={selectedTheme === 'light' ? "settingsLabels account" : "settingsLabelsDark account"}>Username</h2>
            <p className={selectedTheme === 'light' ? "displaySubtext account" : "displaySubtextDark account"}>(You cannot change your username)</p>
            <input
                type="text"
                className={selectedTheme === 'light' ? "settingsInput account" : "settingsInputDark account"}
                value={username}
                onChange={() => {}}
            />

            <h2 className={selectedTheme === 'light' ? "settingsLabels account" : "settingsLabelsDark account"} id="accountPassword">Password</h2>
            
            {showChangePassword ? 
                <>
                    <p className={selectedTheme === 'light' ? "displaySubtext account" : "displaySubtextDark account"}>Current password: </p>
                    <input
                        type="password"
                        placeholder='••••••••••'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={selectedTheme === 'light' ? "settingsInput account" : "settingsInputDark account"}
                    />
                    <p className={selectedTheme === 'light' ? "displaySubtext account passwordWarning" : "displaySubtextDark account passwordWarningDark"}>{currentPasswordWarning}</p>

                    <p className={selectedTheme === 'light' ? "displaySubtext account" : "displaySubtextDark account"}>New password:</p>
                    <input
                        type="password"
                        placeholder='••••••••••'
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        className={selectedTheme === 'light' ? "settingsInput account" : "settingsInputDark account"}
                    />
                    <p className={selectedTheme === 'light' ? "displaySubtext account passwordWarning" : "displaySubtextDark account passwordWarningDark"}>{newPasswordWarning}</p>

                    <div>
                        <button className="settingsButton" id="cancelPassword" onClick={() => {setShowChangePassword(false)}}>Cancel</button>
                        <button className="settingsButton" id="savePassword" onClick={() => verifyPassword()}>Save password</button>
                    </div>
                </>
                : 
                <>  
                    <button className="settingsButton" onClick={() => {setShowChangePassword(true)}}>Change password</button>
                </>
            }
        </>
    )
}

export default AccountSettings