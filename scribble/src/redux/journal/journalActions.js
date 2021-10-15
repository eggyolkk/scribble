import axios from 'axios'
import {
    FETCH_JOURNALS_REQUEST,
    FETCH_JOURNALS_SUCCESS,
    FETCH_JOURNALS_FAILURE,
    POST_JOURNAL_REQUEST,
    POST_JOURNAL_SUCCESS,
    POST_JOURNAL_FAILURE
} from './journalTypes'

/* function to fetch journals */
export const fetchJournals = () => {
    return (dispatch) => {
        dispatch(fetchJournalsRequest())
        axios
        .get('http://localhost:5000/journals')
        .then(response => {
            const journals = response.data
            dispatch(fetchJournalsSuccess(journals))
        })
        .catch(error => {
            dispatch(fetchJournalsFailure(error.message))
        })
    }
}

/* action for requesting a journal */
export const fetchJournalsRequest = () => {
    return {
        type: FETCH_JOURNALS_REQUEST
    }
}

/* action for a successful journal request */
export const fetchJournalsSuccess = journals => {
    return {
        type: FETCH_JOURNALS_SUCCESS,
        payload: journals
    }
}

/* action for a failed journal request */
export const fetchJournalsFailure = error => {
    return {
        type: FETCH_JOURNALS_FAILURE,
        payload: error
    }
}

/* action for posting a journal */
export const postJournalRequest = () => {
    return {
        type: POST_JOURNAL_REQUEST
    }
}

/* action for successfully posting a journal */
export const postJournalSuccess = journal => {
    return {
        type: POST_JOURNAL_SUCCESS,
        payload: journal
    }
}

/* action for a failed journal post */
export const postJournalFailure = error => {
    return {
        type: POST_JOURNAL_FAILURE,
        payload: error
    }
}