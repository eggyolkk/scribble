const express = require("express");
const journalController = require("../controllers/journalController");
const cors = require('cors')

const router = express.Router();

router.get('/', cors(), journalController.get_journals) 
router.post('/', cors(), journalController.create_journal)
router.get('/:id', cors(), journalController.get_journal_details)

module.exports = router;