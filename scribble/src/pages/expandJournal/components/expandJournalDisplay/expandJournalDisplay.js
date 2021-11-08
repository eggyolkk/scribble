import React from 'react'
import { BiTrash } from 'react-icons/bi'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import DisplayActivities from '../displayActivities/displayActivities'
import './expandJournalStyle.scss'

const ExpandJournalDisplay = (props) => {
    const { setDocumentTitle, formatDate, confirmDeletePost, journalDetailsData, setShowEditComponent } = props
    const selectedTheme = window.sessionStorage.getItem('theme')
    
    return (
        <>
            {setDocumentTitle(journalDetailsData.data.title)}
            
            <img src={require(`../../../../images/${journalDetailsData.data.mood}Mood.png`).default} id="expandJournalMood" alt="Journal mood icon"/>
            <h2 className={selectedTheme === 'light' ? "expandJournalTitle" : "expandJournalTitleDark"}>{journalDetailsData.data.title}</h2>
            {formatDate(journalDetailsData.data.createdAt)}
            <p className={selectedTheme === 'light' ? "expandJournalBodyText" : "expandJournalBodyTextDark"}>{journalDetailsData.data.bodyText}</p>
            
            <h2 id={selectedTheme === 'light' ? "whatHappenedTitle" : "whatHappenedTitleDark"}>What happened on this day:</h2>
            <DisplayActivities activities={journalDetailsData.data.activities}/>

            <div className="deleteDiv">
                <button className={selectedTheme === 'light' ? "expandJournalButtons" : "expandJournalButtonsDark"} onClick={(e) => {confirmDeletePost(e, journalDetailsData._id)}}>
                    <BiTrash className={selectedTheme === 'light' ? "expandJournalIcons" : "expandJournalIconsDark"}/>
                    Delete Post
                </button>
                <button className={selectedTheme === 'light' ? "expandJournalButtons" : "expandJournalButtonsDark"} onClick={() => {setShowEditComponent(true)}}>
                    <HiOutlinePencilAlt className={selectedTheme === 'light' ? "expandJournalIcons" : "expandJournalIconsDark"}/>
                    Edit Post
                </button>
            </div>
        </>
    )
}

export default ExpandJournalDisplay
