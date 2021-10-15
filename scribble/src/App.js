import React from "react";
import "./App.css";
import { Provider } from 'react-redux'
import ReactDOM, { render } from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/home/homePage";
import DashboardPage from "./pages/dashboard/dashboardPage";
import CreateJournalPage from "./pages/createJournal/createJournalPage";
import store from "./redux/store"

function App() {
    return (
        <Provider store={store}>
            <div className='App'>
                <BrowserRouter>
                    <Switch>
                        <Route exact path='/' component={HomePage} />
                        <Route exact path='/dashboard' component={DashboardPage} />
                        <Route exact path='/create' component={CreateJournalPage} />
                    </Switch>
                </BrowserRouter>
            </div>
        </Provider>
    );
}

export default App;
