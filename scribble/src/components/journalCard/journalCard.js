import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { fetchJournals } from '../../redux/journal/journalActions'
import axios from 'axios'
import './journalCardStyle.scss'

const JournalCard = ({ journalData, fetchJournals }) => {
    // fetch journals on initial page render
    useEffect(() => {
        fetchJournals()
    }, [])

    // delete a journal post
    const delete_journal_post = (e, journalId) => {
        // ignore the parent div onclick (i.e. prevent loading the post details page when delete button is clicked)
        e.stopPropagation()
        
        const deleteHeader = { headers: { 'Content-Type': 'application/json' }}
        axios.delete(`http://localhost:5000/journals/${journalId}`, {deleteHeader}, {crossDomain: true})
        .then(response => window.location.href = response.data.redirect)
    }

    // while fetching journal data, show loading. after loading finished, show journal cards
    return journalData.loading ? (
        <h2>Loading</h2>
    ) : journalData.error ? (
        <h2>{journalData.error}</h2>
    ) : (
        <div id="journalCardsDiv">
            {journalData.slice(0).reverse().map((journal, index) => 
            <div key={index} className="journalCards" onClick={() => window.location.href = `/post/${journal._id}`}>
                
                <img src={require('../../images/happyMood.png').default} className="moodIcon" alt="Journal mood icon"/>
                
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

                <button onClick={(e) => delete_journal_post(e, journal._id)}>Delete</button>
            </div>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        journalData: state.journal.journals
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
