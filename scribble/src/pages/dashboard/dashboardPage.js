import { React } from "react";
import { Link } from "react-router-dom";
import JournalCard from "../../components/journalCard/journalCard";
import NavBar from '../../components/navBar/navBar'
import TopUserBar from "../../components/topUserBar/topUserBar";
import './dashboardPageStyle.scss'

function DashboardPage(props) {
    console.log(props.message, "data", props.data)
    return (
        <div className="pageBody">
            <TopUserBar />

            <div id="dashboardContainer">
                <div id="dashboardFlexLeft">
                    <NavBar />
                </div>

                <div id="dashboardFlexRight">
                    <div className="topRow">
                        <div className="topRowFlexTop">
                            <h1 className="headerH1">Dashboard</h1>
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
                        <JournalCard />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardPage;
