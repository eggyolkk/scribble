import { useState, useEffect } from 'react'
import displayActivityIcon from '../../../../helperFunctions/displayActivityIcon'
import './displayActivitiesStyle.scss'

const DisplayActivities = (props) => {
    const activities = props
    const [activitiesArray, setActivitiesArray] = useState([])

    // on initial page render, get activities array
    useEffect(() => {
        setActivitiesArray(activities.activities.split(','))
    }, [activities.activities])

    const activitiesMap = activitiesArray.map((activity, index) => 
    <div key={index}>
        {displayActivityIcon(activity, 'display')}
        <p id="displayActivityLabel">{activity}</p>
    </div>
    )

    return (
        <div id="displayActivitiesContainer">
            {activitiesMap}
        </div>
    )
}

export default DisplayActivities
