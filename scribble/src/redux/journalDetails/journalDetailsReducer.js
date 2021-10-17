import {
    FETCH_JOURNAL_DETAILS_REQUEST,
    FETCH_JOURNAL_DETAILS_SUCCESS,
    FETCH_JOURNAL_DETAILS_FAILURE
} from './journalDetailsTypes'

const initialState = {
    loading: false,
    journalDetails: [],
    error: ''
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JOURNAL_DETAILS_REQUEST:
            return { ...state, loading: true }
        case FETCH_JOURNAL_DETAILS_SUCCESS:
            return { loading: false, journalDetails: action.payload, error: '' }
        case FETCH_JOURNAL_DETAILS_FAILURE:
            return { loading: false, journalDetails: [], error: action.payload }
        default: return state
    }
}

export default reducer