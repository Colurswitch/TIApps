const { ticalc, tifiles } = require('ticalc-usb');

ticalc.init({supportLevel:"none"}).then((result) => {
    
}).catch((err) => {
    console.log(err);
});

/**
 * Asynchronously selects a device using the ticalc library.
 * Attempts to choose a connected calculator device.
 * Logs an error to the console if the selection fails.
 */

async function selectDevice() {
    try {
        await ticalc.choose();
    } catch (error) {
        console.error(error)
    }
}