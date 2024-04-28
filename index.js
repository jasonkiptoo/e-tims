const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeSite() {
    const url = `https://etims.kra.go.ke/common/link/etims/receipt/indexEtimsReceiptData?Data=A003233471M00WDB6GNG3O3DKZ4NK`;
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const clientDetails = [];

    $('div.topinfo').each((i, el) => {
        const text = $(el).text().replace(/\s+/g, ' ').trim(); // Replace multiple spaces with a single space
        const cleanedText = text.replace(/\n|\t/g, ''); // Remove '\n' and '\t' characters
        const lines = cleanedText.split('\n').map(line => line.trim()).filter(line => line !== '');

        clientDetails.push(lines);
    });

    // const {kraPin, supplierName, invoiceDate, invoiceNumber, Item, taxableAmount, totalVat, totalInvoice} = 

    const totalAmount= $('span.value').each((i, el)=> {return $(el).text()})


    console.log("totala", totalAmount);



    return clientDetails;
}

scrapeSite().then(result => {
    console.log(result);
}).catch(err => console.log(err));
