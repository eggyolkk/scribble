const express = require("express");
const journalController = require("../controllers/journalController");
const { requireAuth } = require('../middleware/authMiddleware')

const router = express.Router();

router.get('/', requireAuth, journalController.get_journals) 
router.post('/', requireAuth, journalController.create_journal)
router.get('/:id', requireAuth, journalController.get_journal_details)
router.delete('/:id', requireAuth, journalController.delete_journal)
router.put('/:id', requireAuth, journalController.update_journal)
router.get('/search/query', journalController.search_journals)

module.exports = router;