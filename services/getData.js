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
//     return result
// }).catch(err => console.log(err));

// // module.exports = {scrapeMe, scrapeSite}


const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeSite() {
    const url = `https://itax.kra.go.ke/KRA-Portal/invoiceChk.htm?actionCode=loadPage&invoiceNo=0040804130000058920`;

    const { data } = await axios.get(url);

    const $ = cheerio.load(data);

    let clientDetails = {};

    // $('table.tab3').find('tr').each((i, el) => {
    //     const key = $(el).find('td').eq(0).text().trim().replace(/\n|\t/g, '');
    //     const value = $(el).find('td').eq(1).text().trim().replace(/\n|\t/g, '');
    //     if (key && value) { 
    //         clientDetails[key] = value;
    //     }
    // });
    clientDetails =$('table.tab3').find('table').each((i, el)=>{

        console.log($(el).text().trim().replace(/\n|\t/g, ''))
    //    return $(el).find('td').eq(0)

    })
    
    
    // .text().trim().replace(/\n|\t/g, '');



    return clientDetails;
}

scrapeSite()
    .then(result => {
        console.log(result);
        // console.log(JSON.stringify(result, null, 2));
    })
    .catch(err => console.log(err));
