import { useState, useReducer, useEffect } from "react";
import convertActivitiesArray from "../../helperFunctions/convertActivitiesArray";
import axios from 'axios';
import NavBar from '../../components/navBar/navBar'
import WritePost from './components/writePost/writePost'
import ChooseMood from './components/chooseMood/chooseMood'
import './createJournalPageStyle.scss'
import { API } from "../../utilities/utilities";

const CreateJournal = () => {
    const [mood, setMood] = useState('')
    const [showComponent, setShowComponent] = useState('moodComponent')
    const [activities, setActivity] = useState([])

    const selectedTheme = window.sessionStorage.getItem('theme')

    // set the document title on initial page render
    useEffect(() => {
        document.title = 'Create new post'

        // set theme
        if (window.sessionStorage.getItem('theme') === 'dark') {
            document.body.classList.add('darkBody')
        }
        else {
            document.body.classList.remove('darkBody')
        }
    }, [])

    // handle the onchange functions for the journal title and body text state variables
    const initialState = {
        title: "",
        bodyText: "",
    };
    const entryReducer = (state, action) => {
        switch (action.type) {
            case "TITLE_ONCHANGE":
                return { ...state, title: action.payload }
            case "BODYTEXT_ONCHANGE":
                return { ...state, bodyText: action.payload }
            default:
                return state
        }
    };
    const [ journal, dispatch ] = useReducer(entryReducer, initialState);

    // post the journal entry to the database
    const postJournal = async(selectedMood) => {
        if (journal.title.length !== 0 && journal.bodyText.length !== 0) {
            const activitiesString = convertActivitiesArray(activities)
            const postHeader = { headers: { 'Content-Type': 'application/json' }}
            
            let userId = ''
            await axios.get(`${API}/auth/get_user_id`, {postHeader, withCredentials: true})
            .then(response => userId = response.data.user_id)

            const journalJSON = JSON.stringify({ title: journal.title, bodyText: journal.bodyText, mood: selectedMood, activities: activitiesString, userId: userId })
            
            await axios.post(`${API}/journals`, journalJSON, {postHeader, withCredentials: true})
            .then(response => window.location.href = response.data.redirect)
            .catch(error => console.log(error))
        }
    }

    return (
        <div className="pageBody">

            <div id="createJournalContainer">
                <div className={selectedTheme === 'light' ? "dashboardFlexLeft" : "dashboardFlexLeftDark"}>
                    <NavBar />
                </div>

                <div id="createJournalFlexRight">
                    
                    <div className="dashboardContent">
                        <div className="topRow">
                            <div className="topRowFlexTop">
                                <h1 className={selectedTheme === 'light' ? "headerH1" : "headerH1Dark"}>Create new post</h1>
                            </div>
                        </div>

                        {showComponent === "moodComponent" ? 
                            <ChooseMood mood={mood} setMood={setMood} setShowComponent={setShowComponent} />
                        : 
                            <WritePost activities={activities} setActivity={setActivity} mood={mood} setShowComponent={setShowComponent} journal={journal} postJournal={postJournal} dispatch={dispatch}/>
                        }
                    </div>
                    
                </div>
            </div>
        </div>
    )
};

export default CreateJournal