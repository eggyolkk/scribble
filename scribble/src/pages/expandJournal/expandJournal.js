import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchJournalDetails } from '../../redux/journalDetails/journalDetailsActions'
import { setJournalId, getJournalId } from '../../redux/journalId/journalIdActions'

const ExpandJournal = ({journalData, ownPropsMessage, journalId, fetchJournalDetails, setJournalId, getJournal}) => {
    const [currentId, setCurrentId] = useState('')

    // get the id of the journal from the current url
    const getJournalId = async () => {
        const windowUrl = window.location.href
        const indexOfId = windowUrl.indexOf('/post/') + 6
        await setCurrentId(windowUrl.slice(indexOfId))
        await setJournalId(currentId)
        await fetchJournalDetails()
    }

    // fetch journal details by id on initial page render 
    useEffect(() => {
        getJournalId()
    }, [currentId])

    const renderPage = () => {
        // if still fetching data, show loading
        // else, return journal details
        return (
        <div>
            <h1>My Post</h1>
            {journalData.length !== 0 ? (
                <div>
                    <h2>{journalData.data.title}</h2>
                    <p>{journalData.data.bodyText}</p>
                    <p>{journalData.data.mood}</p>
                    <p>{journalData.data.activities}</p>
                </div>
            ) : (
                <h1>Loading</h1>
            )}
        </div>)
    }

    return (
        <div>
            {renderPage()}
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        journalData: state.journalDetail.journalDetails,
        journalId: state.journalId.journalId,
        ownPropsMessage: ownProps
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchJournalDetails: () => dispatch(fetchJournalDetails()),
        setJournalId: currentId => dispatch(setJournalId(currentId)),
        getJournalId: () => dispatch(getJournalId()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpandJournal)

