const { log, error } = require('console');
const fs = require('fs');


const filePath = '/Users/monyjr/Desktop/LL/DemoChromDownload/js_6/read.txt';

  function ReadFile(filePath){
    return new Promise((res,rej)=>{
      fs.readFile(filePath,'utf8',(err,data)=>{
        if(err){
          rej(err)
        }else{
          res(data)
        }
      })
    })
  }

  ReadFile(filePath).then((data)=>log(data)).catch((error)=>log(error))
  