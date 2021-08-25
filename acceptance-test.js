const {openBrowser, goto, write ,click, closeBrowser,listItem, into} = require('taiko');

(async () => {
    try {
        await openBrowser({ ignoreCertificateErrors: true});
        await goto("http://localhost:8080/");
        await write("Buy some milk", into("Todo"));
        await click(button("Add Todo"))
        const res = await listItem('Buy some milk').exists()
        if(!res)  throw new Error('List item does no exist');
    } catch (err) {
        console.error(err)
    }finally{
        await closeBrowser()
    }
})();