//set up server
const express = require('express')

const app = express()
const bodyParser = require('body-parser')

app.use(bodyParser.json())


app.get('/' ,  (req,res)=>{
    res.send('start')
})


const PORT = process.env.PORT || 5000
app.listen(PORT , ()=> console.log('starting server'))
