var delay = (seconds) => new Promise((resolves, rejects) => {
  if (seconds > 3) {
    rejects(new Error(`${seconds} is too long`))
  }
  setTimeout(() => {
    resolves('the long delay has ended')
  }, seconds);
});

delay(4)
  .then(console.log)
  .then(() => 42)
  .then((number) => console.log(`Hello world: ${number}`))
  .catch((err) => console.log(`error: ${err.message}`));

console.log('end first tick');
