const urlSchema = require('../models/url')
const scrapeService = require("../services/getData.js")


const getHeader =async(req, res)=>{
    const url = req.body.url

    const data = await scrapeService.scrapeSite(url)

    console.log(data, "datatatatatat");



    res.json(data)

}


module.exports = {getHeader}
