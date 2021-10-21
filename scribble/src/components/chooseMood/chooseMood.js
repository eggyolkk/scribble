import React from 'react'
import './chooseMoodStyle.scss'

const ChooseMood = (props) => {
    const { mood, setMood, setShowComponent } = props

    return (
        <div id="chooseMoodContainer">
            <div>
                <h2 class="createJournalH2">How would you describe your mood today?</h2>
            </div>
            
            <div id="moodIconsContainer">
                <div className="individualMoodContainer">
                    <img 
                        src={require('../../images/amazingMood.png').default} 
                        onClick={() => setMood('ecstatic')} 
                        className="chooseMoodIcon"
                        id={mood === "ecstatic" ? "activeEcstaticMood" : "ecstaticMood"} 
                        alt="Feeling amazing icon"
                    />
                    <p id="ecstaticLabel">Ecstatic</p>
                </div>
                
                <div className="individualMoodContainer">
                    <img 
                        src={require('../../images/happyMood.png').default} 
                        onClick={() => setMood('happy')} 
                        className="chooseMoodIcon" 
                        id={mood === "happy" ? "activeHappyMood" : "happyMood"} 
                        alt="Feeling happy icon"
                    />
                    <p id="happyLabel">Happy</p>
                </div>
                
                <div className="individualMoodContainer">
                    <img 
                        src={require('../../images/okayMood.png').default} 
                        onClick={() => setMood('okay')} 
                        className="chooseMoodIcon" 
                        id={mood === "okay" ? "activeOkayMood" : "okayMood"} 
                        alt="Feeling okay icon"
                    />
                    <p id="okayLabel">Okay</p>
                </div>
                

                <div className="individualMoodContainer">
                    <img 
                        src={require('../../images/sadMood.png').default} 
                        onClick={() => setMood('sad')} 
                        className="chooseMoodIcon" 
                        id={mood === "sad" ? "activeSadMood" : "sadMood"} 
                        alt="Feeling sad icon"
                    />
                    <p id="sadLabel">Sad</p>
                </div>
                

                <div className="individualMoodContainer">
                    <img 
                        src={require('../../images/angryMood.png').default} 
                        onClick={() => setMood('angry')} 
                        className="chooseMoodIcon" 
                        id={mood === "angry" ? "activeAngryMood" : "angryMood"} 
                        alt="Feeling angry icon"
                    />
                    <p id="angryLabel">Angry</p>
                </div>
                

                <div className="individualMoodContainer">
                    <img 
                        src={require('../../images/anxiousMood.png').default} 
                        onClick={() => setMood('anxious')} 
                        className="chooseMoodIcon" 
                        id={mood === "anxious" ? "activeAnxiousMood" : "anxiousMood"} 
                        alt="Feeling anxious icon"
                    />
                    <p id="anxiousLabel">Anxious</p>
                </div>
                
            </div>

            <button id="continueButton" onClick={() => {setShowComponent('writePostComponent')}}>Continue</button>
        </div>
    )
}

export default ChooseMood
