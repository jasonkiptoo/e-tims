const urlSchema = require('../models/url')


const getHeader =async(req, res)=>{

    const url = req.url

    res.json(url)

}


module.exports = {getHeader}
