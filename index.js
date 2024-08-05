// PUPPETEER_SKIP_CHROMIUM_DOWNLOAD = 1;
const chromium = require("@sparticuz/chromium");
const puppeteer = require("puppeteer");

const apiEndpoint =
  "https://s5.sir.sportradar.com/bet9javirtuals/en/1/category/1111";
(async (vflId) => {
  const browser = await puppeteer.launch({ headless: false });
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

  const bunPathHandle = await page.$(bunPath);
  if (bunPathHandle) {
    await bunPathHandle.click();
  }
  const achivePathHandle = await page.$(achivePath);
  if (achivePathHandle) {
    await achivePathHandle.click();
  }
  const clickFormCellHandle = await page.$(clickFormCell);
  if (clickFormCellHandle) {
    await clickFormCellHandle.click();
  }

  const currentUrl = page.url();
  const seasonKey = currentUrl.substring(currentUrl.lastIndexOf("/") + 1);
  await browser.close();
  console.log(season);
  return seasonKey;
})(3);
