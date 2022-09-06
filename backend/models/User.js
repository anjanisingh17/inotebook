const mongoose  = require('mongoose')
const validator =  require('validator')
const bcrypt = require('bcryptjs');
const jwt  =  require('jsonwebtoken')
const secretkey = "Thisismyjsonwebtokensecretkeytouse";   

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
    },
    tokens: [{
        token:{
            type:String,
            required:true
        }
    }]
})

//Generating tokens
//When we use create any function which will call on the instance of the Schema then we use "methods"
userSchema.methods.generateAuthToken = async function(){
    try{
      //Here we use toString() because _id is an object so convert object into string we used toString()
        const token = await jwt.sign({_id:this._id.toString()},secretkey)
        // console.log(`Token generated in the schema ${token}`)
        this.tokens = this.tokens.concat({token:token})
        return token;
    }
    catch(err){
        console.log(`Error message while generating tokens in model: ${err}`)
    }
}


//**********-------create a middleware for password hashing----------*********
//Here pre & save is work like on & create of jquery event
userSchema.pre("save", async function(next){
    //isModified ('password') means If someone doing something only with password field whether crud
    if(this.isModified('password')){
      this.password = await bcrypt.hash(this.password,10);  //Here 10  is round number for hashing
    }
     next();
  })



//Create new collection
const User =  new mongoose.model('user', userSchema);

module.exports =  User