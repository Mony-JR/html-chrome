function j1(){
    return new Promise (res=>{
    setTimeout(()=>{
        console.log("Hello J1");
        res()

    },4000)}
)
}

let i=0
function j3(){
    return new Promise(res=>{
        setTimeout(()=>{
           console.log("Hello J3");
           res()
           i=90;
       },8000)   
       })
}

function j2(){
    return new Promise(res=>{
     setTimeout(()=>{
        console.log("Hello J2");
        res()
    },1000)   
    })
    
}


function log(){
    return new Promise(res=>{
       console.log(i); 
       
    })
    
}

const work=async()=>{
    j3()
    await log()
    console.log(i);
    return j3().then(()=>j2()).then(()=>j1()).then(()=>console.log(i))
    
    
}

work()


