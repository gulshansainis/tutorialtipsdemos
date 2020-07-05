/**
 * Tutorial: https://tutorial.tips/how-to-launch-the-firefox-browser-using-puppeteer
 */
const puppeteer = require("puppeteer");
// IIFE (Immediately Invoked Function Expression)
(async () => {
  // launch browser instance
  const browser = await puppeteer.launch({product: 'firefox', headless: false});
  // create new browser tab
  const page = await browser.newPage();
  // open desired page
  await page.goto('https://google.com');
  // close browser handle
  await browser.close();
})();