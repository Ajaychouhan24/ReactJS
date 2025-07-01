const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: String,
    description: String
}, {
    timestamps: true
})

const movieModel = mongoose.model('movies', movieSchema)

module.exports = movieModel