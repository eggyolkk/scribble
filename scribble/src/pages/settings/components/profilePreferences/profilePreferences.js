import { useState } from 'react'
import { BsCheckLg } from 'react-icons/bs'
import './profilePreferencesStyle.scss'

const ProfilePreferences = (props) => {
    const { theme, setTheme, displayName, setDisplayName, updateDisplayName } = props
    const [isSaved, setIsSaved] = useState(false)

    // handle the onchange for display name
    const handleOnchangeDisplayName = (e) => {
        setDisplayName(e.target.value)
        setIsSaved(false)
    }

    // handle saving display name
    const handleSaveDisplayName = (e) => {
        updateDisplayName()
        setIsSaved(true)
    }


    return (
        <>
            <h1 className='settingsSubtitles'>Profile Preferences</h1>
            
            <h2 className="settingsLabels">Display name</h2>
            <p className="displaySubtext">(You may need to refresh to see changes)</p>
            <input
                type="text"
                placeholder={displayName}
                className="settingsInput"
                value={displayName}
                onChange={(e) => handleOnchangeDisplayName(e)}
            />
            <button className={isSaved ? "settingsButtonSaved" : "settingsButton"} id="profile" onClick={() => {handleSaveDisplayName()}}>
                {isSaved ? <>Saved <BsCheckLg /></>: <>Save name</> }
            </button>

            <h2 className="settingsLabels">Theme</h2>

            <div id="themeContainer">
                <div className={theme === 'light' ? 'themeBoxSelected' : 'themeBox'} onClick={() => {setTheme('light')}}>
                    <div id="themeCircleLight"></div>
                    <p className={theme === 'light' ? 'themeLabelSelected' : 'themeLabel'}>Light</p>
                </div>

                <div className={theme === 'dark' ? 'themeBoxSelected' : 'themeBox'} onClick={() => {setTheme('dark')}}>
                    <div id="themeCircleDark"></div>
                    <p className={theme === 'dark' ? 'themeLabelSelected' : 'themeLabel'}>Dark</p>
                </div>
            </div>
        </>
    )
}

export default ProfilePreferences