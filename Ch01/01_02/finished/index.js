var delay = (seconds) => new Promise((resolves, rejects) => {
    // wait for async process to complete and then resolve it
    setTimeout(() => {
        resolves(`the long delay has ended`)
    }, seconds * 1000);
});

delay(1)
    .then(console.log)
    .then(() => 42)
    .then((number) => console.log(`hello world ${number}`));

console.log('end first tick');
