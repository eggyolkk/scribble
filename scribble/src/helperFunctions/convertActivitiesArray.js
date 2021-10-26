// convert activities array into a string to use for JSON post request
const convertActivitiesArray = (activities) => {
    let activitiesString = ''
    
    for (let i=0; i < activities.length; i++) {
        activitiesString += `${activities[i]},`
    }

    activitiesString = activitiesString.slice(0, -1)
    return activitiesString
}

export default convertActivitiesArray