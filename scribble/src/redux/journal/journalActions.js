import axios from 'axios'
import { API } from '../../utilities/utilities'

import {
    FETCH_JOURNALS_REQUEST,
    FETCH_JOURNALS_SUCCESS,
    FETCH_JOURNALS_FAILURE
} from './journalTypes'

/* function to fetch all journals */
export const fetchJournals = () => {
    return (dispatch) => {
        dispatch(fetchJournalsRequest())

        const postHeader = { headers: { 'Content-Type': 'application/json' }}
        axios.get(`${API}/journals`, {postHeader, withCredentials: true})
        .then(response => {
            const journals = response.data
            dispatch(fetchJournalsSuccess(journals))
        })
        .catch(error => {
            dispatch(fetchJournalsFailure(error.message))
        })
    }
}

/* action for requesting all journals */
export const fetchJournalsRequest = () => {
    return {
        type: FETCH_JOURNALS_REQUEST
    }
}

/* action for a successful get all journals request */
export const fetchJournalsSuccess = journals => {
    return {
        type: FETCH_JOURNALS_SUCCESS,
        payload: journals
    }
}

/* action for a failed get all journals request */
export const fetchJournalsFailure = error => {
    return {
        type: FETCH_JOURNALS_FAILURE,
        payload: error
    }
}