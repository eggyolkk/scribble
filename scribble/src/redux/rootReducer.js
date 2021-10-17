import { combineReducers } from 'redux'
import journalReducer from './journal/journalReducer'
import journalDetailsReducer from './journalDetails/journalDetailsReducer'
import journalIdReducer from './journalId/journalIdReducer'

const rootReducer = combineReducers({
    journal: journalReducer,
    journalDetail: journalDetailsReducer,
    journalId: journalIdReducer
})

export default rootReducer