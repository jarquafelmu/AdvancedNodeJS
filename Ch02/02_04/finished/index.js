const { createReadStream, createWriteStream, WriteStream } = require('fs');
const readStream = createReadStream('../../powder-day.mp4'); // read data one chunk at a time
const writeStream = createWriteStream(`./copy.mp4`); // write data one chunk at a time

readStream.on('data', (chunk) => {
    writeStream.write(chunk);
});

readStream.on('error', (error) => {
    console.log('an error occurred', error.message);
});

readStream.on('end', () => {
    writeStream.end();
});

writeStream.on(`close`, () => {
    process.stdout.write(`file copied\n`);
})
