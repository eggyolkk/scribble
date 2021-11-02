import { useState, useEffect } from 'react'
import displayActivityIcon from '../../../../helperFunctions/displayActivityIcon'
import './expandJournalEditStyle.scss'

const EditActivities = (props) => {
    const { activitiesString, editedActivitiesArray, setEditedActivitiesArray } = props
    const fullActivitiesList = ['Food', 'Drinks', 'Sleep', 'Exercise', 'Entertainment', 'Friends', 'Family', 'Date', 'Study', 'Work', 'Hobbies', 'Drawing', 'Gaming', 'Reading', 'Cleaning', 'Cooking', 'Music', 'Gardening', 'Beach', 'Party']

    // toggle edited activities array
    // else if the activity is already in the list, remove from the activities list
    const toggleEditedActivities = (selectedActivity) => {
        if (!editedActivitiesArray.includes(selectedActivity)) {
            setEditedActivitiesArray([...editedActivitiesArray, selectedActivity])
        }
        else {
            setEditedActivitiesArray(editedActivitiesArray.filter(editedActivitiesArray => editedActivitiesArray !== selectedActivity))
        }
    }

    // map the selected activities
    const activitiesMap = fullActivitiesList.map((activity, index) =>
        <div key={index}>
            <button className="editActivityButtons" onClick={() => {toggleEditedActivities(activity)}}>
                {editedActivitiesArray.includes(activity) ? 
                <>
                {displayActivityIcon(activity, 'selected')}
                <p className='editActivityLabelsActive'>{activity}</p>
                </> :
                <>
                {displayActivityIcon(activity, 'unselected')}
                <p className='editActivityLabelsInactive'>{activity}</p>
                </>}
            </button>
            
        </div>
    )

    return (
        <div id="editActivitiesContainer">
            <h2 className="editLabels">Edit activities</h2>
            <div id="editActivitiesIconsContainer">
                {activitiesMap}
            </div>
        </div>
    )
}

export default EditActivities