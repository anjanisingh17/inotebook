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

//Module 3: Update an existing Note using : PUT "/api/notes/updatenote/:id". Login required
const updatenote = async(req,res)=>{
    try{
        const {title, description, tag} = req.body
        //Create a newNote object
        const newNote = {}

        if(title) { newNote.title = title }
        if(description) { newNote.description = description }
        if(tag){ newNote.tag = tag }

        //Find the note to be updated and update it
        let note = await Note.findById(req.params.id)
        if(!note){ return res.status(404).send("Not Found any note") }
        if(note.user.toString() !== req.user._id){ return res.status(401).send("Not Allowed") }

        console.log("note id",note.user.toString())
        console.log("user id",req.user._id)

        note = await Note.findByIdAndUpdate(req.params.id, {$set : newNote}, {new:true})
        res.send(note)
      }
    catch(err){
        res.send(err)
    }
}


//Module 4: Delete an existing Note using : PUT "/api/notes/updatenote/:id". Login required
const deletenote = async(req,res)=>{
    try{
        //Find the note to be delete and delete it
        let note = await Note.findById(req.params.id)

        if(!note){ return res.status(404).send("Not Found any note") }
        if(note.user.toString() !== req.user._id){ return res.status(401).send("Not Allowed") }
        //Find and delete the note
        note = await Note.findByIdAndDelete(req.params.id)
        res.status(200).json({success:true,message:`Note deleted successully for note id : ${req.params.id}`})
      }
    catch(err){
        console.log("Note Delete Api error : ",err)
        // res.status(500).send(`Interval Error`)
        res.status(400).json({success:false,message:err})

    }
}




module.exports = {addnotes,fetchallnotes,updatenote,deletenote}