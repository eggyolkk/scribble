import { React } from "react";
import createJournalLogic from "./createJournalLogic";
import { UserContext } from '../../App'

const CreateJournalPage = () => {
    const { journal, dispatch, postJournal } = createJournalLogic();

    return (
        <div>
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

            <button onClick={ postJournal }>Create</button>
        </div>
    );
};

export default CreateJournalPage;
