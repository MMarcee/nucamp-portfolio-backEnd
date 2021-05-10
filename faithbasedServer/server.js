const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const urls = require('./routes/users')
const cors = require('cors')

dotenv.config()

mongoose.connect(process.env.DB_ACCESS, () => console.log("Database connected!"))

app.use(express.json())
app.use(cors())
app.use('/app', urls)
app.listen(5000, () => console.log("Server works!"))



