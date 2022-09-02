const express = require('express')
const app = express()
const conn = require('./db/conn');
const port = process.env.PORT || 3000


app.get('/',(req,res)=>{
    res.send('Hello This is from response')
})


app.listen(port,()=>{
    console.log(`The app is listening at ${port}`)
})