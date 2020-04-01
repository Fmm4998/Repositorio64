const express = require('express')
const bodyParser = require('body-parser')
const gems = require('./routes/gems')
const auth = require('./routes/auth')
const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.get('/',(req,res)=>{
    res.send('Hola Mundo, que tranza')

})
app.use('/gems', gems)
app.use('/auth', auth)

module.exports = app

