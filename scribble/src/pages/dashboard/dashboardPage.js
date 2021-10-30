import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import JournalCard from "../../components/journalCard/journalCard";
import NavBar from '../../components/navBar/navBar'
import DeletePostModal from "../../components/deletePostModal/deletePostModal";
import './dashboardPageStyle.scss'

function DashboardPage(props) {
    const [showDeleteModal, setShowDeleteModal] = useState(false)
    const [darkenBg, setDarkenBg] = useState(false)
    const [idPostToBeDeleted, setIdPostToBeDeleted] = useState('')

    // set the documen title to dashboard on initial page render
    useEffect(() => {
        document.title = "Dashboard"
    }, [])

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
                            <JournalCard setDarkenBg={setDarkenBg} setShowDeleteModal={setShowDeleteModal} setIdPostToBeDeleted={setIdPostToBeDeleted}/>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default DashboardPage;
