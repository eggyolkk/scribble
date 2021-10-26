import { useState, useReducer, useEffect } from "react";
import convertActivitiesArray from "../../helperFunctions/convertActivitiesArray";
import axios from 'axios';

const CreateJournalLogic = () => {
    const [mood, setMood] = useState('')
    const [showComponent, setShowComponent] = useState('moodComponent')
    const [activities, setActivity] = useState([])

    // set the document title on initial page render
    useEffect(() => {
        document.title = 'Create new post'
    }, [])

    // handle the onchange functions for the journal title and body text state variables
    const initialState = {
        title: "",
        bodyText: "",
    };
    const entryReducer = (state, action) => {
        switch (action.type) {
            case "TITLE_ONCHANGE":
                return { ...state, title: action.payload }
            case "BODYTEXT_ONCHANGE":
                return { ...state, bodyText: action.payload }
            default:
                return state
        }
    };
    const [ journal, dispatch ] = useReducer(entryReducer, initialState);

    // post the journal entry to the database
    const postJournal = async(selectedMood) => {
        if (journal.title.length !== 0 && journal.bodyText.length !== 0) {
            const activitiesString = convertActivitiesArray(activities)
            const journalJSON = JSON.stringify({ title: journal.title, bodyText: journal.bodyText, mood: selectedMood, activities: activitiesString })
            const postHeader = { headers: { 'Content-Type': 'application/json' }}

            await axios.post('http://localhost:5000/journals', journalJSON, {postHeader})
            .then(response => window.location.href = response.data.redirect)
            .catch(error => console.log(error))
        }
    }

    return { journal, dispatch, postJournal, mood, setMood, showComponent, setShowComponent, activities, setActivity }
};

export default CreateJournalLogic
