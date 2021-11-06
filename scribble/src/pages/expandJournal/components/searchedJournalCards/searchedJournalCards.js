import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchJournals } from '../../../../redux/journal/journalActions'
import { BiTrash } from 'react-icons/bi'
import { HiOutlinePencilAlt } from 'react-icons/hi'
import axios from 'axios'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'
import { API } from '../../../../utilities/utilities'

const SearchedJournalCards = ({ fetchJournals, setDarkenBg, setShowDeleteModal, setIdPostToBeDeleted, propsQuery }) => {
    const [emptyPosts, setEmptyPosts] = useState(true)
    const [journalData, setJournalData] = useState([])
    const [loading, setLoading] = useState(false)

    const selectedTheme = window.sessionStorage.getItem('theme')
    
    // fetch journals on initial page render
    useEffect(() => {
        if (propsQuery) fetchSearchedJournals()
    }, [])

    // fetch journals by search query
    const fetchSearchedJournals = async () => {
        // get user id
        let userId = ''
        const getUserIdHeader = { headers: { 'Content-Type': 'application/json' }}
        await axios.get(`${API}/auth/get_user_id`, {getUserIdHeader, withCredentials: true})
        .then(response => userId = response.data.user_id)

        // fetch searched journals that belong to the user
        setLoading(true)
        const postHeader = { headers: { 'Content-Type': 'application/json', 'user_id': 'hello' }}
        await axios.get(`${API}/journals/search/query?search=${propsQuery}&userId=${userId}`, {postHeader, withCredentials: true})
        .then(response => {
            setJournalData(response.data.docs)
            setLoading(false)
        })
    }

    // format the date journal was created to a DD/MM/YYYY format
    const formatDate = (journalDate) => {
        const year = journalDate.slice(0, 4)
        const month = journalDate.slice(5, 7)
        const day = journalDate.slice(8, 10)

        return <p className="cardJournalBodyText cardJournalDate">{day}/{month}/{year}</p>
    }

    // show popup modal when delete button is clicked, darken bg and set the id of the post to be deleted
    const confirmDeletePost = (e, journalId) => {
        // ignore the parent div onclick (i.e. prevent loading the post details page when delete button is clicked)
        e.stopPropagation()
        setShowDeleteModal(true)
        setDarkenBg(true)
        setIdPostToBeDeleted(journalId)
    }

    // while fetching journal data, show loading. after loading finished, show journal cards
    return loading ? (

        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>

        ) : !loading && journalData && journalData.length !== 0 && emptyPosts ? (

        <div className="journalCardsDiv">
            {journalData.slice(0).reverse().map((journal, index) => 
            <div key={index} className={selectedTheme === 'light' ? "journalCards" : "journalCardsDark"} onClick={() => window.location.href = `/post/${journal._id}`}>
                <img src={require(`../../../../images/${journal.mood}Mood.png`).default} className="moodIcon" alt="Journal mood icon"/>
                
                {journal.title.length < 25 ? 
                    <h3 className={selectedTheme === 'light' ? "cardJournalTitle" : "cardJournalTitleDark"}>{journal.title}</h3> 
                    :
                    <h3 className={selectedTheme === 'light' ? "cardJournalTitle" : "cardJournalTitleDark"}>{journal.title.slice(0, 25)}...</h3> 
                }

                {journal.bodyText.length < 40 ? (
                    <p className={selectedTheme === 'light' ? "cardJournalBodyText" : "cardJournalBodyTextDark"}>{journal.bodyText}</p>
                    ) : (
                    <p className={selectedTheme === 'light' ? "cardJournalBodyText" : "cardJournalBodyTextDark"}>{journal.bodyText.slice(0, 40)}...</p>
                )}

                {formatDate(journal.createdAt.slice(0, 10))}

                <div className="deleteDiv">
                    <button className={selectedTheme === 'light' ? "postActionButtons" : "postActionButtonsDark"} onClick={(e) => {confirmDeletePost(e, journal._id)}}><BiTrash className="postActionReactIcons"/></button>
                    <button className={selectedTheme === 'light' ? "postActionButtons" : "postActionButtonsDark"} ><HiOutlinePencilAlt className="postActionReactIcons"/></button>
                </div>
            </div>
            )}
            
        </div> 

    ) : (

        <div id="emptyJournalDiv">
            <h2 id="noPostsH2">No posts to show</h2>
            <p id="noPostsP">Create a new post to see it on your dashboard</p>
            <img src={require(`../../../../images/happyMood.png`).default} id="nothingToShowIcon" alt="scribble icon"/>
        </div>

    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        setDarkenBg: ownProps.setDarkenBg,
        setShowDeleteModal: ownProps.setShowDeleteModal,
        setIdPostToBeDeleted: ownProps.setIdPostToBeDeleted,
        propsQuery: ownProps.propsQuery
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
)(SearchedJournalCards)
