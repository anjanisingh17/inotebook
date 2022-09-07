const mongoose  = require('mongoose')

const noteSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    title:{
        type: String,
        required: true,
        validate(value){
            if(value.length <=3){
                throw new Error('Description should be min 3 character')
            }
        }
    },
    description:{
        type: String,
        required: true,
        validate(value){
            if(value.length <=3){
                throw new Error('Description should be min 3 character')
            }
        }
    },
    tag:{
        type: String,
        required:true
    },
    date: {
        type: Date,
        default: Date.now
    }
})


const Notes =  new mongoose.model('note', noteSchema);

module.exports =  Notes