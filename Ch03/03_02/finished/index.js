const { createServer } = require('http');
const { stat, createReadStream } = require('fs');
const { promisify } = require('util');
const fileName = '../../powder-day.mp4';
const fileInfo = promisify(stat);

createServer(async (req, res) => {
  const { size } = await fileInfo(fileName);
  const range = req.headers.range;
  if (range) {
    // handle request
    let [start, end] = range.replace(/bytes=/g, '').split(`-`);
    start = parseInt(start, 10);
    // if end doesn't exist then create our own end which is size of the video file minus 1
    end = end ? parseInt(end, 10) : size - 1;

    res.writeHead(206, { // 206 says we are only sending partial data
      'Content-Range': `bytes ${start}-${end}/${size}`,
      'Accept-Ranges': `bytes`,
      'Content-Length': (end - start) + 1,
      'Content-Type': 'video/mp4'
    });

    createReadStream(fileName, { start, end }).pipe(res);

  } else {
    res.writeHead(200, { // 200 says we are sending everything
      'Content-Length': size,
      'Content-Type': 'video/mp4'
    });

    createReadStream(fileName).pipe(res);
  }
}).listen(3000, () => console.log('server running - 3000'));
