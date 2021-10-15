import { React } from "react";
import { Link } from "react-router-dom";
import DashboardLogic from "./dashboardLogic"
import JournalCardLogic from "../../components/journalCard/journalCardLogic";
import NavBar from '../../components/navBar/navBar'
import './dashboardPageStyle.scss'

function DashboardPage() {

    return (
        <div id="dashboardPageBody">
            <div id="dashboardContainer">
                <div id="dashboardFlexLeft">
                    <NavBar />
                </div>

                <div id="dashboardFlexRight">
                    <div id="topRow">
                        <div id="topRowFlexTop">
                            <h1 id="dashboardWelcome">Dashboard</h1>
                            <Link to='/create'>
                                <button id="createButton">+ CREATE NEW POST</button>
                            </Link>
                        </div>
                            
                        <div id="topRowFlexBottom">
                            <input
                                id="dashboardSearchBar"
                                type='text'
                                placeholder='Search in your posts...'
                            ></input>
                        </div>
                    </div>

                    <div id="journalCardsContainer">
                        <JournalCardLogic />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;
