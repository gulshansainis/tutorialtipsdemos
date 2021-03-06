/**
 * Tutorial: https://tutorial.tips/how-to-take-a-screenshot-of-a-page-using-puppeteer
 */
const puppeteer = require("puppeteer");

// IIFE (Immediately Invoked Function Expression)
(async () => {
  // launch browser instance
  const browser = await puppeteer.launch();
  // create new browser tab
  const page = await browser.newPage();

  // open desired page
  await page.goto('https://google.com');

  // take screenshot of page
  await page.screenshot({path: 'google.png'});

  // close browser handle
  await browser.close();
})();