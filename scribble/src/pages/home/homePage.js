import React from "react";
import { Link } from "react-router-dom";
import './homePageStyle.scss'

const HomePage = () => {
    return (
        <div id="homePageBody">

            <div id="homeFlexLeft">
                <div id="loginContainer">
                    
                    <h1 className="scribbleTitle">scribble!</h1>
                    <h2 id="scribbleSubtitle">Your personal journal and mood tracker</h2>
                    
                    <Link to='/dashboard'>
                        <button id="loginButton">Login</button>
                    </Link>

                </div>
            </div>     

            <div id="homeFlexRight">
            </div>       

        </div>
    );
};

export default HomePage;
