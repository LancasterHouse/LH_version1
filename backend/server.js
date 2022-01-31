import express from 'express'
// const express = require('express');
import dotenv from 'dotenv'
import connectDb from './config/db.js'

dotenv.config()

connectDb()


const app = express()

 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 


const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`Server running on ${process.env.NODE_ENV} on port ${PORT}`));