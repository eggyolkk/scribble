import NavBar from '../../components/navBar/navBar'
import WritePost from '../../components/writePost/writePost'
import ChooseMood from '../../components/chooseMood/chooseMood'
import CreateJournalLogic from "./createJournalLogic";
import TopUserBar from "../../components/topUserBar/topUserBar";
import './createJournalPageStyle.scss'

const CreateJournalPage = () => {
    const { mood, setMood, showComponent, setShowComponent, activities, setActivity } = CreateJournalLogic()

    return (
        <div className="pageBody">
            <TopUserBar />

            <div id="createJournalContainer">
                <div id="createJournalFlexLeft">
                    <NavBar />
                </div>

                <div id="createJournalFlexRight">
                    <div className="topRow">
                        <div className="topRowFlexTop">
                            <h1 className="headerH1">Create new post</h1>
                        </div>
                    </div>

                    {showComponent === "moodComponent" ? 
                        <ChooseMood mood={mood} setMood={setMood} setShowComponent={setShowComponent} />
                     : 
                        <WritePost activitiesProps={activities} setActivityProps={setActivity} mood={mood} setShowComponent={setShowComponent}/>
                    }
                </div>
            </div>
        </div>
    );
};

export default CreateJournalPage;
