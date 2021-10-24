import React from 'react'

const DisplayActivities = (props) => {
    const activities = props

    // convert activities string to a list
    console.log(activities.activities.split(','))

    console.log('activities', activities)
    return (
        <div>
            <p>{activities.activities}</p>
        </div>
    )
}

export default DisplayActivities
