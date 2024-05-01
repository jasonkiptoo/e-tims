const moongose = require('moongose');

const urlSchema = new moongose.Shema({
    url: {
        type: String,
        required:true
    }
})

module.exports = moongose.model("url", urlSchema)