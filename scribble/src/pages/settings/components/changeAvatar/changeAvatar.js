import { useEffect, useState } from 'react'
import './changeAvatarStyle.scss'

const ChangeAvatar = (props) => {
    const {setShowModal, avatar, setAvatar, updateAvatar} = props
    const selectedTheme = window.sessionStorage.getItem('theme')

    // save avatar
    const saveAvatar = () => {
        setShowModal(false)
        updateAvatar()
    }

    return (
        <div id={selectedTheme === 'light' ? "changeAvatarModal" : "changeAvatarModalDark"}>
            <h1 className={selectedTheme === 'light' ? "settingsSubtitles" : "settingsSubtitlesDark"}>Change your avatar</h1>

            <img src={require(`../../../../images/${avatar}Mood.png`).default} id="editAvatarIcon" alt="Journal mood icon"/>

            <div id="avatarSelectionDiv">
                <img src={require(`../../../../images/ecstaticMood.png`).default} 
                    className={avatar === 'ecstatic' ? "avatarSelectionIconSelected" : "avatarSelectionIcon"}
                    onClick={() => {setAvatar('ecstatic')}} 
                    alt="Avatar ecstatic icon"/>
                
                <img src={require(`../../../../images/happyMood.png`).default} 
                    className={avatar === 'happy' ? "avatarSelectionIconSelected" : "avatarSelectionIcon"}
                    onClick={() => {setAvatar('happy')}} 
                    alt="Avatar happy icon"/>
                
                <img src={require(`../../../../images/okayMood.png`).default} 
                    className={avatar === 'okay' ? "avatarSelectionIconSelected" : "avatarSelectionIcon"}
                    onClick={() => {setAvatar('okay')}} 
                    alt="Avatar okay icon"/>
                
                <img src={require(`../../../../images/sadMood.png`).default} 
                    className={avatar === 'sad' ? "avatarSelectionIconSelected" : "avatarSelectionIcon"}
                    onClick={() => {setAvatar('sad')}} 
                    alt="Avatar sad icon"/>
                
                <img src={require(`../../../../images/angryMood.png`).default} 
                    className={avatar === 'angry' ? "avatarSelectionIconSelected" : "avatarSelectionIcon"}
                    onClick={() => {setAvatar('angry')}} 
                    alt="Avatar angry icon"/>
                
                <img src={require(`../../../../images/anxiousMood.png`).default} 
                    className={avatar === 'anxious' ? "avatarSelectionIconSelected" : "avatarSelectionIcon"}
                    onClick={() => {setAvatar('anxious')}} 
                    alt="Avatar anxious icon"/>
            </div>

            <button className="settingsButton" id="avatarButton" onClick={() => {saveAvatar()}}>Save</button>
            
        </div>
    )
}

export default ChangeAvatar
