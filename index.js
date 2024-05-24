// const axios = require('axios');
// const cheerio = require('cheerio');

// async function scrapeSite() {
//     const url = `https://etims.kra.go.ke/common/link/etims/receipt/indexEtimsReceiptData?Data=A003233471M00WDB6GNG3O3DKZ4NK`;
//     const { data } = await axios.get(url);
//     const $ = cheerio.load(data);

//     const clientDetails = [];

//     $('div.topinfo').each((i, el) => {
//         const text = $(el).text().replace(/\s+/g, ' ').trim(); // Replace multiple spaces with a single space
//         const cleanedText = text.replace(/\n|\t/g, ''); // Remove '\n' and '\t' characters
//         const lines = cleanedText.split('\n').map(line => line.trim()).filter(line => line !== '');

//         clientDetails.push(lines);
//     });

//     // const {kraPin, supplierName, invoiceDate, invoiceNumber, Item, taxableAmount, totalVat, totalInvoice} = 

    


//     return clientDetails;
// }

// scrapeSite().then(result => {
//     console.log(result);
// }).catch(err => console.log(err));




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
