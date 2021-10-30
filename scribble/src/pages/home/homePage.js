import { useState, useEffect } from "react";
import Login from "../../components/login/login";
import Register from "../../components/register/register";
import './homePageStyle.scss'

const HomePage = () => {
    const [showRegister, setShowRegister] = useState(false)

    useEffect(() => {
        document.title = 'scribble!'
    })

    return (
        <div id="homePageBody">
            
            <div id="homeContainer">
                <div id="homeContainerContent">
                    <img src={require('../../images/happyMood.png').default} id="homeIcon" alt="scribble icon" />

                    <h1 className="scribbleTitle">scribble!</h1>
                    <h2 id="scribbleSubtitle">Your personal journal and mood tracker</h2>

                    {showRegister ? 
                    <Register setShowRegister={setShowRegister}/> :
                    <Login setShowRegister={setShowRegister}/>  
                    }
                </div>
                
            </div>

        </div>
    );
};

export default HomePage;
