const { Transform } = require(`stream`)

class ReplaceText extends Transform {
  constructor(char) {
    super();
    this.replaceChar = char
  }

  _transform(chunk, encoding, callback) {
    const transformChunk = chunk.toString()
      .replace(/[a-zA-Z0-9]/g, this.replaceChar);
    this.push(transformChunk);
    callback();
  }

  _flush(callback) {
    this.removeListener(`more stuff is being passed...`);
    callback();
  }
}

let xStream = new ReplaceText('x');

process.stdin.pipe(xStream).pipe(process.stdout)
