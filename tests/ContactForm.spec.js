import { test, expect } from "@playwright/test";
import { user } from "./TestData";

test("@ContactForm W-Lease test", async ({ page }) => {
  await page.goto("https://demo-w-lease.newtribe.nl/en/contact");
  await page.locator('[placeholder="Name"]').fill(user.name);
  await page.locator('[placeholder="Email"]').fill(user.email);
  await page.locator('[placeholder="Email"]').press("Tab");
  await page.locator('[placeholder="Your message"]').fill(user.message);
  await page.locator('button:has-text("Send message")').click();
  await page.locator("text=Close message").click();
});

test("@ContactForm Trible test", async ({ page }) => {
  await page.goto("https://dev-tribalhands.newtribe.nl/contact");
  await page.locator("text=Accept").click();
  await page.locator('[placeholder="Name"]').fill(user.name);
  await page.locator('[placeholder="Email"]').fill(user.email);
  await page.locator("textarea").fill(user.message);
  await page.locator("text=Let`s Start!").click();
});

test("@ContactForm Trible Make request", async ({ page }) => {
  await page.goto("https://dev-tribalhands.newtribe.nl/");
  await page.locator("text=Accept").click();
  await page.locator("header >> text=Make a request").click();
  await expect(page).toHaveURL("https://dev-tribalhands.newtribe.nl/pricing");
  await page.locator("text=New project").click();
  await page.locator("text=Landing page").click();
  await page.locator("text=E-commerce").click();
  await page.locator("text=Website").click();
  await page.locator("text=CRM / CMS").click();
  await page.locator('label:has-text("Data-Intensive App")').click();
  await page.locator("text=Fullstack App").click();
  await page.locator("text=AI").click();
  await page.locator("text=Frontend").click();
  await page.locator("text=Backend").click();
  await page
    .locator(
      "text=Pick some Vue.js Angular React No elements found. Consider changing the search q >> div"
    )
    .first()
    .click();
  await page.locator('span:has-text("Angular")').first().click();
  await page
    .locator(
      "text=Pick some Java Ruby PHP Python JavaScript No elements found. Consider changing t >> div"
    )
    .first()
    .click();
  await page.locator('span:has-text("Python")').first().click();
  await page
    .locator(
      "text=1 options selected Vue.js Angular React No elements found. Consider changing the >> div"
    )
    .first()
    .click();
  await page.locator('span:has-text("React")').first().click();
  await page
    .locator(
      "text=1 options selected Java Ruby PHP Python JavaScript No elements found. Consider c >> div"
    )
    .first()
    .click();
  await page.locator('span:has-text("Java")').first().click();
  await page.locator("text=I need advice").first().click();
  await page.locator("text=I need advice").nth(1).click();
  await page.locator("text=Yes").click();
  await page.locator("textarea").fill(user.message);
  await page.locator("text=Continue").click();
  await page.locator("text=Large").click();
  await page.locator("text=Start Up Team").click();
  await page.locator(".range-slider").first().click();
  await page
    .locator(
      'text=When do we need to deliver your project? <2m2-5m>6m >> div[role="slider"] div'
    )
    .click();
  await page.locator("text=>6m").click();
  await page.locator("text=>60k").click();
  await page.locator("text=Continue").click();
  await page.locator('[placeholder="Company name"]').fill(user.comanyName);
  await page.locator('[placeholder="Name"]').fill(user.name);
  await page.locator('[placeholder="Country code"]').click();
  await page.locator('button:has-text("Ukraine (??????????????)")').click();
  await page.locator('[placeholder="Phone number"]').fill("636636373");
  await page.locator('[placeholder="Email"]').fill(user.email);
  await page.locator("text=Continue").click();
  await page.locator("text=Confirm").click();
});

test("@ContactForm JH", async ({ page }) => {
  await page.goto("https://dev-juridische-handjes.newtribe.nl/contact/");
  await page.getByRole("button", { name: "Alles Accepteren" }).click();
  await page.getByPlaceholder("Voornaam").fill(user.name);
  await page.getByPlaceholder("E-mailadres ").fill(user.email);
  await page.getByPlaceholder("Achternaam").fill(user.message);
  await page.getByPlaceholder("Telefoonnummer").fill("333333333");
  await page.locator("textarea").fill(user.message);
  await page.getByRole("link", { name: "Verstuur" }).click();
});
