const Journal = require('../models/journal')

/* get all the journals in the database */
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

/* create a journal and save to the database */
const create_journal = (req, res) => {
    // convert request body into json (it is currently sending as a json within a json)
    let jsonData = Object.keys(req.body)
    jsonData = JSON.parse(jsonData)

    const journal = new Journal(jsonData);  
    journal.save()
        .then(result => {
            console.log("Post success!")
            res.json ({ response: jsonData })
        })
}

module.exports = {
    get_journals,
    create_journal
}