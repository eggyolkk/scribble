import React from 'react'
import CreateJournalLogic from '../../pages/createJournal/createJournalLogic'
import ChooseActivity from '../chooseActivity/chooseActivity'
import './writePostStyle.scss'


const WritePost = (props) => {
    const { journal, dispatch, postJournal } = CreateJournalLogic();
    const { mood } = props

    return (
        <div id="writePostContainer">
            <ChooseActivity />

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

                <button id="postButton" onClick={ postJournal }>Create</button>
            </div>
        </div>
    )
}

export default WritePost
