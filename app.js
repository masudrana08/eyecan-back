// Import
const express = require('express')
const mongoose = require('mongoose')
const BlogRoutes = require('./routes/blogroutes.js')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require("cors")
require('dotenv').config()


// Initialize
const app = express()
const PORT = process.env.PORT || 8000
const DB = process.env.MONGO

// Middleware Used
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true })); 

app.use("/blog", BlogRoutes)

// Default Get API
app.get("/images/:filename", (req, res)=>{
    const myImg = path .join(__dirname, "images", req.params.filename)
    res.sendFile(myImg)
})

// Database Connection
mongoose.connect(DB)

// Server Connection
app.listen(PORT, ()=>{
    console.log("Eyecan is running with port "+PORT);
})

