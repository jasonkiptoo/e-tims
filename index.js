const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeSite(keyword) {
	const url = `https://etims.kra.go.ke/common/link/etims/receipt/indexEtimsReceiptData?Data=A003233471M00WDB6GNG3O3DKZ4NK`;
	const { data } = await axios.get(url);
	
	const $ = cheerio.load(data);

	
	const spans = [];
$('span').each((_idx, el) => {
	const span = $(el).text();
	spans.push(span);
});

return spans;
}

const keyword = "coffee"; // change with any keyword you want
scrapeSite(keyword).then(result => {
	console.log(result)
	}).catch(err => console.log(err));