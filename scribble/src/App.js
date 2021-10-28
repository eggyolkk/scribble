import "./App.css";
import { Component } from 'react'
import { render } from 'react-dom'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import axios from 'axios'

import HomePage from "./pages/home/homePage";
import DashboardPage from "./pages/dashboard/dashboardPage";
import CreateJournal from "./pages/createJournal/createJournal";
import ExpandJournal from "./pages/expandJournal/expandJournal";

import { Provider, connect } from 'react-redux'
import store from "./redux/store"
import { fetchJournalDetails } from './redux/journalDetails/journalDetailsActions'
import { setJournalId, getJournalId } from './redux/journalId/journalIdActions'

class ProtectedRoute extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userId: ''
        }
    }

    async componentDidMount() {
        await this.checkUser()
    }

    // check if a user is currently logged in
    checkUser = async () => {
        const postHeader = { headers: { 'Content-Type': 'application/json' }}
        await axios.get('http://localhost:5000/auth/get_user_id', {postHeader, withCredentials: true})
        .then(response => {
            this.setState({
                userId: response.data.user_id
            })
            console.log("FRONTEND USERID", this.state.userId)
        })
        .catch(error => {
            this.setState({
                userId: 'Invalid'
            })
        })
    }
    render() {
        const { component: Component, id: journalId, ...props } = this.props

        return (
            <Route {...props}
                render={(props) => (
                    this.state.userId === 'Invalid' ?
                    <Redirect to='/' /> :
                    <>
                    {console.log("helloooooooo")}
                    <Component {...props} id={journalId}/>
                    </>
                )}
            />
        )
    }
}

function App({journalData, ownPropsMessage, journalId, fetchJournalDetails, setJournalId, getJournal}) {
    return (
        <Provider store={store}>
            <div className='App'>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <ProtectedRoute exact path='/dashboard' component={DashboardPage} />
                        
                        <ProtectedRoute exact path='/create' component={CreateJournal} />
                        
                        <ProtectedRoute exact path='/post/:id' component={ExpandJournal} id={journalId} />
                        
                    </Switch>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        journalData: state.journalDetail.journalDetails,
        journalId: state.journalId.journalId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchJournalDetails: () => dispatch(fetchJournalDetails()),
        setJournalId: currentId => dispatch(setJournalId(currentId)),
        getJournalId: () => dispatch(getJournalId()),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
