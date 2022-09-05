const express = require('express')
const createuser = require('../controllers/auth')
const createnotes = require('../controllers/notes')

const router = new express.Router();

router.post('/api/auth',createuser)
router.post('/api/notes',createnotes)

module.exports = router