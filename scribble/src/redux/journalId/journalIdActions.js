import { SET_JOURNAL_ID, GET_JOURNAL_ID } from "./journalIdTypes";

/* action to set the current journal ID */
export const setJournalId = (currentId = 0) => {
    return { 
        type: SET_JOURNAL_ID,
        payload: currentId
    }
}

/* action to get the current journal ID */
export const getJournalId = () => {
    return {
        type: GET_JOURNAL_ID
    }
}