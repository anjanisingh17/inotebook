const mongoose  = require('mongoose')
const validator =  require('validator')

const userSchema = new mongoose.Schema({

    name:{
        type: String,
        required: true,
        validate(value){
            if(value.length <=3){
                throw new Error('Name should be min 3 character')
            }
        }
    },
    email:{
        type: String,
        required: true,       
        unique: true,
        validate(value){
            if(!validator.isEmail(value)){
              throw new Error('Please enter a valid email address')
            }
        }   
        
    },
    password:{
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


const User =  new mongoose.model('user', userSchema);

module.exports =  User