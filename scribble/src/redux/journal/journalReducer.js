import {
    FETCH_JOURNALS_REQUEST,
    FETCH_JOURNALS_SUCCESS,
    FETCH_JOURNALS_FAILURE
} from './journalTypes'


const initialState = {
    loading: false,
    journals: [],
    error: ''
}

const journalReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_JOURNALS_REQUEST:
            return { ...state, loading: true }
        case FETCH_JOURNALS_SUCCESS:
            return { loading: false, journals: action.payload, error: '' }
        case FETCH_JOURNALS_FAILURE:
            return { loading: false, journals: [], error: action.payload }
        default: return state
    }
}

export default journalReducer