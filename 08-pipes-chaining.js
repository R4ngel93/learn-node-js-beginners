const fs = require('fs');
const zlib = require('zlib');

const gzip = zlib.createGzip();//compress
const gunzip = zlib.createGunzip();//uncompress

const readStream = fs.createReadStream('./testText.txt', 'UTF8');
const writeStream = fs.createWriteStream('targetFile.gz');

readStream.pipe(gzip).pipe(writeStream);