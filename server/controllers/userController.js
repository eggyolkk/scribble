const Journal = require('../models/Journal')
const mongoose = require('mongoose')
const User = require('../models/User')
const { get_user_id } = require('../controllers/authController')

// get user's username
const get_username = async (userId) => {
    const userObject = await User.findById(userId)
    const usernameString = userObject.username.toString()
    const username = usernameString.split('"')[0]
    return username
}

// get user's display name
const get_display_name = async (userId) => {
    const userObject = await User.findById(userId)

    // if user hasn't set a display name, return their username
    let displayName = ''
    if (userObject.display_name) {
        displayName = userObject.display_name.toString()
    } 
    else {
        displayName = userObject.username.toString().split('"')[0]
    }
    
    return displayName
}

// get user's preferred theme
const get_theme = async (userId) => {
    const userObject = await User.findById(userId)
    const themeString = userObject.theme.toString()
    const theme = themeString.split('"')[0]
    return theme
}

// get user's avatar
const get_avatar = async (userId) => {
    const userObject = await User.findById(userId)
    const avatarString = userObject.avatar.toString()
    const avatar = avatarString.split('"')[0]
    return avatar
}

// return user's username, display name and preferred theme
const get_user_details = async (req, res) => {
    const userId = req.query.userId
    const username = await get_username(userId)
    const displayName = await get_display_name(userId)
    const theme = await get_theme(userId)
    const avatar = await get_avatar(userId)

    res.json({ username: username, displayName: displayName, theme: theme, avatar: avatar })
}

// set user theme
const set_user_theme = async (req, res) => {
    const userId = req.query.userId
    const theme = req.query.theme

    const conditions = { _id: userId }

    User.updateOne(conditions, { theme: theme }, function(err, values) {
        if (!err) {
            res.json ({ redirect: `/settings` })
            console.log('Updated theme successfully')
        } else {
            console.log(error)
        } 
    })
}

module.exports = {
    get_user_details,
    set_user_theme
}