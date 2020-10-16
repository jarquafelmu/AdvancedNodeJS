const { createServer } = require(`http`)
const { createReadStream } = require(`fs`)
const filename = `../../powder-day.mp4`;

createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'video/mp4' });
  createReadStream(filename).pipe(res);
}).listen(3000, () => console.log(`server is running - 3000`));
