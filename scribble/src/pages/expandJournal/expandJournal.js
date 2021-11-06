import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchJournals } from '../../redux/journal/journalActions'
import { fetchJournalDetails } from '../../redux/journalDetails/journalDetailsActions'
import { setJournalId, getJournalId } from '../../redux/journalId/journalIdActions'
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io'
import NavBar from '../../components/navBar/navBar'
import DeletePostModal from '../../components/deletePostModal/deletePostModal'
import ExpandJournalDisplay from './components/expandJournalDisplay/expandJournalDisplay'
import ExpandJournalEdit from './components/expandJournalEdit/expandJournalEdit'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import './expandJournalStyle.scss'

const ExpandJournal = ({journalDetailsData, ownPropsMessage, journalId, fetchJournalDetails, setJournalId, getJournalId, journalData, fetchJournals}) => {
    const [currentId, setCurrentId] = useState('')
    const [loading, setLoading] = useState(false)
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [darkenBg, setDarkenBg] = useState(false)
    const [showEditComponent, setShowEditComponent] = useState(false)

    // set theme on initial render
    useEffect(() => {
        // set theme
        if (window.sessionStorage.getItem('theme') === 'dark') {
            document.body.classList.add('darkBody')
        }
        else {
            document.body.classList.remove('darkBody')
        }
    }, [])

    // fetch journal details by id and all journals on initial page render 
    useEffect(() => {
        fetchJournalId()
    }, [currentId])

    // get all journals and the id of the journal from the current url
    const fetchJournalId = async () => {
        const windowUrl = window.location.href
        const indexOfId = windowUrl.indexOf('/post/') + 6

        await setCurrentId(windowUrl.slice(indexOfId))
        await setJournalId(currentId)
        await fetchJournals()
        await fetchJournalDetails()
    }

    // set document title after data has loaded
    const setDocumentTitle = (title) => {
        document.title = `${title} - scribble!`
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

            <div id="expandJournalContainer">
                <div className="dashboardFlexLeft">
                    <NavBar />
                </div>

                <div id="expandJournalFlexRight">

                    <div className="dashboardContent">
                        <div id="journalContainer">
                            <div id="journalLeft">
                                <button className="expandJounalArrowButtons" onClick={() => window.location.href = `/post/${getPrevPostId()}`}>
                                    <IoMdArrowRoundBack className="arrowButton"/>
                                </button>
                            </div>

                            <div id="journalMiddle">
                                <div id='closeButtonDiv'>
                                    <button id="closeButton" onClick={() => window.location.href = '/dashboard'}>x</button>
                                </div>
                                
                                {loading ? 
                                    <Box sx={{ display: 'flex' }}>
                                        <CircularProgress />
                                    </Box>

                                : !loading && journalData && journalDetailsData.data !== undefined && !showEditComponent ? 
                                    <ExpandJournalDisplay setDocumentTitle={setDocumentTitle} formatDate={formatDate} confirmDeletePost={confirmDeletePost} journalDetailsData={journalDetailsData} setShowEditComponent={setShowEditComponent}/>
                                
                                : !loading && journalData && journalDetailsData.data !== undefined && showEditComponent ? 
                                    <ExpandJournalEdit journalDetailsData={journalDetailsData} setShowEditComponent={setShowEditComponent} setDocumentTitle={setDocumentTitle}/>

                                : 
                                    <Box sx={{ display: 'flex' }}>
                                        <CircularProgress />
                                    </Box>

                                }
                            </div>

                            <div id="journalRight">
                                <button className="expandJounalArrowButtons" onClick={() => window.location.href = `/post/${getNextPostId()}`}>
                                    <IoMdArrowRoundForward className="arrowButton"/>
                                </button>
                            </div>
                            
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

