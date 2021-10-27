const express = require("express");
const journalController = require("../controllers/journalController");
const { requireAuth } = require('../middleware/authMiddleware')

const router = express.Router();

router.get('/', requireAuth, journalController.get_journals) 
router.post('/', journalController.create_journal)
router.get('/:id', journalController.get_journal_details)
router.delete('/:id',journalController.delete_journal)
router.put('/:id', journalController.update_journal)

module.exports = router;