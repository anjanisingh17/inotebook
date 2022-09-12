const bcrypt = require('bcryptjs/dist/bcrypt')
const express =  require('express')
const User = require('../models/User')
const fetchuser = require('../middleware/fetchUser')

//controller 1 : create user 
const createuser = async(req,res)=>{
    try{
        //check whether the user with this email already exists or not
        const userfound = await User.findOne({email:req.body.email})

        if(userfound){
          let success = false;  
          res.status(401).json({success,'error':'User already exists with this email'})
        }else{
            let success = true;
            //Create new user
            const data =  new User(req.body);   
            //Here calling a function which is responsible to generate token and here data is instance of User's Model 
            console.log(`Before generating tokens`)
            const token = await data.generateAuthToken();    
            console.log(`After generating tokens ${token}`)
            const result = await data.save();

            res.status(201).json({success,result});
        }

    }
    catch(err){
        console.log(err)
        let success = false
        res.json({success,err})
    }  



}

//controller 2 : Login user 
const loginuser = async(req,res)=>{
    try{

        const email = req.body.email;
        const password = req.body.password;

       //check whether the user with this email already exists or not
        const userfound = await User.findOne({email:email})
        const isMatch   = await bcrypt.compare(password,userfound.password)

        const token = await userfound.generateAuthToken();    
        // console.log(`After LOGIN generating tokens ${token}`)
          
        if(isMatch){
            let success = true;  
          res.status(200).json({success,token})
        }else{
            let success = false;  
            res.json({success,'error':'Please try to login with correct credentials'})
        }
    }
    catch(err){
        console.log('login error',err)
        let success = false;  
        res.json({success,'error':'Please try to login with correct credentials'})
    }  

}


//controller 2 : Get user Details by providing auth token in the hearders as auth-token key value parir 
const getUser = async(req,res)=>{ 
    try{
      const  userId = req.user._id
        const user =  await User.findById(userId).select(["-tokens","-password"]);
        res.json(user);
    }catch(err){
        res.json(err);
    }

}



module.exports = {createuser,loginuser,getUser}