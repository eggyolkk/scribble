import { React, useEffect } from "react";
import { Link } from "react-router-dom";
import DashboardLogic from "./dashboardLogic"
import JournalCardLogic from "../../components/journalCard/journalCardLogic";

function DashboardPage() {

    return (
        <div>
            <h1>Welcome to your dashboard</h1>
            
            <Link to='/create'>
                <button>Create new post</button>
            </Link>

            <JournalCardLogic />
        </div>
    );
}

export default DashboardPage;
