const jwt = require('jsonwebtoken')
const User = require('../models/User')

const requireAuth = (req, res, next) => {
    const token = req.cookies.jwt
    console.log('cookies', req.cookies)

    // check json web token exists & is verified
    if (token) {
        jwt.verify(token, 'db1f016cc413e818a5e69bf95bd0af88cac2e7f9e03494f7c39db7a98bdb3f79edbdae42df6b4d25b7728fd2ef8ae27e9844157b36e0255a5e128d9b2f179f9e', (err, decodedToken) => {
            if (err) {
                console.log(err.message)
            } else {
                console.log(decodedToken)
                next()
            }
        })
    } else {
        res.status(400).send("You are unauthorized to view this page")
        console.log(token, 'redirect login')
    }
}

module.exports = { requireAuth }