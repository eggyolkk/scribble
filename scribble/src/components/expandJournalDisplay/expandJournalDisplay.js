import React from 'react'
import { BiTrash } from 'react-icons/bi'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import DisplayActivities from '../displayActivities/displayActivities'
import './expandJournalStyle.scss'

const ExpandJournalDisplay = (props) => {
    const { setDocumentTitle, formatDate, confirmDeletePost, journalDetailsData, setShowEditComponent } = props
    
    return (
        <>
            {setDocumentTitle(journalDetailsData.data.title)}
            
            <img src={require(`../../images/${journalDetailsData.data.mood}Mood.png`).default} id="expandJournalMood" alt="Journal mood icon"/>
            <h2 id="expandJournalTitle">{journalDetailsData.data.title}</h2>
            {formatDate(journalDetailsData.data.createdAt)}
            <p className="expandJournalBodyText">{journalDetailsData.data.bodyText}</p>
            
            <h2 id="whatHappenedTitle">What happened on this day:</h2>
            <DisplayActivities activities={journalDetailsData.data.activities}/>

            <div className="deleteDiv">
                <button className="expandJournalButtons" onClick={(e) => {confirmDeletePost(e, journalDetailsData._id)}}>
                    <BiTrash className="expandJournalIcons"/>
                    Delete Post
                </button>
                <button className="expandJournalButtons" onClick={() => {setShowEditComponent(true)}}>
                    <HiOutlinePencilAlt className="expandJournalIcons"/>
                    Edit Post
                </button>
            </div>
        </>
    )
}

export default ExpandJournalDisplay
