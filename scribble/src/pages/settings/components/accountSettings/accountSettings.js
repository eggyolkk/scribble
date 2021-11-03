import './accountSettingsStyle.scss'

const AccountSettings = () => {
    return (
        <>
            <h1 className='settingsSubtitles account'>Account</h1>

            <h2 className="settingsLabels account">Username</h2>
            <p className="displaySubtext account">(You cannot change your username)</p>
            <input
                type="text"
                className="settingsInput account"
                value='username'
                onChange={() => {}}
            />

            <h2 className="settingsLabels" id="accountPassword">Password</h2>
            <input
                type="password"
                placeholder='••••••••••'
                className="settingsInput account"
            />

            <button className="settingsButton">Change password</button>
        </>
    )
}

export default AccountSettings