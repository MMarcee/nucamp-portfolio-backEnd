const mongoose = require('mongoose')

const regSchema = new mongoose.Schema ({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    remember: {
        type: Boolean,
        required: false
    },
}, {
    timestamps: true
});

module.exports = mongoose.model('userdata', regSchema);

