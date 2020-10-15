function hideString(str, done) {
  process.nextTick(() => {
    // this is a callback since it doesn't fire in order of the
    // code on the page, it fires when it is ready
    done(str.replace(/[a-zA-Z]/g, 'X'));
  })
}

hideString("Hello World", (hidden) => {
  console.log(hidden);
});

console.log("end")
