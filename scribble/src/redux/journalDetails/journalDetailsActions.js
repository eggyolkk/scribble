import axios from 'axios'
import {
    FETCH_JOURNAL_DETAILS_REQUEST,
    FETCH_JOURNAL_DETAILS_SUCCESS,
    FETCH_JOURNAL_DETAILS_FAILURE
} from './journalDetailsTypes'
import { API } from '../../utilities/utilities'


/* function to fetch a journal by id */
export const fetchJournalDetails = () => {
    return (dispatch, getState) => {
        // get journal id currently stored
        const journalId = getState().journalId.journalId

        if (journalId) {
            const postHeader = { headers: { 'Content-Type': 'application/json' }}

            dispatch(fetchJournalDetailsRequest())
            axios
            .get(`${API}/journals/${journalId}`, {postHeader, withCredentials: true})
            .then(response => {
                const journalDetails = response.data
                dispatch(fetchJournalDetailsSuccess(journalDetails))
            })
            .catch(error => {
                dispatch(fetchJournalDetailsFailure(error.message))
                console.log('error', error)
            })
        }

        
    }
}

/* action for requesting a journal */
export const fetchJournalDetailsRequest = () => {
    return {
        type: FETCH_JOURNAL_DETAILS_REQUEST
    }
}

/* action for a successful journal request */
export const fetchJournalDetailsSuccess = journals => {
    return {
        type: FETCH_JOURNAL_DETAILS_SUCCESS,
        payload: journals
    }
}

/* action for a failed journal request */
export const fetchJournalDetailsFailure = error => {
    return {
        type: FETCH_JOURNAL_DETAILS_FAILURE,
        payload: error
    }
}