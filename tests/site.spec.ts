import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

const routes = [
  "/",
  "/tjanster",
  "/utbildning-ai",
  "/webbsidor",
  "/sociala-medier",
  "/losningsarkitekter",
  "/kommuner",
  "/foretag",
  "/om-oss",
  "/kontakt",
  "/demo-appar",
  "/integritetspolicy",
  "/villkor",
];

for (const route of routes) {
  test(`${route} renders without browser errors or overflow`, async ({ page }) => {
    const browserErrors: string[] = [];
    const failedRequests: string[] = [];
    page.on("console", (message) => {
      if (message.type() === "error") browserErrors.push(message.text());
    });
    page.on("requestfailed", (request) => {
      const error = request.failure()?.errorText || "failed";
      const isCancelledNextPrefetch = request.url().includes("_rsc=") && error === "net::ERR_ABORTED";
      if (!isCancelledNextPrefetch) failedRequests.push(`${request.method()} ${request.url()} ${error}`);
    });

    const response = await page.goto(route, { waitUntil: "networkidle" });
    expect(response?.status()).toBe(200);
    await expect(page.locator("h1")).toBeVisible();
    await expect(page).toHaveTitle(/KV Konsult/);
    const overflow = await page.evaluate(() => Array.from(document.querySelectorAll<HTMLElement>("body *"))
      .filter((element) => { const rect = element.getBoundingClientRect(); return rect.right > window.innerWidth + 1 || rect.left < -1; })
      .slice(0, 8)
      .map((element) => ({ tag: element.tagName, className: element.className, text: element.textContent?.trim().slice(0, 60) })));
    expect(overflow).toEqual([]);
    expect(browserErrors).toEqual([]);
    expect(failedRequests).toEqual([]);
  });
}

test("major pages pass automated WCAG checks", async ({ page }) => {
  for (const route of ["/", "/tjanster", "/utbildning-ai", "/kontakt"]) {
    await page.goto(route, { waitUntil: "networkidle" });
    const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
    expect(results.violations, `${route}: ${results.violations.map((item) => `${item.id} (${item.nodes.length})`).join(", ")}`).toEqual([]);
  }
});

test("mobile menu supports focus, Escape and navigation", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  const openButton = page.getByRole("button", { name: "Öppna meny" });
  await openButton.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  await expect(page.getByRole("button", { name: "Stäng meny" })).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  await openButton.click();
  await dialog.getByRole("link", { name: /Tjänster/ }).click();
  await expect(page).toHaveURL(/\/tjanster$/);
});

test("skip link and reduced-motion fallback remain usable", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  await page.keyboard.press("Tab");
  const skip = page.getByRole("link", { name: "Hoppa till innehållet" });
  await expect(skip).toBeFocused();
  await skip.press("Enter");
  await expect(page.locator("#main-content")).toBeFocused();
  const colors = await page.locator(".story-steps h3").evaluateAll((headings) => headings.map((heading) => getComputedStyle(heading).color));
  expect(new Set(colors).size).toBe(1);
});

test("scroll story progresses through all four meaningful states", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  const stage = page.locator(".story-stage");
  const steps = page.locator(".story-steps > li");

  for (let index = 0; index < 4; index += 1) {
    await steps.nth(index).evaluate((element) => element.scrollIntoView({ block: "center" }));
    await expect(stage).toHaveAttribute("data-active", String(index));
    await expect(steps.nth(index)).toHaveClass(/is-active/);
  }

  await expect(stage.locator(".story-output")).toHaveCSS("opacity", "1");
});

test("homepage and contact remain usable at 200 percent text size", async ({ page }) => {
  await page.setViewportSize({ width: 1280, height: 900 });
  for (const route of ["/", "/kontakt"]) {
    await page.goto(route);
    await page.addStyleTag({ content: "html { font-size: 200% !important; }" });
    await expect(page.locator("h1")).toBeVisible();
    const overflow = await page.evaluate(() => Array.from(document.querySelectorAll<HTMLElement>("body *"))
      .filter((element) => { const rect = element.getBoundingClientRect(); return rect.right > window.innerWidth + 1 || rect.left < -1; })
      .slice(0, 8)
      .map((element) => ({ tag: element.tagName, className: element.className, text: element.textContent?.trim().slice(0, 60) })));
    expect(overflow).toEqual([]);
  }
});

test("contact package selection is SSR-visible and client validation is accessible", async ({ browser, page }) => {
  const noScript = await browser.newContext({ javaScriptEnabled: false });
  const noScriptPage = await noScript.newPage();
  await noScriptPage.goto("/kontakt?type=app");
  await expect(noScriptPage.getByRole("heading", { level: 1 })).toBeVisible();
  await expect(noScriptPage.locator('input[value="losning-app"]')).toBeChecked();
  await noScript.close();

  await page.goto("/kontakt?type=app");
  await page.getByRole("button", { name: /Skicka meddelandet/ }).click();
  await expect(page.locator("#name-error")).toContainText("Ange ditt namn");
  await expect(page.locator("#name")).toBeFocused();
  await expect(page.locator("#name")).toHaveAttribute("aria-invalid", "true");
});

test("canonical metadata stays on the production domain", async ({ page }) => {
  await page.goto("/utbildning-ai");
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", "https://kvkonsult.com/utbildning-ai");
  await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content", "https://kvkonsult.com/utbildning-ai");
});

test("unknown routes return the designed 404", async ({ page }) => {
  const response = await page.goto("/den-har-sidan-finns-inte");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { level: 1 })).toContainText("Här tog spåret slut");
});
