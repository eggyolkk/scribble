import './profilePreferencesStyle.scss'

const ProfilePreferences = (props) => {
    const { theme, setTheme, displayName } = props

    return (
        <>
            <h1 className='settingsSubtitles'>Profile Preferences</h1>
            
            <h2 className="settingsLabels">Display name</h2>
            <p className="displaySubtext">(The name that's displayed on your dashboard)</p>
            <input
                type="text"
                placeholder={displayName}
                className="settingsInput"
            />
            <button className="settingsButton" id="profile">Save name</button>

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