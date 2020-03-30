const FS = require('fs');

/* Create file */
FS.writeFile('testFile01', 'Hello from Node.js File System', error => {
  error ? console.error(error) : console.log('File created!');
});

/* Read file */
FS.readFile('testFile01', 'UTF8', (error, file) => {
  error ? console.error(error) : console.log('File:\n' + file);
});

/* Rename file */
FS.rename('testFile01', 'testFile', error => {
  error ? console.error(error) : console.log('File renamed');
});

/* Append file */
FS.appendFile('testFile', '\nSome data being appended', error => {
  error ? console.error(error) : console.log('Data appended');
});

/* Delete file */
FS.unlink('testFile', error => {
  error ? console.error(error) : console.log('File removed');
})