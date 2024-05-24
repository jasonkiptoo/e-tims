const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeSite(url) {
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);
        
        const data = {};

        // Extracting data using CSS selectors
        data["Control Unit Invoice Number"] = $('td:contains("Control Unit Invoice Number")').next().text().trim();
        data["Invoice Date"] = $('td:contains("Invoice Date")').next().text().trim();
        data["Total Taxable Amount"] = $('td:contains("Total Taxable Amount")').next().text().trim();
        data["Total Tax Amount"] = $('td:contains("Total Tax Amount")').next().text().trim();
        data["Total Invoice Amount"] = $('td:contains("Total Invoice Amount")').next().text().trim();
        data["Supplier Name"] = $('td:contains("Supplier Name")').next().text().trim();

        console.log(data);
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
    }

}

scrapeSite().then(result => {

    console.log(result);
    return result
}).catch(err => console.log(err));

module.exports = { scrapeSite}



// const axios = require('axios');
// const cheerio = require('cheerio');

// async function scrapeSite() {
//     const url = `https://itax.kra.go.ke/KRA-Portal/invoiceChk.htm?actionCode=loadPage&invoiceNo=0040804130000058917`;

//     const { data } = await axios.get(url);

//     const $ = cheerio.load(data);

//     let clientDetails = {};

//     // $('table.tab3').find('tr').each((i, el) => {
//     //     const key = $(el).find('td').eq(0).text().trim().replace(/\n|\t/g, '');
//     //     const value = $(el).find('td').eq(1).text().trim().replace(/\n|\t/g, '');
//     //     if (key && value) { 
//     //         clientDetails[key] = value;
//     //     }
//     // });
//     clientDetails =$('table.tab3').find('table').each((i, el)=>{

//         console.log($(el).text().trim().replace(/\n|\t/g, ''))
//     //    return $(el).find('td').eq(0)

//     })
    
    
//     // .text().trim().replace(/\n|\t/g, '');



//     return clientDetails;
// }

// scrapeSite()
//     .then(result => {
//         console.log(result);
//         // console.log(JSON.stringify(result, null, 2));
//     })
//     .catch(err => console.log(err));
