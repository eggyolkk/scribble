import "./App.css";
import { Component, useEffect, useState } from 'react'
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

// if user is authenticated, render page
// else, redirect user to login page
const PrivateRoute = ({ component: Component, ...rest }) => {
    const renderPage = () => {
        return (
            <Route
                {...rest}
                render={props =>
                    window.sessionStorage.getItem("authenticated") === 'valid' ? 
                        <Component {...props} />
                    : 
                        <Redirect to={{ pathname: '/' }} />
                }
            />
        )
    }

    return (
        renderPage()
    )
}

function App({journalData, ownPropsMessage, journalId, fetchJournalDetails, setJournalId, getJournal, userId, getUserId}) {
    return (
        <Provider store={store}>
            <div className='App'>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        
                        <PrivateRoute exact path='/dashboard' component={DashboardPage} getUserId={getUserId} userId={userId}/>

                        <PrivateRoute exact path="/dashboard/:query" component={DashboardPage} />
                        
                        <PrivateRoute exact path='/create' component={CreateJournal} />
                        
                        <PrivateRoute exact path='/post/:id' component={ExpandJournal} id={journalId} />
                        
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
        getJournalId: () => dispatch(getJournalId())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
