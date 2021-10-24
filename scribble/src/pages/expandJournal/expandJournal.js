import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchJournalDetails } from '../../redux/journalDetails/journalDetailsActions'
import { setJournalId, getJournalId } from '../../redux/journalId/journalIdActions'
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io'
import NavBar from '../../components/navBar/navBar'
import TopUserBar from '../../components/topUserBar/topUserBar'
import DisplayActivities from '../../components/displayActivities/displayActivities'
import './expandJournalStyle.scss'


const ExpandJournal = ({journalDetailsData, ownPropsMessage, journalId, fetchJournalDetails, setJournalId, getJournalId}) => {
    const [currentId, setCurrentId] = useState('')
    const [loading, setLoading] = useState(true)
    const [dataReady, setDataReady] = useState(false)
    const [data, setData] = useState({})

    // get the id of the journal from the current url
    const fetchJournalId = async () => {
        const windowUrl = window.location.href
        const indexOfId = windowUrl.indexOf('/post/') + 6

        await setCurrentId(windowUrl.slice(indexOfId))
        await setJournalId(currentId)
        await fetchJournalDetails()
    }

    // fetch journal details by id on initial page render 
    useEffect(() => {
        fetchJournalId()
        setLoading(false)
    }, [currentId, data])

    console.log('log before render', journalDetailsData)
    return (
        <div className="pageBody">
            <TopUserBar />

            <div id="expandJournalContainer">
                <div id="expandJournalFlexLeft">
                    <NavBar />
                </div>

                <div id="expandJournalFlexRight">
                    <div id="journalContainer">
                        <div id="journalLeft">
                            <button className="switchJournalPost"><IoMdArrowRoundBack className="arrowButton"/></button>
                        </div>

                        <div id="journalMiddle">
                            <div id='closeButtonDiv'>
                                <button id="closeButton" onClick={() => window.location.href = '/dashboard'}>x</button>
                            </div>
                            
                            {loading ? (
                                <h2>Loading</h2>
                            ) : !loading && journalDetailsData.data !== undefined ? (
                                <>
                                    <img src={require(`../../images/${journalDetailsData.data.mood}Mood.png`).default} id="expandJournalMood" alt="Journal mood icon"/>
                                    <h2 id="expandJournalTitle">{journalDetailsData.data.title}</h2>
                                    <p id="expandJournalBodyText">{journalDetailsData.data.bodyText}</p>
                                    
                                    <h2 id="whatHappenedTitle">What happened on this day:</h2>
                                    <DisplayActivities activities={journalDetailsData.data.activities}/>
                                </>
                            ): <h1>Error</h1>}
                        </div>

                        <div id="journalRight">
                            <button className="switchJournalPost"><IoMdArrowRoundForward className="arrowButton"/></button>
                        </div>
                        
                    </div>
                </div>

            </div>

        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        journalDetailsData: state.journalDetail.journalDetails,
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

