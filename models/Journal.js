const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/* Declaring Journal model */
const journalSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    bodyText: {
        type: String,
        required: true
    },
    mood: {
        type: String,
        required: true
    },
    activities: {
        type: String,
        required: false
    },
    userId: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Journal = mongoose.model('Journal', journalSchema)
module.exports = Journal;