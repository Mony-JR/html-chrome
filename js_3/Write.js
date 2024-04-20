const fs=require('fs')

function writeFile(path,content){
    fs.writeFile(path,content,'utf8',(err)=>{
        if(err){
            
        }
    })
}

let content="Hello"
const path="/Users/monyjr/Desktop/LL/DemoChromDownload/js_3/in1.txt"

writeFile(path,content)