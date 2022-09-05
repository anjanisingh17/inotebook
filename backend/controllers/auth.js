const express =  require('express')
const User = require('../models/User')

//controller : create user 
const createuser = async(req,res)=>{
    try{
        //check whether the user with this email already exists or not
        const userfound = await User.findOne({email:req.body.email})
        console.log('userfound >>>> length ',userfound)

        if(userfound){
          res.send('One user found already with this email')
        }else{
            //Create new user
            const data =  new User(req.body);   
            const result = await data.save();
            res.send(result);
        }

    }
    catch(err){
        console.log(err)
        res.send(err)
    }  



}

module.exports = createuser