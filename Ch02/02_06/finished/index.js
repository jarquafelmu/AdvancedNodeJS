const { createReadStream, createWriteStream } = require('fs');

const writeStream = createWriteStream('./file.txt');

process.stdin.pipe(writeStream)

// console:
// echo "Hello World" | node .
