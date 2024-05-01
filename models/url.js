const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    headers: {
        type: Object,
        required:false
    }
})

module.exports = mongoose.model("url", urlSchema)