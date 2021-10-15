import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchJournalsFailure } from '../../redux/journal/journalActions'
import { fetchJournals } from '../../redux/journal/journalActions'

const JournalCardLogic = ({ journalData, fetchJournals }) => {
    /* fetch journals on initial page render */
    useEffect(() => {
        fetchJournals()
    }, [])

    console.log('journalData', journalData)

    return journalData.loading ? (
        <h2>Loading</h2>
    ) : journalData.error ? (
        <h2>{journalData.error}</h2>
    ) : (
        <div>
            <h2>List of data</h2>
            {journalData.map(journal => <div><h3>{journal.title}</h3><p>{journal.bodyText}</p></div>)}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        journalData: state.journals
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchJournals: () => dispatch(fetchJournals())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JournalCardLogic)
