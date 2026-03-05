// var a=10;
// console.log(a);
// function demo(){
//     let b=20;
//     console.log(b)
// }
// demo()

//callback hell
    // setTimeout(()=>{
    //     console.log("a");
    //     setTimeout(()=>{
    //         console.log("b");
    //         setTimeout(()=>{
    //             console.log("c");
    //             setTimeout(()=>{
    //                 console.log("d");
    //                 setTimeout(()=>{
    //                     console.log("e")
    //                 },1000)
    //             },1000)
    //         },1000)
    //     },1000)
    // },1000)

//promises

let pro = new Promise((resolve,reject)=>{
    let proposal="false"
    if(proposal==="true"){
        resolve()
    }
    else{
        reject()
    }
})
pro.then(()=>console.log("proposal accepted"))
.catch(()=>console.log("proposal rejected"))

// Same code woth function syntax

function pro(){
return new Promise((resolve,reject)=>{
    let proposal="false"
    if(proposal==="true"){
        resolve()
    }
    else{
        reject()
    }
})
}
pro().then(()=>console.log("proposal accepted"))
.catch(()=>console.log("proposal rejected"))
.finally(()=>console.log("Will run everytime when promise called"))

// Event loop: It is a constantly running process that checks the call stack and the task queue. If the call stack is empty, it takes the first task from the task queue and pushes it to the call stack.

