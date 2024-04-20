

function me(){
    return new Promise(res=>{
        
           setTimeout(()=>{
            console.log("ME 3000");
            res()
           },1000)
           
        })
    
}

function me1(k){
    if(k){
       return new Promise(res=>{
        console.log("First");
           setTimeout(()=>{
            console.log("Hello await");
            res()
           },5000)
           
        })
        
    }
    
}
function me2(){

    return new Promise(res=>{
       console.log("Hello ME2"); 
       res()
    })
        
   
    
}

 const work=async ()=>{
     try{
        await me1(2)
        await me()
        await me2()
    }catch{
        console.log("error");
    }
}

 work()





 
// function me(){
//     console.log("Hello");
// }

// function me1(k){
//     if(k){
//        console.log("Hello ME"); 
//     }
    
// }

// const work=()=>{
//     Promise.resolve()
//     .then(me()).then(me1(1))
// }

// work()