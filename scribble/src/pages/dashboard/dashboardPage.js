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
    const [theme, setTheme] = useState('')

    const selectedTheme = window.sessionStorage.getItem('theme')

    // get user details on initial page rener
    useEffect(() => {
        getUserDetails()
    }, [])

    // handle theme
    useEffect(() => {
        if (!selectedTheme) {
            window.sessionStorage.setItem('theme', theme)
        }

        // set theme
        if (theme === 'dark') {
            document.body.classList.add('darkBody')
        }
        else {
            document.body.classList.remove('darkBody')
        }
    }, [theme])

    // set the document title on initial page render
    useEffect(() => {
        if (propsQuery) {
            document.title = `${propsQuery} - scribble!`
        }
        else {
            document.title = 'Dashboard'
        }
    }, [propsQuery])

    // fetch user's profile details
    const getUserDetails = async () => {
        // get user id
        let userId = ''
        const getHeader = { headers: { 'Content-Type': 'application/json' }}
        await axios.get(`${API}/auth/get_user_id`, {getHeader, withCredentials: true})
        .then(response => userId = response.data.user_id)

        // get details
        await axios.get(`${API}/user/query?userId=${userId}`, {getHeader, withCredentials: true})
        .then(response => {
            window.sessionStorage.setItem('displayName', response.data.displayName)
            window.sessionStorage.setItem('avatar', response.data.avatar)
            window.sessionStorage.setItem('theme', response.data.theme)
            setTheme(response.data.theme)
        })
        .catch(error => console.log(error))
    }

    return (
        <div className="pageBody">
            {theme ? (
                <>
                {showDeleteModal ? <DeletePostModal setShowDeleteModal={setShowDeleteModal} setDarkenBg={setDarkenBg} postId={idPostToBeDeleted}/> : null}
            
                <div className={darkenBg ? 'modalBg' : 'modalBgNone'}></div>
    
                <div id="dashboardContainer">
                    <div className={selectedTheme === 'light' ? "dashboardFlexLeft" : "dashboardFlexLeftDark"}>
                        <NavBar />
                    </div>
    
                    <div id="dashboardFlexRight">
                        <div className="dashboardContent">
                            
                            <div className="topRow">
                                <div className="topRowFlexTop">
                                    <div>
                                        <h1 className={selectedTheme === 'light' ? "headerH1" : "headerH1Dark"}>Dashboard</h1>
                                        <h2 id={selectedTheme === 'light' ? "welcomeBackLabel" : "welcomeBackLabelDark"}>Welcome back {window.sessionStorage.getItem('displayName')}!</h2>
                                    </div>
                                    
                                    <Link to='/create'>
                                        <button id={selectedTheme === 'light' ? "createButton" : "createButtonDark"}>+ CREATE NEW POST</button>
                                    </Link>
                                </div>
                                    
                                <div id="topRowFlexBottom">
                                    <Searchbar />
                                </div>
                            </div>
    
                            <div id="journalCardsContainer">
                                {propsQuery ? 
                                    <>
                                    <p id={selectedTheme === 'light' ? "searchResultsLabel" : "searchResultsLabelDark"}>Displaying journal posts with "{propsQuery}"</p>
                                    <SearchedJournalCards setDarkenBg={setDarkenBg} setShowDeleteModal={setShowDeleteModal} setIdPostToBeDeleted={setIdPostToBeDeleted} propsQuery={propsQuery}/>
                                    </>
                                    :
                                    <>
                                    <p id={selectedTheme === 'light' ? "searchResultsLabel" : "searchResultsLabelDark"}>Displaying all journal posts</p>
                                    <JournalCard setDarkenBg={setDarkenBg} setShowDeleteModal={setShowDeleteModal} setIdPostToBeDeleted={setIdPostToBeDeleted} />
                                    </>
                                }
                                
                            </div>
                        </div>
                    </div>
    
                </div>
                </>

            ): (
                <></>
            )}
            
        </div>
    );
}

export default DashboardPage;
