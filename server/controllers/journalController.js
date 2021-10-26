const Journal = require('../models/journal')
const mongoose = require('mongoose')

// get all the journals in the database
const get_journals = (req, res) => {
    const journalTable = Journal
    const journalData = journalTable.find({})
    journalData.exec(function(error, data) {
        if (error) {
            throw error
        }
        res.send(data)
    })
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
            console.log(error)
        } 
    })
}

module.exports = {
    get_journals,
    create_journal,
    get_journal_details,
    delete_journal,
    update_journal
}