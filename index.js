const mongoose = require('mongoose')
const app = require('./app')
const port = process.env.PORT || 3000 

const uat = ''
const local = 'mongodb://localhost:27017/gems'

mongoose.connect(local, (err,res)=>{
    if(err){
        return console.log(`Error connecting to the database (orale perro) ${err}`)
    }
    console.log('connection to the basedate established')
    
    app.listen(port,()=>{
        console.log(`API Rest running at http://localhost:${port}`)
    })
})


