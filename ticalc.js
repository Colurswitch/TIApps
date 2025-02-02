const { ticalc, tifiles } = require('ticalc-usb');

await ticalc.init({supportLevel:"none"});

async function selectDevice() {
    try {
        await ticalc.choose();
    } catch (error) {
        console.error(error)
    }
}