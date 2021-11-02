const User = require('../models/User')
const jwt = require('jsonwebtoken')
require('dotenv').config()

// handle errors
const handleErrors = (err) => {
    console.log(err.message, err.code)
    let errors = { username: '', password: '' }

    // incorrect username
    if (err.message === 'Incorrect username') {
        errors.username = 'Username does not exist'
    }

    // incorrect password
    if (err.message === 'Incorrect password') {
        errors.password = 'Incorrect password'
    }

    // duplicate username error
    if (err.code === 11000) {
        errors.username = 'Username is already in use'
        return errors
    }

    // validation errors
    if (err.message.includes('user validation failed')) {
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message
        })
    }

    return errors
}

//create a json web token
const createToken = (id) => {
    return jwt.sign({ id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: 3 * 24 * 60 * 60
    })
}

// controllers
// get the id of the currently logged in user
const get_user_id = (req, res) => {
    const token = req.cookies.jwt
    let user = ''

    if (token) {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async(err, decodedToken) => {
            if (err) {
                console.log(err.message)
                user = 'Invalid'
                return user
            } else {
                const userObject = await User.findById(decodedToken.id)
                const userIdString = userObject._id.toString()
                user = userIdString.split('"')[0]
                res.json({ user_id: user})
            }
        })
    } else {
        user = 'Invalid'
        return user
    }
}

// sign a user up
const signup_post = async (req, res) => {
    // convert request body into json (it is currently sending as a json within a json)
    let userData = Object.keys(req.body)
    const userJSON = JSON.parse(userData)
    
    const username = userJSON.username
    const password = userJSON.password

    try {
        const user = await User.create({ username, password })
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: 3 * 24 * 60 * 60 * 1000})
        res.status(201).json({ user: user._id })
        console.log(user._id)
    }
    catch(err) {
        const errors = handleErrors(err)
        res.json({ errors: errors })
    }
}

// login a user
const login_post = async (req, res) => {
    // convert request body into json (it is currently sending as a json within a json)
    let userData = Object.keys(req.body)
    const userJSON = JSON.parse(userData)
    
    const username = userJSON.username
    const password = userJSON.password

    try {
        const user = await User.login(username, password)
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: 3 * 24 * 60 * 60 * 1000})
        res.status(200).json({ user: user._id })
    }
    catch(err) {
        const errors = handleErrors(err)
        res.json({ errors: errors })
    }
}

// logout a user
const logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 })
    res.json({ redirect: '/' })
}

module.exports = {
    signup_post,
    login_post,
    logout_get,
    get_user_id
}