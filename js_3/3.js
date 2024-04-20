const { log } = require('console');
const fs = require('fs');

function readFileContents(filePath,callback) {
  
  
 fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // Handle error if any
      console.error('Error reading file:', err);
    }
    callback(data)
  });
  
}



const filePath = '/Users/monyjr/Desktop/LL/DemoChromDownload/js_3/text.txt';

readFileContents(filePath,mx)

function mx(data){
  log(data)
}

// const jj=function mx(data){return data}



