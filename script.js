const axios = require('axios');
const cheerio = require('cheerio');
axios.get('https://www.bestrandoms.com/random-address-in-by?quantity=6').then(html => {
    const $ = cheerio.load(html.data);
    let text = '';
    $('#main > div.container > div.col-xs-12.col-sm-9.main > div.content > ul').each((i, elem) => {
        text += `${$(elem).text()}\n`;
    });
    console.log(text);
});

