import { test, expect } from "@playwright/test";
import { user } from "./TestData";

test("test", async ({ page }) => {
  await page.goto("https://demo-bloemenmaker.newtribe.nl/");
  await page.getByRole("button", { name: "Alles accepteren" }).click();
  await page.getByText("NL").click();
  await page
    .getByRole("banner")
    .locator("span")
    .filter({ hasText: "EN" })
    .click();
  await page.getByRole("banner").getByRole("link", { name: "Shop" }).click();
  await page.locator(".add-to-cart").first().click();
  await page.getByRole("button", { name: "View extra" }).click();
  await page
    .locator("label")
    .filter({ hasText: "€ 49.99" })
    .locator("span")
    .click();
  await page.getByRole("button", { name: "Add to cart" }).click();
  await page.getByText("Continue to checkout").click();
  await page.getByPlaceholder("First name *").click();
  await page.getByPlaceholder("First name *").fill(user.name);
  await page.getByPlaceholder("First name *").press("Tab");
  await page.getByPlaceholder("Last name *").fill(user.lastname);
  await page.getByPlaceholder("Street *").click();
  await page.getByPlaceholder("Zip code *").click();
  await page.getByPlaceholder("Zip code *").fill("1111AA");
  await page.getByPlaceholder("Additional").click();
  await page.getByPlaceholder("Additional").fill("1");
  await page.getByPlaceholder("Phone number").click();
  await page.getByPlaceholder("Phone number").fill("+31 (0) 636 636 363");
  await page.getByPlaceholder("Special instructions (optional)").click();
  await page
    .getByPlaceholder("Special instructions (optional)")
    .fill(user.message);
  await page.getByRole("heading", { name: "Delivery date" }).click();
  await page
    .getByRole("button", { name: "Thursday, December 22, 2022" })
    .click();
  await page.getByText("Confirm").click();
  await page.getByRole("button", { name: "Go to next step" }).click();
  await page.getByPlaceholder("Email *").click();
  await page.getByPlaceholder("Email *").fill(user.email);
  await page.getByPlaceholder("First name *").click();
  await page.getByPlaceholder("First name *").fill("TestMyName");
  await page.getByPlaceholder("First name *").press("Tab");
  await page.getByPlaceholder("Last name *").fill("TestLastName");
  await page.getByPlaceholder("Last name *").press("Tab");
  await page.getByPlaceholder("Phone number *").fill("+31 (0) 123 341 123");
  await page.getByPlaceholder("Zip code").click();
  await page.getByPlaceholder("Zip code").fill("1111AA");
  await page.getByPlaceholder("Additional").click();
  await page.getByPlaceholder("Additional").fill("1");
  await page
    .locator("div")
    .filter({ hasText: "Go to next step" })
    .nth(4)
    .click();
  await page
    .getByText(
      "Select your bankINGTriodos BankASN BankSNS BankRegioBankABN AmroRabobankVan Lans"
    )
    .click();
  await page.getByRole("listitem").filter({ hasText: "ING" }).click();
});
