import React from 'react'
import ChooseActivity from '../chooseActivity/chooseActivity'
import './writePostStyle.scss'
import { MdOutlineArrowBack } from 'react-icons/md'

const WritePost = (props) => {
    const { mood, setShowComponent, journal, dispatch, postJournal, activities, setActivity } = props
    const selectedTheme = window.sessionStorage.getItem('theme')

    return (
        <div id={selectedTheme === 'light' ? "writePostContainer" : "writePostContainerDark"}>
            <button id="backButton" onClick={() => {setShowComponent('moodComponent')}}><MdOutlineArrowBack id="backButtonReactIcon"/></button>
            <ChooseActivity activities={activities} setActivity={setActivity} />

            <div id="writePostFlexRight">
                <input
                    type='text'
                    placeholder='Title'
                    id={selectedTheme === 'light' ? "titleInputField" : "titleInputFieldDark"}
                    value={journal.title}
                    onChange={(e) => dispatch({
                        type: "TITLE_ONCHANGE",
                        payload: e.target.value,
                    })}>
                </input>

                <textarea
                    name='bodyText'
                    placeholder='Write your entry here...'
                    id={selectedTheme === 'light' ? "bodyTextInputField" : "bodyTextInputFieldDark"}
                    value={journal.bodyText}
                    onChange={(e) => dispatch({
                        type: "BODYTEXT_ONCHANGE",
                        payload: e.target.value,
                    })}>
                </textarea>

                <button id={selectedTheme === 'light' ? "postButton" : "postButtonDark"} onClick={() => {postJournal(mood)}}>Create</button>
            </div>
        </div>
    )
}

export default WritePost
