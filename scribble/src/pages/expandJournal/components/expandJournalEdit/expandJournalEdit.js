import { useEffect, useReducer, useState } from 'react'
import axios from 'axios'
import EditActivities from './editActivities'
import EditMood from './editMood'
import convertActivitiesArray from '../../../../helperFunctions/convertActivitiesArray'
import { API } from '../../../../utilities/utilities'

const ExpandJournalEdit = (props) => {
    const { journalDetailsData, setShowEditComponent } = props
    const [editedActivitiesArray, setEditedActivitiesArray] = useState(journalDetailsData.data.activities.split(','))
    const [editedMood, setEditedMood] = useState(journalDetailsData.data.mood)

    const selectedTheme = window.sessionStorage.getItem('theme')

    // set document title on initial page render and set initial mood and activities 
    useEffect(() => {
        document.title = "Edit post"
    }, [])

    // handle the onchange functions for the title and body text states
    const initialState = {
        title: journalDetailsData.data.title,
        bodyText: journalDetailsData.data.bodyText
    }
    const editReducer = (state, action) => {
        switch (action.type) {
            case "EDIT_TITLE":
                return { ...state, title: action.payload }
            case "EDIT_BODYTEXT":
                return { ...state, bodyText: action.payload }
            default:
                return state
        }
    }

    const [editedJournal, dispatch] = useReducer(editReducer, initialState)

    // edit the post on database
    const editPost = async () => {
        if (editedJournal.title.length !== 0 && editedJournal.bodyText.length !== 0) {
            const activitiesString = convertActivitiesArray(editedActivitiesArray)
            const editedJSON = JSON.stringify({ title: editedJournal.title, bodyText: editedJournal.bodyText, mood: editedMood, activities: activitiesString })
            const postHeader = { headers: { 'Content-Type': 'application/json' }}

            await axios.put(`${API}/journals/${journalDetailsData.data._id}`, editedJSON, { postHeader, withCredentials: true })
            .then(response => window.location.href = response.data.redirect)
            .catch(error => console.log(error))
        }
    }

    return (
        <>
            <h1 className={selectedTheme === 'light' ? "expandJournalTitle" : "expandJournalTitleDark"}>Edit Post</h1>
            <EditMood journalDetailsData={journalDetailsData} setEditedMood={setEditedMood} editedMood={editedMood}/>

            <input
                type='text'
                placeholder={journalDetailsData.data.title}
                value={editedJournal.title}
                id={selectedTheme === 'light' ? "editTitle" : "editTitleDark"}
                onChange={(e) => dispatch({
                    type: "EDIT_TITLE",
                    payload: e.target.value
                })}
            />

            <textarea
                name='bodyText'
                placeholder={journalDetailsData.data.bodyText}
                value={editedJournal.bodyText}
                id={selectedTheme === 'light' ? "editBodyText" : "editBodyTextDark"}
                onChange={(e) => dispatch({
                    type: "EDIT_BODYTEXT",
                    payload: e.target.value
                })}
            />

            <EditActivities editedActivitiesArray={editedActivitiesArray} setEditedActivitiesArray={setEditedActivitiesArray}/>

            <div>
                <button id={selectedTheme === 'light' ? "saveEditButton" : "saveEditButtonDark"} onClick={() => {editPost()}}>Save changes</button>
                <button id="cancelEditButton" onClick={() => {setShowEditComponent(false)}}>Cancel</button>
            </div>
        </>
    )
}

export default ExpandJournalEdit
