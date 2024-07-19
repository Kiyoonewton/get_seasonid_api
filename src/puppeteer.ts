const puppeteer = require("puppeteer");
require("dotenv").config();

const apiEndpoint = "https://s5.sir.sportradar.com/bet9javirtuals/en/1/category/1111";
module.exports = async (vflId: number) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setUserAgent(
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
  );

  await page.setExtraHTTPHeaders({
    "Accept-Language": "en-US,en;q=0.9",
  });

  const bunPath = `#sr-container > div > div > div.container.container-main.contair-full-height-flex-auto > div > div > div > div > div > span > div > div > div > div > div > a:nth-child(${vflId})`;
  const achivePath =
    "#sr-container > div > div > div.menu-wrapper.menu-full-width-bg.menu-mobile-top.menu-mobile-sticky > div.container.no-padding > ul > li:nth-child(6) > a";
  const clickFormCell =
    "#sr-container > div > div > div.container.container-main.contair-full-height-flex-auto > div > div > div > div > div.panel.margin-bottom > div > div > div:nth-child(1) > table > tbody > tr:nth-child(2)";
  await page.goto(apiEndpoint);

  await page.locator(bunPath).click();
  await page.locator(achivePath).click();
  await page.locator(clickFormCell).click();
  const currentUrl = page.url();
  const seasonKey = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
  await browser.close();
  return seasonKey;
};
