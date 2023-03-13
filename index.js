const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
    ],
  });
  const page = await browser.newPage();
  await page.goto('https://www.youtube.com/watch?v=VIDEO-ID-HERE&autoplay=0&loop=1') && console.log(`Started playing video...`);
})();
