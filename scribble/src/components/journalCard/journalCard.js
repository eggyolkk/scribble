import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchJournals } from '../../redux/journal/journalActions'
import './journalCardStyle.scss'
import { BiTrash } from 'react-icons/bi'
import { HiOutlinePencilAlt } from 'react-icons/hi'

const JournalCard = ({ journalData, fetchJournals, setDarkenBg, setShowDeleteModal, setIdPostToBeDeleted }) => {
    const [emptyPosts, setEmptyPosts] = useState(true)
    
    // fetch journals on initial page render
    useEffect(() => {
        fetchJournals()
        if (journalData.length > 0) {
            setEmptyPosts(false)
        } else {
            setEmptyPosts(true)
        }
    }, [fetchJournals])

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
    return journalData.loading ? (
        <h2>Loading</h2>
    ) : journalData.error ? (
        <h2>{journalData.error}</h2>
    ) : !journalData.error && journalData.length !== 0 && emptyPosts ? (
        <div id="journalCardsDiv">
            {journalData.slice(0).reverse().map((journal, index) => 
            <div key={index} className="journalCards" onClick={() => window.location.href = `/post/${journal._id}`}>
                <img src={require(`../../images/${journal.mood}Mood.png`).default} className="moodIcon" alt="Journal mood icon"/>
                
                {journal.title.length < 25 ? 
                    <h3 className="cardJournalTitle">{journal.title}</h3> 
                    :
                    <h3 className="cardJournalTitle">{journal.title.slice(0, 25)}...</h3> 
                }

                {journal.bodyText.length < 40 ? (
                    <p className="cardJournalBodyText">{journal.bodyText}</p>
                    ) : (
                    <p className="cardJournalBodyText">{journal.bodyText.slice(0, 40)}...</p>
                )}

                {formatDate(journal.createdAt.slice(0, 10))}

                <div className="deleteDiv">
                    <button className="postActionButtons" onClick={(e) => {confirmDeletePost(e, journal._id)}}><BiTrash className="postActionReactIcons"/></button>
                    <button className="postActionButtons" ><HiOutlinePencilAlt className="postActionReactIcons"/></button>
                </div>
            </div>
            )}
            
        </div> 
    ) : (
        <div id="emptyJournalDiv">
            <h2 id="noPostsH2">No posts to show</h2>
            
            <p id="noPostsP">Create a new post to see it on your dashboard</p>
            <img src={require(`../../images/happyMood.png`).default} id="nothingToShowIcon" alt="scribble icon"/>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
        journalData: state.journal.journals,
        setDarkenBg: ownProps.setDarkenBg,
        setShowDeleteModal: ownProps.setShowDeleteModal,
        setIdPostToBeDeleted: ownProps.setIdPostToBeDeleted
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
)(JournalCard)
