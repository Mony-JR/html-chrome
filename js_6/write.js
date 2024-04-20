const { log } = require('console')
const fs=require('fs')


const conect="Mony JR"
const fileP="/Users/monyjr/Desktop/LL/DemoChromDownload/js_6/write.txt"

function Write(fileP,conect){
    return new Promise((res,rej)=>{
    fs.writeFile(fileP,conect,'utf8',(err)=>{
        if(err){
            rej(err)
        }else{
            res("Successfull!")
        }
    })
    })
}

Write(fileP,conect).then((data)=>log(data))



function ReadFile(fileP){
    return new Promise((res,rej)=>{
        fs.readFile(fileP,'utf8',(err,data)=>{
            if(err){
                rej(err)
            }else{
                res(data)
            }
        })
    })
}

ReadFile(fileP).then((data)=>log(data))