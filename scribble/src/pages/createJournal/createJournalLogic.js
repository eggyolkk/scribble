import { useReducer } from "react";
import axios from 'axios';

const CreateJournalLogic = () => {

    /* this handles the onchange functions for the journal title and body text state variables */
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


    /* this posts the journal entry to the database */
    const postJournal = async() => {
        if (journal.title.length !== 0 && journal.bodyText !== 0) {
            const postHeader = { headers: { 'Content-Type': 'application/json' }}
            const journalJSON = JSON.stringify({ title: journal.title, bodyText: journal.bodyText })

            await axios.post('http://localhost:5000/journals', journalJSON, {postHeader})
            .then(response => console.log(response))
            .catch(error => console.log(error))
        }
    }

    return { journal, dispatch, postJournal }
};

export default CreateJournalLogic
