 import { test } from "@playwright/test";
 test("Test to Edit Lead Details", async({page}) => { 
    await page.goto(`http://leaftaps.com/opentaps/control/main`);

    await page.locator(`#username`).fill(`Demosalesmanager`);
    await page.locator(`#password`).fill(`crmsfa`);
    await page.locator(`//input[@value='Login']`).click();
    await page.locator(`//div[@id='button']`).click();
    await page.locator(`(//a[contains(text(),'Leads')])[1]`).click();
    await page.locator(`(//a[contains(text(),'Leads')])[3]`).click();
    await page.locator(`//button[contains(text(),'Find Leads')]`).click();
    await page.locator(`(//label[contains(text(),'First name')])[3]`).fill(`Sai`);
    await page.locator(`(//a[contains(text(),'11361')])[1]`).click();
    await page.locator(`//a[contains(text(),'Edit')]`).click();
    await page.locator(`#updateLeadForm_companyName`).fill(`SaiOffice_B`);
    await page.locator(`#updateLeadForm_departmentName`).fill(`30,000,000`);
    await page.locator(`#updateLeadForm_departmentName`).fill(`Mech`);
    await page.locator(`#updateLeadForm_description`).fill(`Completing Testcase Two`);
    await page.locator(`(//input[@name='submitButton'])[1]`).click();


    const Upadated_Company_Name =  await page.locator("#viewLead_companyName_sp").innerText();
    const Upadated_annualRevenue = await page.locator("#viewLead_firstName_sp").innerText();
//     const Upadated_departmentName = 
//     const Upadated_description = await page.locator(`#updateLeadForm_description`).fill(`Completing Testcase Two`).innerText();

    console.log(Upadated_Company_Name);
     console.log(Upadated_annualRevenue);
      // console.log(Upadated_departmentName);
      //  console.log(Upadated_description);
 })