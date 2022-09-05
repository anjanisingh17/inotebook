const mongoose  = require('mongoose')

const noteSchema = new mongoose.Schema({

    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true,
        unique: true
    },
    tag:{
        type: String,
        default: Date.now
    },
    date: {
        type: Date,
        default: Date.now
    }
})


const Notes =  new mongoose.model('note', noteSchema);

module.exports =  Notes