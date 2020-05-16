const express = require('express')
const app = express()
const auth = require('./Routes/route.js')

app.use('/',auth)
app.listen(3000,()=>{
    console.log("Server started on port 3000")  
})
