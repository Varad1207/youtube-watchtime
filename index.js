const puppeteer = require('puppeteer');

const videos = [
    'https://www.youtube.com/watch?v=VIDEO-ID-HERE', //insert your video links here, you can add as many as you want!!
  'https://www.youtube.com/watch?v=VIDEO-ID-HERE', //insert your video links here, you can add as many as you want!!
  'https://www.youtube.com/watch?v=VIDEO-ID-HERE' //insert your video links here, you can add as many as you want!!
];

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox', '--disable-setuid-sandbox'] });
  const page = await browser.newPage();
  for (let i = 0; i < videos.length; i++) {
    const video = videos[i];
    console.log(`Playing video ${i + 1} (${video})...`);
    await page.goto(video, { waitUntil: 'networkidle2' });
    await page.evaluate(() => {
      const videoPlayer = document.querySelector('video');
      videoPlayer.autoplay = true;
      videoPlayer.loop = true;
    });
    await page.waitForSelector('video:not([src])', { timeout: 60000 });
    console.log(`Video ${i + 1} has ended.`);
  }
  await browser.close();
})();
