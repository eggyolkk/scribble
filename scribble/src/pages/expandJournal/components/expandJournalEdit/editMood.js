import { useEffect, useState } from 'react'
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io'

const EditMood = (props) => {
    const {journalDetailsData, setEditedMood, editedMood} = props
    const moodArray = ['ecstatic', 'happy', 'okay', 'sad', 'angry', 'anxious']
    const [indexOfCurrentMood, setIndexOfCurrentMood] = useState(0)

    // on initial page render, set the index of the current mood
    useEffect(() => {
        for (let i=0; i < moodArray.length; i++) {
            setIndexOfCurrentMood(moodArray.indexOf(journalDetailsData.data.mood))
        }
    },[])

    // change the current mood 
    useEffect(() => {
        setEditedMood(moodArray[indexOfCurrentMood])
    }, [indexOfCurrentMood])

    // get the index of the previous mood
    const setPrevMoodIndex = () => {
        if (indexOfCurrentMood !== 0) {
            setIndexOfCurrentMood(prevState => prevState - 1)
        } else {
            setIndexOfCurrentMood(moodArray.length - 1)
        }
    }

    // get the index of the next mood
    const setNextMoodIndex = () => {
        if (indexOfCurrentMood < moodArray.length - 1) {
            setIndexOfCurrentMood(prevState => prevState + 1)
        } else {
            setIndexOfCurrentMood(0)
        }
    }

    return(
        <div id="editMoodContainer">
            <button className="expandJounalArrowButtons" onClick={() => {setPrevMoodIndex()}}>
                <IoMdArrowRoundBack className="arrowButton"/>
            </button>

            <img src={require(`../../../../images/${moodArray[indexOfCurrentMood]}Mood.png`).default} id="editMoodIcon" alt="Journal mood icon"/>

            <button className="expandJounalArrowButtons" onClick={() => {setNextMoodIndex()}}>
                <IoMdArrowRoundForward className="arrowButton"/>
            </button>
        </div>
    )
}

export default EditMood