const fs = require('fs');

function writeFileContents(filePath, content, callback) {
  fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      callback();
    }
  });
}

const filePath = '/Users/monyjr/Desktop/LL/DemoChromDownload/js_3/text.txt';
const content = 'Hello, world!22';

writeFileContents(filePath, content, () => {
  console.log('File writing complete.');
});
