import { useState, useReducer } from "react";
import axios from 'axios';

const CreateJournalLogic = () => {
    const [mood, setMood] = useState('')
    const [showComponent, setShowComponent] = useState('moodComponent')
    const [activities, setActivity] = useState([])

    // handle the onchange functions for the journal title and body text state variables
    const initialState = {
        title: "",
        bodyText: "",
    };
    const entryReducer = (state, action) => {
        switch (action.type) {
            case "TITLE_ONCHANGE":
                return { ...state, title: action.payload }
                break;
            case "BODYTEXT_ONCHANGE":
                return { ...state, bodyText: action.payload }
                break;
            default:
                return state
        }
    };
    const [ journal, dispatch ] = useReducer(entryReducer, initialState);

    // convert activities array into a string to use for JSON post request
    const convertActivitiesArray = () => {
        let activitiesString = ''
        
        for (let i=0; i < activities.length; i++) {
            activitiesString += `${activities[i]},`
        }

        activitiesString = activitiesString.slice(0, -1)
        return activitiesString
    }

    // post the journal entry to the database
    const postJournal = async(selectedMood) => {
        if (journal.title.length !== 0 && journal.bodyText !== 0) {
            const activitiesString = convertActivitiesArray()
            const journalJSON = JSON.stringify({ title: journal.title, bodyText: journal.bodyText, mood: selectedMood, activities: activitiesString })
            const postHeader = { headers: { 'Content-Type': 'application/json' }}
            await console.log("journal", journalJSON)

            await axios.post('http://localhost:5000/journals', journalJSON, {postHeader})
            .then(response => window.location.href = response.data.redirect)
            .catch(error => console.log(error))
        }
    }

    return { journal, dispatch, postJournal, mood, setMood, showComponent, setShowComponent, activities, setActivity }
};

export default CreateJournalLogic
