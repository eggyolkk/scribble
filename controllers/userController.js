const Journal = require('../models/Journal')
const mongoose = require('mongoose')
const User = require('../models/User')
const bcrypt = require('bcrypt')
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
    if (userObject.displayName) {
        displayName = userObject.displayName.toString()
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

// set user's display name
const set_user_display_name = async (req, res) => {
    const userId = req.query.userId
    const displayName = req.query.displayName

    conditions = { _id: userId }

    User.updateOne(conditions, { displayName: displayName }, function(err, values) {
        if (!err) {
            res.json({ redirect: '/settings' })
            console.log('Display name updated successfully')
        } else {
            console.log(error)
        }
    })
}

// set user's avatar
const set_user_avatar = async (req, res) => {
    const userId = req.query.userId
    const avatar = req.query.avatar 

    conditions = { _id: userId }

    User.updateOne(conditions, { avatar: avatar }, function(err, values) {
        if (!err) {
            res.json({ redirect: '/settings' })
            console.log('Avatar updated successfully')
        } else {
            console.log(error)
        }
    })
}

// set user's password
const set_user_password = async (req, res) => {
    // convert request body into json (it is currently sending as a json within a json)
    let userData = Object.keys(req.body)
    const userJSON = JSON.parse(userData)
    
    const userId = userJSON.userId
    const password = userJSON.password

    // hash new password
    const salt = await bcrypt.genSalt()
    const newPassword = await bcrypt.hash(password, salt)

    conditions = { _id: userId }

    User.updateOne(conditions, { password: newPassword }, function(err, values) {
        if (!err) {
            res.json({ redirect: '/settings' })
            console.log('Password updates successfully')
        } else {
            console.log(error)
        }
    })
}

module.exports = {
    get_user_details,
    set_user_theme,
    set_user_display_name,
    set_user_avatar,
    set_user_password
}