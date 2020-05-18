const express = require('express')
const app = express()
const route = require('./Routes/route.js')

app.use(route)

app.listen(3000,()=>{
    console.log("Server started on port 3000")  
})
