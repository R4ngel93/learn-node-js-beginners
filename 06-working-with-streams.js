/* Use it for larger files */
const fs = require('fs');
const readStream = fs.createReadStream('./testText.txt', 'UTF8');
const writeStream = fs.createWriteStream('target');

readStream.on('data', chunk => {
  writeStream.write(chunk);
})
