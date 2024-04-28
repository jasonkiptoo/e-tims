const axios = require('axios');
const cheerio = require('cheerio');

const getData = async () => {
  const url = `https://etims.kra.go.ke/common/link/etims/receipt/indexEtimsReceiptData?Data=A003233471M00WDB6GNG3O3DKZ4NK`;

  try {
    const { data } = await axios.get(url);
    const $ = cheerio.load(data);

    const totalAmounts = [];

    $('div.total-detail').find('div').each((index, element) => {
      const title = $(element).find('.tit').text().trim();
      const value = $(element).find('.value').text().trim();

      if (title === 'TOTAL') {
        totalAmounts.push({total:'Total' ,totalValue:value});
      }
    });

    console.log(totalAmounts);
  } catch (error) {
    console.error('Error:', error);
  }
};

getData();
