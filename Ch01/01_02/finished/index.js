var delay = (seconds) => new Promise((resolves, rejects) => {
    // wait for async process to complete and then resolve it
    setTimeout(resolves, seconds * 1000);
});

function delay(seconds, callback) {
    setTimeout(callback, seconds * 1000);
}

delay(1).then(() => {
    console.log('the delay has finished');
})

console.log('end first tick');
