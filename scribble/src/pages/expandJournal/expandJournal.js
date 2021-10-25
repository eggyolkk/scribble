import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchJournals } from '../../redux/journal/journalActions'
import { fetchJournalDetails } from '../../redux/journalDetails/journalDetailsActions'
import { setJournalId, getJournalId } from '../../redux/journalId/journalIdActions'
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io'
import { BiTrash } from 'react-icons/bi'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import NavBar from '../../components/navBar/navBar'
import TopUserBar from '../../components/topUserBar/topUserBar'
import DisplayActivities from '../../components/displayActivities/displayActivities'
import DeletePostModal from '../../components/deletePostModal/deletePostModal'
import DeletePostFunction from '../../components/deletePostFunction/deletePostFunction'
import axios from 'axios'
import './expandJournalStyle.scss'

const ExpandJournal = ({journalDetailsData, ownPropsMessage, journalId, fetchJournalDetails, setJournalId, getJournalId, journalData, fetchJournals}) => {
    const [currentId, setCurrentId] = useState('')
    const [loading, setLoading] = useState(true)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [darkenBg, setDarkenBg] = useState(false)

    // fetch journal details by id and all journals on initial page render 
    useEffect(() => {
        fetchJournalId()
        setLoading(false)
    }, [currentId])

    // get all journals and the id of the journal from the current url
    const fetchJournalId = async () => {
        const windowUrl = window.location.href
        const indexOfId = windowUrl.indexOf('/post/') + 6

        await setCurrentId(windowUrl.slice(indexOfId))
        await setJournalId(currentId)
        await fetchJournalDetails()
        await fetchJournals()
    }

    // return the id of the next post
    // if current post is the latest one posted, return the id of the current post
    const getNextPostId = () => {
        const indexOfCurrentPost = journalData.map(function(post) { return post._id }).indexOf(currentId)
        const indexOfNextPost = indexOfCurrentPost + 1
        
        if (journalData.length !== 0) {
            if (indexOfNextPost !== journalData.length) {
                return journalData[indexOfNextPost]._id
            }
            else {
                return currentId
            }
        }
    }

    // return the id of the previous post
    // if current post is the first one posted, return the id of the current post
    const getPrevPostId = () => {
        const indexOfCurrentPost = journalData.map(function(post) { return post._id }).indexOf(currentId)
        const indexOfPrevPost = indexOfCurrentPost - 1

        if (journalData.length !== 0) {
            if (indexOfPrevPost !== -1) {
                return journalData[indexOfPrevPost]._id
            }
            else {
                return currentId
            }
        }
    }

    // format the date journal was created to a DD/MM/YYYY format
    const formatDate = (journalDate) => {
        const year = journalDate.slice(0, 4)
        const month = journalDate.slice(5, 7)
        const day = journalDate.slice(8, 10)

        return <p className="expandJournalBodyText">{day}/{month}/{year}</p>
    }

    // show popup modal when delete button is clicked, darken bg and set the id of the post to be deleted
    const confirmDeletePost = (e, journalId) => {
        // ignore the parent div onclick (i.e. prevent loading the post details page when delete button is clicked)
        e.stopPropagation()

        setShowDeleteModal(true)
        setDarkenBg(true)
    }

    return (
        <div className="pageBody">
            {showDeleteModal ? <DeletePostModal setShowDeleteModal={setShowDeleteModal} setDarkenBg={setDarkenBg} postId={currentId}/> : null}

            <div className={darkenBg ? 'modalBg' : 'modalBgNone'}></div>

            <TopUserBar />

            <div id="expandJournalContainer">
                <div id="expandJournalFlexLeft">
                    <NavBar />
                </div>

                <div id="expandJournalFlexRight">
                    <div id="journalContainer">
                        <div id="journalLeft">
                            <button className="switchJournalPost" onClick={() => window.location.href = `/post/${getPrevPostId()}`}><IoMdArrowRoundBack className="arrowButton"/></button>
                        </div>

                        <div id="journalMiddle">
                            <div id='closeButtonDiv'>
                                <button id="closeButton" onClick={() => window.location.href = '/dashboard'}>x</button>
                            </div>
                            
                            {loading ? (
                                <h2>Loading</h2>
                            ) : !loading && journalData && journalDetailsData.data !== undefined ? (
                                <>
                                    <img src={require(`../../images/${journalDetailsData.data.mood}Mood.png`).default} id="expandJournalMood" alt="Journal mood icon"/>
                                    <h2 id="expandJournalTitle">{journalDetailsData.data.title}</h2>
                                    {formatDate(journalDetailsData.data.createdAt)}
                                    <p className="expandJournalBodyText">{journalDetailsData.data.bodyText}</p>
                                    
                                    <h2 id="whatHappenedTitle">What happened on this day:</h2>
                                    <DisplayActivities activities={journalDetailsData.data.activities}/>

                                    <div className="deleteDiv">
                                        <button className="expandJournalButtons" onClick={(e) => {confirmDeletePost(e, journalDetailsData._id)}}><BiTrash className="expandJournalIcons"/>Delete Post</button>
                                        <button className="expandJournalButtons" ><HiOutlinePencilAlt className="expandJournalIcons"/>Edit Post</button>
                                    </div>
                                </>
                            ): <h1>Could not load post</h1>}
                        </div>

                        <div id="journalRight">
                            <button className="switchJournalPost" onClick={() => window.location.href = `/post/${getNextPostId()}`}><IoMdArrowRoundForward className="arrowButton"/></button>
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
        journalData: state.journal.journals,
        ownPropsMessage: ownProps
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchJournalDetails: () => dispatch(fetchJournalDetails()),
        setJournalId: currentId => dispatch(setJournalId(currentId)),
        fetchJournals: () => dispatch(fetchJournals()),
        getJournalId: () => dispatch(getJournalId()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ExpandJournal)

