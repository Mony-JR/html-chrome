const fs = require('fs');

function readFileAsync(filepath, callback) {
  fs.readFile(filepath, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return callback(err);
    }
    callback(null, data);
  });
}

function writeFileAsync(filepath, content, callback) {
  fs.writeFile(filepath, content, 'utf8', (err) => {
    if (err) {
      console.error(err);
      return callback(err);
    }
    callback(null);
  });
}

function modifyAndWriteFile(inputFilepath, outputFilepath, modification, callback) {
  readFileAsync(inputFilepath, (err, data) => {
    if (err) return callback(err);

    const modifiedContent = `${data}\n${modification}`;
    writeFileAsync(outputFilepath, modifiedContent, (err) => {
      if (err) return callback(err);
      callback(null);
    });
  });
}

const inputFilepath = '/Users/monyjr/Desktop/LL/DemoChromDownload/js_3/in1.txt';
const output1Filepath = '/Users/monyjr/Desktop/LL/DemoChromDownload/js_3/in2.txt';
const output2Filepath = '/Users/monyjr/Desktop/LL/DemoChromDownload/js_3/in2.txt';

modifyAndWriteFile(inputFilepath, output1Filepath, 'First modification', (err) => {
  if (err) {
    console.error('Error during first modification:', err);
  } else {
    modifyAndWriteFile(output1Filepath, output2Filepath, 'Second modification', (err) => {
      if (err) {
        console.error('Error during second modification:', err);
      } else {
        readFileAsync(output2Filepath, (err, data) => {
          if (err) {
            console.error('Error reading final output:', err);
          } else {
            console.log('Final content:', data);
          }
        });
      }
    });
  }
});