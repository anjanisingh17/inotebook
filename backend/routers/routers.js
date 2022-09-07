const express = require('express')
const {createuser,loginuser,getUser} = require('../controllers/users')
const {addnotes,fetchallnotes,updatenote,deletenote} = require('../controllers/notes')
const fetchuser = require('../middleware/fetchUser')

const router = new express.Router();

//Routers for 
router.post('/api/users/user_create',createuser)
router.post('/api/users/user_login',loginuser)
router.post('/api/users/getusers',fetchuser,getUser)

//Routers for notes
router.get('/api/notes/fetchallnotes',fetchuser,fetchallnotes)
router.post('/api/notes/addnotes',fetchuser,addnotes)
router.put('/api/notes/updatenote/:id',fetchuser,updatenote)
router.delete('/api/notes/deletenote/:id',fetchuser,deletenote)


module.exports = router     