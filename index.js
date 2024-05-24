// const axios = require('axios');
// const cheerio = require('cheerio');

// async function fetchData(url) {
//     try {
//         const response = await axios.get(url);
//         const $ = cheerio.load(response.data);
        
//         const data = {};

//         // Extracting data using CSS selectors
//         data["Control Unit Invoice Number"] = $('td:contains("Control Unit Invoice Number")').next().text().trim();
//         data["Invoice Date"] = $('td:contains("Invoice Date")').next().text().trim();
//         data["Total Taxable Amount"] = $('td:contains("Total Taxable Amount")').next().text().trim();
//         data["Total Tax Amount"] = $('td:contains("Total Tax Amount")').next().text().trim();
//         data["Total Invoice Amount"] = $('td:contains("Total Invoice Amount")').next().text().trim();
//         data["Supplier Name"] = $('td:contains("Supplier Name")').next().text().trim();

//         console.log(data);
//         return data;
//     } catch (error) {
//         console.error('Error fetching data:', error);
//     }
// }

// // Replace the URL with your actual URL
// const url = 'https://itax.kra.go.ke/KRA-Portal/invoiceChk.htm?actionCode=loadPage&invoiceNo=0040804130000058920';
// fetchData(url);



const express = require("express");
const router = require("./router/routes");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();
mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log(process.env.MONGODB_URL, "url");
    console.log("Connected to db");
  })
  .catch((err) => {
    console.log("eroor");
  });

const PORT = 8000;
const app = express();

app.listen(PORT, async () => {
  console.log("app listening");
});

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.get("/",(req,res)=>{
  res.send("Application up and running")
})
app.use(router);
