var delay = (seconds) => new Promise((resolves, rejects) => {
    // wait for async process to complete and then resolve it
    setTimeout(() => {
        resolves(`the long delay has ended`)
    }, seconds * 1000);
});

function delay(seconds, callback) {
    setTimeout(callback, seconds * 1000);
}

delay(1).then((message) => {
    console.log(message);
})

console.log('end first tick');
