const express = require('express')
const {createuser,loginuser} = require('../controllers/users')
const createnotes = require('../controllers/notes')

const router = new express.Router();

router.post('/api/users/user_create',createuser)
router.post('/api/users/user_login',loginuser)
router.post('/api/notes',createnotes)

module.exports = router