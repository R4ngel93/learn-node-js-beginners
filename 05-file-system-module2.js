const FS = require('fs');

/* Make directory */
FS.mkdir('folder_01', error => {
  error ? console.error(error) : console.log('Folder created');
});

/* Remove directory */
FS.rmdir('folder_01', error => {
  error ? console.error(error) : console.log('Folder removed');
});

/* Read directory */
FS.readdir('./', (error, files) => {
  error ? console.error(error) : console.log('Files:\n' + files);
});