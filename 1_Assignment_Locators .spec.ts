 import { test } from "@playwright/test";
 test("Test to Login to TestLeaf", async({page}) => { 
    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    await page.locator(`#username`).fill(`Demosalesmanager`);
    await page.locator(`#password`).fill(`crmsfa`);
    await page.locator(`//input[@value='Login']`).click();
    // await page.click('#Login');
    await page.locator(`//div[@id='button']`).click();
    await page.locator(`//a[contains(text(),'Create Lead')]`).click();
    await page.locator(`#createLeadForm_companyName`).fill(`SaiOffice`);
    await page.locator(`#createLeadForm_firstName`).fill(`Sai`);
    await page.locator(`#createLeadForm_lastName`).fill(`Sankar`);
    await page.locator(`#createLeadForm_personalTitle`).fill(`Mr.`);
    await page.locator(`//input[@name='generalProfTitle']`).fill(`King in the North`);
    await page.locator(`#createLeadForm_annualRevenue`).fill(`10,000,000`);
    await page.locator(`#createLeadForm_departmentName`).fill(`Civil`);
    await page.locator(`#createLeadForm_primaryPhoneNumber`).fill(`8000000000`);
    await page.locator(`//input[@name='submitButton']`).click();
    const companyName = await page.locator("#viewLead_companyName_sp").innerText();
    const firstName = await page.locator("#viewLead_firstName_sp").innerText();
    const lastName = await page.locator("#viewLead_lastName_sp").innerText();
    const tittle =await page.title();


    console.log("Company Name:", companyName);
  console.log("First Name:", firstName);
  console.log("Last Name:", lastName);
//   console.log("Status:", status);
console.log("Tittle",tittle);

 
})