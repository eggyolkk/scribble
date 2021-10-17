import React from 'react'
import './chooseMoodStyle.scss'

const ChooseMood = () => {
    return (
        <div id="chooseMoodContainer">
            <div>
                <h2 id="createJournalH2">How are you feeling today?</h2>
            </div>
            
            <div id="moodIconsContainer">
                <img src={require('../../images/amazingMood.png').default} className="chooseMoodIcon"/>
                <img src={require('../../images/happyMood.png').default} className="chooseMoodIcon"/>
                <img src={require('../../images/okayMood.png').default} className="chooseMoodIcon"/>
                <img src={require('../../images/sadMood.png').default} className="chooseMoodIcon"/>
                <img src={require('../../images/madMood.png').default} className="chooseMoodIcon"/>
                <img src={require('../../images/anxiousMood.png').default} className="chooseMoodIcon"/>
            </div>
            
        </div>
    )
}

export default ChooseMood
