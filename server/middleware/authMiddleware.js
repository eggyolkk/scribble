const jwt = require('jsonwebtoken')
const User = require('../models/User')
require('dotenv').config()

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt

    // check json web token exists & is verified
    if (token) {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decodedToken) => {
            if (err) {
                console.log(err.message)
            } else {
                console.log(decodedToken)
                next()
            }
        })
    } else {
        res.send("You are unauthorized to view this page")
        console.log(token, 'Redirected back to login')
    }
}

module.exports = { requireAuth }