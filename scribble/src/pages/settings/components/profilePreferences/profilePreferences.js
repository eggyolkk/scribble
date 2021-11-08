import { useState } from 'react'
import { BsCheckLg } from 'react-icons/bs'
import './profilePreferencesStyle.scss'

const ProfilePreferences = (props) => {
    const { theme, setTheme, displayName, setDisplayName, updateDisplayName } = props
    const [isSaved, setIsSaved] = useState(false)

    const selectedTheme = window.sessionStorage.getItem('theme')

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

    // handle setting theme
    const handleSetTheme = (colour) => {
        setTheme(colour)
        window.sessionStorage.setItem('theme', colour)
    }

    return (
        <>
            <h1 className={selectedTheme === 'light' ? 'settingsSubtitles' : 'settingsSubtitlesDark'}>Profile Preferences</h1>
            <p className={selectedTheme === 'light' ? "displaySubtext" : "displaySubtextDark"}>(You may need to refresh to see changes)</p>

            <h2 className={selectedTheme === 'light' ? "settingsLabels" : "settingsLabelsDark"}>Display name</h2>
            <input
                type="text"
                placeholder={displayName}
                className={selectedTheme === 'light' ? "settingsInput" : "settingsInputDark"}
                value={displayName}
                onChange={(e) => handleOnchangeDisplayName(e)}
            />
            <button className={isSaved ? "settingsButtonSaved" : "settingsButton"} id="profile" onClick={() => {handleSaveDisplayName()}}>
                {isSaved ? <>Saved <BsCheckLg /></>: <>Save name</> }
            </button>

            <h2 className="settingsLabels">Theme</h2>

            <div id="themeContainer">
                <div className={theme === 'light' ? 'themeBoxSelected' : 'themeBoxDark' } onClick={() => {handleSetTheme('light')}}>
                    <div id="themeCircleLight"></div>
                    <p className={theme === 'light' ? 'themeLabelSelected' : 'themeLabel'}>Light</p>
                </div>

                <div className={theme === 'dark' ? 'themeBoxSelected' : 'themeBox'} onClick={() => {handleSetTheme('dark')}}>
                    <div id="themeCircleDark"></div>
                    <p className={theme === 'dark' ? 'themeLabelSelected' : 'themeLabel'}>Dark</p>
                </div>
            </div>
        </>
    )
}

export default ProfilePreferences