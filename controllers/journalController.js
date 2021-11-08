const Journal = require('../models/Journal')
const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const User = require('../models/User')
require('dotenv').config()

// get journals of user
const get_journals = (req, res, method) => {
    const token = req.cookies.jwt
    let user = 'invalid'

    if (token) {
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, async(err, decodedToken) => {
            if (err) {
                console.log(err.message)
            } else {
                const userObject = await User.findById(decodedToken.id)
                const userIdString = userObject._id.toString()
                user = userIdString.split('"')[0]

                console.log("user:", typeof user)
                const journalData = Journal.find({ userId: user })
                journalData.exec(function(error, data) {
                    if (error) {
                        throw error
                    }
                    console.log("data", data)
                    res.send(data)
                })
            }
        })
    } else {
        return user
    }
}

// get journal by id 
const get_journal_details = (req, res) => {
    journalId = req.params.id
    Journal.findById(journalId)
        .then(result => {
            console.log("Request by id", result)
            res.send({ data: result })
        })
        .catch(error => {
            console.log(error)
        })
}

// create a journal and save to the database
const create_journal = (req, res) => {
    // convert request body into json (it is currently sending as a json within a json)
    let jsonData = Object.keys(req.body)
    jsonData = JSON.parse(jsonData)
    console.log('jsondata', req.body)

    const journal = new Journal(jsonData);  
    journal.save()
        .then(result => {
            console.log("Post success!")
            res.json ({ redirect: '/dashboard' })
        })
}

// delete a journal to the database
const delete_journal = (req, res) => {
    const journalId = req.params.id
    Journal.findByIdAndDelete(journalId)
        .then(result => {
            console.log(result, "Successfully deleted")
            res.json ({ redirect: '/dashboard' })
        })
        .catch(error => {
            console.log(error)
        })
}

// update a journal in the database
const update_journal = (req, res) => {
    const conditions = { _id: req.params.id }

    // convert request body into json (it is currently sending as a json within a json)
    let body = Object.keys(req.body)
    const bodyJSON = JSON.parse(body)

    Journal.updateOne(conditions, bodyJSON, function(err, values) {
        if (!err) {
            res.json ({ redirect: `/post/${req.params.id}`})
            console.log('Updated successfully')
        } else {
            console.log(err)
        } 
    })
}

// search for journals in the database with specified fields
const search_journals = (req, res) => {
    // check for user's journal posts containing the search query in title or bodytext
    const searchQuery = { 
        $and: [
            { userId: req.query.userId },
            { $or:[ {title: { "$regex": req.query.search, "$options": "i" }}, {bodyText: { "$regex": req.query.search, "$options": "i" }} ] }
        ]
    }

    Journal.find(searchQuery, function(err, docs) {
        if (err) {
            console.log(err)
        }
        else {
            console.log('results', docs)
            res.json({ docs })
        }
    })
}

module.exports = {
    get_journals,
    create_journal,
    get_journal_details,
    delete_journal,
    update_journal,
    search_journals
}