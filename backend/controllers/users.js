const bcrypt = require('bcryptjs/dist/bcrypt')
const express =  require('express')
const User = require('../models/User')

//controller : create user 
const createuser = async(req,res)=>{
    try{
        //check whether the user with this email already exists or not
        const userfound = await User.findOne({email:req.body.email})

        if(userfound){
          res.send('One user found already with this email')
        }else{
            //Create new user
            const data =  new User(req.body);   

            //Here calling a function which is responsible to generate token and here data is instance of User's Model 
            console.log(`Before generating tokens`)
            const token = await data.generateAuthToken();    
            console.log(`After generating tokens ${token}`)

            const result = await data.save();
            res.send(result);
        }

    }
    catch(err){
        console.log(err)
        res.send(err)
    }  



}

//controller : Login user 
const loginuser = async(req,res)=>{
    try{

        const email = req.body.email;
        const password = req.body.password;
       
       //check whether the user with this email already exists or not
        const userfound = await User.findOne({email:email})

        const isMatch   = await bcrypt.compare(password,userfound.password)

        const token = await userfound.generateAuthToken();    
        console.log(`After LOGIN generating tokens ${token}`)

        if(isMatch){
          res.send('user found')
        }else{
            res.send('user not found')
        }
    }
    catch(err){
        console.log(err)
        res.send(err)
    }  



}

module.exports = {createuser,loginuser}