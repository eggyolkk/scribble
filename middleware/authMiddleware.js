const jwt = require('jsonwebtoken')
const User = require('../models/User')
require('dotenv').config()

let storedToken = ''

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt
    if (token) {
        storedToken = req.cookies.jwt
    }

    // check json web token exists & is verified
    if (storedToken) {
        jwt.verify(storedToken, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {
            if (err) {
                console.log(err.message)
            } else {
                console.log(decodedToken)
                next()
            }
        })
    } else {
        res.send("You are unauthorized to view this page")
        console.log(storedToken, 'Redirected back to login')
    }
}

module.exports = { requireAuth }