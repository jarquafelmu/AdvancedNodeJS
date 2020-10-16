const { createReadStream, createWriteStream } = require('fs');

const readStream = createReadStream('../../powder-day.mp4');
const writeStream = createWriteStream('./copy.mp4');

readStream.on('data', (chunk) => {
    const result = writeStream.write(chunk);
    if (!result) {
        // hose is full, stop sending data
        console.log(`backpressure`);
        readStream.pause();
    }
});

readStream.on('error', (error) => {
    console.log('an error occurred', error.message);
});

readStream.on('end', () => {
    writeStream.end();
});

writeStream.on(`drain`, () => {
    console.log(`drained`);
    readStream.resume();
})

writeStream.on('close', () => {
    process.stdout.write('file copied\n');
})
