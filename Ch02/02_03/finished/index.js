const fs = require(`fs`);

const readStream = fs.createReadStream(`../../powder-day.mp4`);

readStream.on(`data`, (chunk) => {
  console.log(`reading little chunk\n`, chunk);
})

readStream.on(`end`, () => {
  console.log(`read stream finished`);
})

readStream.on(`error`, (error) => {
  console.log(`an error has occured.`)
  console.error(error);
})
