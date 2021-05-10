const { response } = require('express')
const express = require('express')
const regUserSchema = require('../models/RegSchema') 
const bcrypt = require('bcrypt')

const router = express.Router()

router.post('/signup', async (request, response) => {
    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)
    const regUser = new regUserSchema({
        username:request.body.username,
        password:securePassword,
        firstname:request.body.firstname,
        lastname:request.body.lastname,
        email:request.body.email,
        remember:request.body.remember
    })
    regUser.save()
    .then(data => {
        response.json(data)
    })
    .catch(error => {
        response.json(error);
    })
})

module.exports = router