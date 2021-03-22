const axios = require('axios');
const cheerio = require('cheerio');
const store = require('node-persist');
store.init();

const mail = require('./mail.js');

const crawl = async () => {
  console.log('crawling...');
  const page = await axios.get('https://www.iisc.ac.in/admissions/');
  const $ = cheerio.load(page.data);

  const items = await store.getItem('items');

  const children = $('ul:not([class])').children('li');

  let newItems = [];

  let child = children.first();
  for (let i = 0; i <= children.length; i++) {
    newItems.push(child.text());
    child = child.next();
  }

  if (
    items == null ||
    items[0] == undefined ||
    items[0] == null ||
    items[0] !== newItems[0]
  ) {
    await store.setItem('items', newItems);
    mail.sendUpdateMail(newItems);
  } else {
    mail.sendNoUpdateMail();
  }
};

crawl();
