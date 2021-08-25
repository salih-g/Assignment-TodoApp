/* globals gauge*/
"use strict";
const {
    openBrowser,
    write,
    closeBrowser,
    goto,
    click,
    listItem,
    into,
    button
} = require('taiko');

beforeSuite(async () => {
    await openBrowser({
        headless: true,
        ignoreCertificateErrors: true
    })
});

afterSuite(async () => {
    await closeBrowser();
});


step("Go to website", async () => {
    await goto("http://localhost:8080/");
});

step("Add todo", async () => {
    await write("Buy some milk", into("Todo"));
    await click(button("Add Todo"))
});
step("Check given todo if exist", async () => {
    await listItem('Buy some milk').exists()
});
