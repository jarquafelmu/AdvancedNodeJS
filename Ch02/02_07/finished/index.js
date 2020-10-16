const { PassThrough } = require(`stream`)
const { createReadStream, createWriteStream } = require('fs');

const readStream = createReadStream('../../powder-day.mp4')
const writeStream = createWriteStream('./copy.mp4');

const report = new PassThrough();

let total = 0;
report.on(`data`, (chunk) => {
  total += chunk.length;
  console.log(`bytes: ${total}`)
})

readStream
  .pipe(report)
  .pipe(writeStream);
