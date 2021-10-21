import { useState } from "react";
import NavBar from '../../components/navBar/navBar'
import WritePost from '../../components/writePost/writePost'
import ChooseMood from '../../components/chooseMood/chooseMood'
import CreateJournalLogic from "./createJournalLogic";
import './createJournalPageStyle.scss'

const CreateJournalPage = () => {
    const { mood, setMood, showComponent, setShowComponent } = CreateJournalLogic()


    return (
        <div id="createJournalBody">
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
                        <ChooseMood mood={mood} setMood={setMood} setShowComponent={setShowComponent}/>
                     : 
                        <WritePost mood={mood}/>
                    }
                    
                </div>
                
            </div>
            
        </div>
    );
};

export default CreateJournalPage;
