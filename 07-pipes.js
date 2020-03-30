const fs = require('fs');
const readStream = fs.createReadStream('./testText.txt', 'UTF8');
const writeStream = fs.createWriteStream('targetFile');

readStream.pipe(writeStream);