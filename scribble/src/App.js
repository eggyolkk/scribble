import "./App.css";
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from "react-router-dom";

import HomePage from "./pages/home/homePage";
import DashboardPage from "./pages/dashboard/dashboardPage";
import CreateJournalPage from "./pages/createJournal/createJournalPage";
import ExpandJournal from './pages/expandJournal/expandJournal';

import store from "./redux/store"
import { connect } from 'react-redux'
import { fetchJournalDetails } from './redux/journalDetails/journalDetailsActions'
import { setJournalId, getJournalId } from './redux/journalId/journalIdActions'

function App({journalData, ownPropsMessage, journalId, fetchJournalDetails, setJournalId, getJournal}) {
    return (
        <Provider store={store}>
            <div className='App'>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route exact path='/dashboard' component={DashboardPage} />
                        <Route exact path='/create' component={CreateJournalPage} />
                        <Route 
                            exact path='/post/:id' 
                            render={(props) => (
                                <ExpandJournal id={journalId}/>
                            )}
                        />
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
