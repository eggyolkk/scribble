const User = require('../models/User')
const jwt = require('jsonwebtoken')

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
    return jwt.sign({ id }, 'db1f016cc413e818a5e69bf95bd0af88cac2e7f9e03494f7c39db7a98bdb3f79edbdae42df6b4d25b7728fd2ef8ae27e9844157b36e0255a5e128d9b2f179f9e', {
        expiresIn: 3 * 24 * 60 * 60
    })
}

// controllers
const signup_post = async (req, res) => {
    const { username, password } = req.body

    try {
        const user = await User.create({ username, password })
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: 3 * 24 * 60 * 60 * 1000})
        res.status(201).json({ user: user._id })
        console.log(user._id)
    }
    catch(err) {
        const errors = handleErrors(err)
        res.status(400).json({ errors })
        console.log(errors)
    }
}

const login_post = async (req, res) => {
    // convert request body into json (it is currently sending as a json within a json)
    let userData = Object.keys(req.body)
    const userJSON = JSON.parse(userData)
    
    const username = userJSON.username
    const password = userJSON.password

    console.log("req body", userJSON)

    try {
        const user = await User.login(username, password)
        const token = createToken(user._id)
        res.cookie('jwt', token, { httpOnly: true, maxAge: 3 * 24 * 60 * 60 * 1000})
        res.status(200).json({ user: user._id })
    }
    catch(err) {
        const errors = handleErrors(err)
        res.status(400).json({ errors })
    }
}

const logout_get = (req, res) => {
    res.cookie('jwt', '', { maxAge: 1 })
    res.json({ redirect: '/' })
}

module.exports = {
    signup_post,
    login_post,
    logout_get
}