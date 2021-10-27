import React from "react";
import Login from "../../components/login/login";
import './homePageStyle.scss'

const HomePage = () => {
    return (
        <div id="homePageBody">

            <div id="homeFlexLeft">
                <div id="homeContainer">
                    
                    <h1 className="scribbleTitle">scribble!</h1>
                    <h2 id="scribbleSubtitle">Your personal journal and mood tracker</h2>
                    
                    <Login />

                </div>
            </div>     

            <div id="homeFlexRight">
            </div>       

        </div>
    );
};

export default HomePage;
