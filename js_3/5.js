const fs = require('fs');

function sqArray(arr, callback) {
    if (!Array.isArray(arr)) {
        return "Please provide an array";
    }
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(callback(arr[i]));
    }
    return result;
}

let number = [1, 2, 3, 4, 5];
function square(num) {
    return num * num;
}
console.log(sqArray(number, square));


function arrayEventNum(arr, eventNum) {
    const evenNumbers = [];
    for (const num of arr) {
        if (eventNum(num)) {
            evenNumbers.push(num);
        }
    }
    return evenNumbers;
}
const numbers = [1, 2, 3, 4, 5, 6];
const eventNum = (num) => num % 2 === 0;
const evenFilteredNumbers = arrayEventNum(numbers, eventNum);
console.log(evenFilteredNumbers);


function readFileAsync(filepath, callback) {
    fs.readFile(filepath, 'utf8', (e, data) => {
        if (e) {
            console.error(e);
            callback(e);
        } else {
            callback(null, data);
        }
    });
}

const filepath = '/Users/monyjr/Desktop/LL/DemoChromDownload/js_3/in1.txt';
readFileAsync(filepath, (e, data) => {
    if (e) {
        console.error('Error reading file:', e);
    } else {
        console.log(`content: \n${data}`);
    }
});


function writeFile(filePath, content, callback) {
    fs.writeFile(filePath, content, (err) => {
        if (err) {
            callback(err);
        } else {
            callback(null);
        }
    });
}
let filePath = '/Users/monyjr/Desktop/LL/DemoChromDownload/js_3/in2.txt';
let fileContent = '[1,2,3,4,5,6,7,8,9,10]';

writeFile(filePath, fileContent, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('File has been written success.');
    }
});


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

const output1Filepath = '/Users/monyjr/Desktop/LL/DemoChromDownload/js_3/in2.txt';
const output2Filepath = '/Users/monyjr/Desktop/LL/DemoChromDownload/js_3/in3.txt';

modifyAndWriteFile(filepath, output1Filepath, 'First modification', (err) => {
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
