const bcrypt = require('bcryptjs/dist/bcrypt')
const express =  require('express')
const Note = require('../models/Note')
const fetchuser = require('../middleware/fetchUser')


//Module 1 : Add new notes for a user by providing auth-token as key-pair value
const addnotes = async(req,res)=>{
    try{
        //Create new user
        const  userId = req.user._id ;
         req.body.user   = userId ;

        const data =  new Note(req.body);           
        const result = await data.save();
        res.status(201).send(result);
    }
    catch(err){
        res.send(err)
    }
}


//Module 2 : Fetch all notes of a user by providing auth-token as key-pair value
const fetchallnotes = async(req,res)=>{
    try{

    const note =  await Note.find({user:req.user._id});

    res.send(note)
    }
    catch(err){
        res.send(err)
    }
}



module.exports = {addnotes,fetchallnotes}