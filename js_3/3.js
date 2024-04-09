const fs = require('fs');

function readFileContents(filePath, callback) {

  
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // Handle error if any
      console.error('Error reading file:', err);
      return;
    }
    
    callback(data);
  });
}


function printFileContents(contents) {
  console.log(contents);
}

const filePath = '/Users/monyjr/Desktop/LL/DemoChromDownload/js_3/text.txt';


readFileContents(filePath, printFileContents);
