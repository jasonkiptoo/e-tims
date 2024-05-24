const urlSchema = require('../models/getDataModel.js')
const scrapeService = require("../services/getData.js")

const getHeader =async(req, res)=>{
    const url = req.body.url
    const data = await scrapeService.scrapeSite(url)
    res.json(data)
}
module.exports = {getHeader}
