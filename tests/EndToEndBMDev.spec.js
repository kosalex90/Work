import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://bloemenmaker.nl/");
  await page.locator("text=Alles accepteren").click();
  await page.locator("text=NL").click();
  await page.locator('header span:has-text("EN")').click();
  await page.locator('img[alt="user"]').click();
  await expect(page).toHaveURL("https://bloemenmaker.nl/sign-in");
  await page.locator('[placeholder="Email"]').click();
  await page.locator('[placeholder="Email"]').fill("aqa@nta.io");
  await page.locator('[placeholder="Email"]').press("Tab");
  await page.locator('[placeholder="Password"]').fill("Emel9loh!");
  await page.locator('button:has-text("Sign in")').click();
  await expect(page).toHaveURL("https://bloemenmaker.nl/profile-page");
  await page.locator('img[alt="Bloemenmaker"]').click();
  await expect(page).toHaveURL("https://bloemenmaker.nl/");
  await page.locator("header >> text=Contact us").click();
  await expect(page).toHaveURL("https://bloemenmaker.nl/contact");
  await page.locator("text=Send").click();
  await page
    .locator('text=falsereceive our newsletter >> [placeholder="email"]')
    .click();
  await page
    .locator('text=falsereceive our newsletter >> [placeholder="email"]')
    .fill("kkk");
  await page.locator("text=falsereceive our newsletter >> button").click();
  await page.locator("header >> text=Home").click();
  await expect(page).toHaveURL("https://bloemenmaker.nl/");
  await page.locator("header >> text=Shop").click();
  await expect(page).toHaveURL("https://bloemenmaker.nl/shop");
  await page.locator(".add-to-cart").first().click();
  await page.locator("text=Continue to checkout").click();
  await expect(page).toHaveURL("https://bloemenmaker.nl/checkout");
  await page.locator("text=Continue shopping").first().click();
  await expect(page).toHaveURL("https://bloemenmaker.nl/shop");
  await page.locator('img[alt="basket"]').click();
  await page.locator("text=Remove").click();
  await page.locator("text=Remove").nth(3).click();
  await page.locator("text=Go to shop").click();
  await page.locator('img[alt="user"]').click();
  await expect(page).toHaveURL("https://bloemenmaker.nl/profile-page");
  await page
    .locator("text=ProfileOrder HistoryFavouritesPasswordLog out >> button")
    .click();
  await page.locator("text=Yes").click();
  await expect(page).toHaveURL("https://bloemenmaker.nl/sign-in");
});
