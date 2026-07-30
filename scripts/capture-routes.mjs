import { chromium } from "@playwright/test";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const baseUrl = process.argv[2] || "http://127.0.0.1:3000";
const outputDir = process.argv[3] || "docs/redesign/screenshots/routes";
const routes = ["/tjanster", "/utbildning-ai", "/demo-appar", "/kontakt?type=app"];
const viewports = [[390, 844], [1440, 900]];

await mkdir(outputDir, { recursive: true });
const browser = await chromium.launch({ channel: "chrome", headless: true });
const results = [];

for (const route of routes) {
  for (const [width, height] of viewports) {
    const context = await browser.newContext({ viewport: { width, height }, locale: "sv-SE" });
    const page = await context.newPage();
    const errors = [];
    page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
    page.on("requestfailed", (request) => {
      const error = request.failure()?.errorText || "unknown";
      if (!(request.url().includes("_rsc=") && error === "net::ERR_ABORTED")) errors.push(`${request.url()} ${error}`);
    });
    const response = await page.goto(new URL(route, baseUrl).toString(), { waitUntil: "networkidle" });
    const slug = route.split("?")[0].replace(/^\//, "") || "home";
    const filename = `${slug}-${width}x${height}.png`;
    await page.screenshot({ path: path.join(outputDir, filename), fullPage: true, animations: "disabled" });
    results.push({ route, viewport: `${width}x${height}`, status: response?.status(), errors });
    console.log(`${route} ${width}x${height}: HTTP ${response?.status()}; errors=${errors.length}`);
    await context.close();
  }
}

await browser.close();
await writeFile(path.join(outputDir, "capture-report.json"), JSON.stringify({ baseUrl, capturedAt: new Date().toISOString(), results }, null, 2));
