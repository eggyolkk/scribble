import { SET_JOURNAL_ID, GET_JOURNAL_ID } from "./journalIdTypes";

const initialState = {
    journalId: ''
}

const journalIdReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_JOURNAL_ID: return {
            ...state,
            journalId: action.payload
        }

        case GET_JOURNAL_ID: return {
            ...state
        }

        default: return state
    }
}

export default journalIdReducer