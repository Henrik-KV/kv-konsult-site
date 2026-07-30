import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const targetUrl = process.argv[2] || "http://127.0.0.1:3000";
const outputDir = process.argv[3] || "docs/redesign/screenshots/final";
const suite = process.argv[4] || "final";

const suites = {
  baseline: [
    [390, 844],
    [768, 1024],
    [1440, 900],
    [1920, 1080],
  ],
  final: [
    [320, 568],
    [375, 812],
    [390, 844],
    [430, 932],
    [768, 1024],
    [1024, 768],
    [1280, 720],
    [1440, 900],
    [1920, 1080],
    [2560, 1440],
  ],
};

const viewports = suites[suite];
if (!viewports) {
  throw new Error(`Unknown suite "${suite}". Use baseline or final.`);
}

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch({ channel: "chrome", headless: true });
const results = [];

for (const [width, height] of viewports) {
  const context = await browser.newContext({
    viewport: { width, height },
    colorScheme: "light",
    reducedMotion: "no-preference",
    locale: "sv-SE",
  });
  const page = await context.newPage();
  const consoleErrors = [];
  const failedRequests = [];

  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });
  page.on("requestfailed", (request) => {
    const error = request.failure()?.errorText || "unknown";
    if (request.url().includes("_rsc=") && error === "net::ERR_ABORTED") return;
    failedRequests.push({
      url: request.url(),
      error,
    });
  });

  const response = await page.goto(targetUrl, {
    waitUntil: "domcontentloaded",
    timeout: 45_000,
  });
  await page.waitForTimeout(2_000);

  const metrics = await page.evaluate(() => ({
    title: document.title,
    lang: document.documentElement.lang,
    h1: Array.from(document.querySelectorAll("h1")).map((node) => node.textContent?.trim()),
    bodyWidth: document.body.scrollWidth,
    viewportWidth: document.documentElement.clientWidth,
    documentHeight: document.documentElement.scrollHeight,
  }));

  const filename = `${width}x${height}.png`;
  await page.screenshot({
    path: path.join(outputDir, filename),
    fullPage: true,
    animations: "disabled",
  });

  results.push({
    viewport: `${width}x${height}`,
    status: response?.status() ?? null,
    url: page.url(),
    ...metrics,
    horizontalOverflow: metrics.bodyWidth > metrics.viewportWidth,
    consoleErrors,
    failedRequests,
  });

  await context.close();
}

await browser.close();
await writeFile(
  path.join(outputDir, "capture-report.json"),
  `${JSON.stringify({ targetUrl, suite, capturedAt: new Date().toISOString(), results }, null, 2)}\n`,
  "utf8",
);

for (const result of results) {
  console.log(
    `${result.viewport}: HTTP ${result.status}; overflow=${result.horizontalOverflow}; consoleErrors=${result.consoleErrors.length}; failedRequests=${result.failedRequests.length}`,
  );
}
