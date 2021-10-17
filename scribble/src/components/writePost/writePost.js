import React from 'react'
import CreateJournalLogic from '../../pages/createJournal/createJournalLogic'

const WritePost = () => {
    const { journal, dispatch, postJournal } = CreateJournalLogic();

    return (
        <>
            <input
                type='text'
                placeholder='Title'
                value={journal.title}
                onChange={(e) => dispatch({
                    type: "TITLE_ONCHANGE",
                    payload: e.target.value,
                })}
            ></input>

            <textarea
                name='bodyText'
                placeholder='Write your entry here...'
                value={journal.bodyText}
                onChange={(e) => dispatch({
                    type: "BODYTEXT_ONCHANGE",
                    payload: e.target.value,
                })}
            ></textarea>
        </>
    )
}

export default WritePost
