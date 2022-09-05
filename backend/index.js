const express = require('express')
const app = express()
const conn = require('./db/conn');
const router = require('./routers/routers')
const port = process.env.PORT || 5000

app.use(express.json());
app.use(router)

app.get('/',(req,res)=>{
    res.send('Hello This is from response')
})


app.listen(port,()=>{
    console.log(`The app is listening at ${port}`) 
})