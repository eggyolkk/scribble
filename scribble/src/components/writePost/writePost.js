import React from 'react'
import CreateJournalLogic from '../../pages/createJournal/createJournalLogic'
import ChooseActivity from '../chooseActivity/chooseActivity'
import './writePostStyle.scss'
import { MdOutlineArrowBack } from 'react-icons/md'

const WritePost = (props) => {
    const { journal, dispatch, postJournal, activities, setActivity } = CreateJournalLogic();
    const { mood, setShowComponent } = props

    return (
        <div id="writePostContainer">
            <button id="backButton" onClick={() => {setShowComponent('moodComponent')}}><MdOutlineArrowBack id="backButtonReactIcon"/></button>
            <ChooseActivity activities={activities} setActivity={setActivity} />

            <div id="writePostFlexRight">
                <input
                    type='text'
                    placeholder='Title'
                    id="titleInputField"
                    value={journal.title}
                    onChange={(e) => dispatch({
                        type: "TITLE_ONCHANGE",
                        payload: e.target.value,
                    })}>
                </input>

                <textarea
                    name='bodyText'
                    placeholder='Write your entry here...'
                    id="bodyTextInputField"
                    value={journal.bodyText}
                    onChange={(e) => dispatch({
                        type: "BODYTEXT_ONCHANGE",
                        payload: e.target.value,
                    })}>
                </textarea>

                <button id="postButton" onClick={() => {postJournal(mood)}}>Create</button>
            </div>
        </div>
    )
}

export default WritePost
