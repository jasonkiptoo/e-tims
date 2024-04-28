const axios = require('axios');
const cheerio = require('cheerio'); 

const getData = async()=>{
console.log("data");


const url = `https://etims.kra.go.ke/common/link/etims/receipt/indexEtimsReceiptData?Data=A003233471M00WDB6GNG3O3DKZ4NK`;

const {data }= await axios.get(url)

// use cherio to parse the data
const cheery= cheerio.load(data)



console.log(cheery);
}



getData()