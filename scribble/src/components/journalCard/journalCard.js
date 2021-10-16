import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchJournalsFailure } from '../../redux/journal/journalActions'
import { fetchJournals } from '../../redux/journal/journalActions'
import './journalCardStyle.scss'

const JournalCard = ({ journalData, fetchJournals }) => {
    /* fetch journals on initial page render */
    useEffect(() => {
        fetchJournals()
    }, [])

    /* while fetching journal data, show loading. after loading finished, show journal cards */
    return journalData.loading ? (
        <h2>Loading</h2>
    ) : journalData.error ? (
        <h2>{journalData.error}</h2>
    ) : (
        <div id="journalCardsDiv">
            {journalData.slice(0).reverse().map((journal, index) => 
            <div key={index} className="journalCards">
                
                <img src={require('../../images/happyMood.png').default} className="moodIcon"/>
                
                <h3 className="cardJournalTitle">{journal.title}</h3>
                
                {journal.bodyText.length < 40 ? (
                <p className="cardJournalBodyText">{journal.bodyText}</p>
                ) : (
                <p className="cardJournalBodyText">{journal.bodyText.slice(0, 40)}...</p>
                )}
                
                </div>
            )}
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
)(JournalCard)
