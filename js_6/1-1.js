const { log, error } = require('console');
const fs = require('fs');

const filePath = '/Users/monyjr/Desktop/LL/DemoChromDownload/js_6/write.txt';
const content = 'Hello, world!23';

function Write(filePath) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}

function ReadFile(filePath) {
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                reject(err);
            } else {
                resolve(data);
            }
        });
    });
}


// ReadFile(filePath).then((data)=>log(data))


Write(filePath).then((data)=>log(data))