import chromium from "@sparticuz/chromium";
import puppeteer from "puppeteer";

const apiEndpoint =
  "https://s5.sir.sportradar.com/bet9javirtuals/en/1/category/1111";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const fetchSeasonId = async ({ vflId, position }) => {
  const browser = await puppeteer.launch({
    args: process.env.NODE_ENV === "dev" ? undefined : chromium.args,
    defaultViewport:
      process.env.NODE_ENV === "dev" ? undefined : chromium.defaultViewport,
    executablePath:
      process.env.NODE_ENV === "dev"
        ? undefined
        : await chromium.executablePath(),
    headless: process.env.NODE_ENV === "dev" ? false : chromium.headless,
    ignoreHTTPSErrors: true,
  });
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
  const clickFormCell = `#sr-container > div > div > div.container.container-main.contair-full-height-flex-auto > div > div > div > div > div.panel.margin-bottom > div > div > div:nth-child(1) > table > tbody > tr:nth-child(${
    position ? position : 3
  })`;
  await page.goto(apiEndpoint);

  const bunPathHandle = await page.$(bunPath);
  if (bunPathHandle) {
    await bunPathHandle.click();
  }
  await sleep(2000);

  const achivePathHandle = await page.$(achivePath);
  if (achivePathHandle) {
    await achivePathHandle.click();
  }

  await sleep(2000);
  const clickFormCellHandle = await page.$(clickFormCell);
  if (clickFormCellHandle) {
    await clickFormCellHandle.click();
  }
  const fullUrl = page.url();
  const seasonId = fullUrl.substring(fullUrl.lastIndexOf("/") + 1);
  await browser.close();

  return seasonId;
};

if (process.env.NODE_ENV === "dev") {
  console.log(await fetchSeasonId({ vflId: 3, position: 3 }));
}

export const handler = async (event) => {
  if (event.httpMethod !== "GET") {
    throw new Error(
      `postMethod only accepts GET method, you tried: ${event.httpMethod} method.`,
    );
  }
  const { vflId, position } = event.queryStringParameters;

  if (!vflId || !position) {
    throw new Error("Please provide both vflId and position");
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify(
      await fetchSeasonId({
        vflId: Number(vflId),
        position: Number(position),
      }),
    ),
  };
  return response;
};
