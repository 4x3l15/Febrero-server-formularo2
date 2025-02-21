const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    autor: {
        type: String,
        required: true
    },
    titulo: {
        type: String,
        required: true
    },
    año: {
        type: Number,
        required: true
    },
    paginas: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('User', userSchema);
