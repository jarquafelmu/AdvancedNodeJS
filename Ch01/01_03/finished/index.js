var delay = (seconds) => new Promise((resolves, rejects) => {
  throw new Error(`argh`)
  setTimeout(() => {
    resolves('the long delay has ended')
  }, time);
});

delay(1)
  .then(console.log)
  .then(() => 42)
  .then((number) => console.log('Hello world: ${number}'))
  .catch((err) => console.log(`error: ${err.message}`));

console.log('end first tick');
