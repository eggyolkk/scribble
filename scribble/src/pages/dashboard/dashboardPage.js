import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JournalCard from "./components/journalCard/journalCard";
import NavBar from '../../components/navBar/navBar'
import DeletePostModal from "../../components/deletePostModal/deletePostModal";
import Searchbar from "./components/searchbar/searchbar";
import SearchedJournalCards from "../expandJournal/components/searchedJournalCards/searchedJournalCards";
import axios from 'axios'
import { API } from "../../utilities/utilities";
import './dashboardPageStyle.scss'

function DashboardPage(props) {
    const propsQuery = props.match.params.query
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [darkenBg, setDarkenBg] = useState(false)
    const [idPostToBeDeleted, setIdPostToBeDeleted] = useState('')

    // set the document title on initial page render
    useEffect(() => {
        if (propsQuery) {
            document.title = `${propsQuery} - scribble!`
        }
        else {
            document.title = 'Dashboard'
        }
        
    }, [propsQuery])

    return (
        <div className="pageBody">
            {showDeleteModal ? <DeletePostModal setShowDeleteModal={setShowDeleteModal} setDarkenBg={setDarkenBg} postId={idPostToBeDeleted}/> : null}
            
            <div className={darkenBg ? 'modalBg' : 'modalBgNone'}></div>

            <div id="dashboardContainer">
                <div className="dashboardFlexLeft">
                    <NavBar />
                </div>

                <div id="dashboardFlexRight">
                    <div className="dashboardContent">
                        
                        <div className="topRow">
                            <div className="topRowFlexTop">
                                <div>
                                    <h1 className="headerH1">Dashboard</h1>
                                    <h2 id="welcomeBackLabel">Welcome back {window.sessionStorage.getItem('displayName')}!</h2>
                                </div>
                                
                                <Link to='/create'>
                                    <button id="createButton">+ CREATE NEW POST</button>
                                </Link>
                            </div>
                                
                            <div id="topRowFlexBottom">
                                <Searchbar />
                            </div>
                        </div>

                        <div id="journalCardsContainer">
                            {propsQuery ? 
                                <>
                                <p id="searchResultsLabel">Displaying journal posts with "{propsQuery}"</p>
                                
                                <SearchedJournalCards setDarkenBg={setDarkenBg} setShowDeleteModal={setShowDeleteModal} setIdPostToBeDeleted={setIdPostToBeDeleted} propsQuery={propsQuery}/>
                                </>
                                :
                                <>
                                <p id="searchResultsLabel">Displaying all journal posts</p>
                                <JournalCard setDarkenBg={setDarkenBg} setShowDeleteModal={setShowDeleteModal} setIdPostToBeDeleted={setIdPostToBeDeleted} />
                                </>
                            }
                            
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default DashboardPage;
