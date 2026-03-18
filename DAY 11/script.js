// CallBack Hell
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



// Promise Chaining
    // function print(num){
    //     return new Promise((resolve,reject)=>{
    //         setTimeout(()=>{
    //             console.log(num);
    //             resolve();
    //         },1000);
    //     })
    // }
    // print(1)
    // .then(()=>print(2))
    // .then(()=>print(3))
    // .then(()=>print(4))
    // .then(()=>print(5))
    // .then(()=>print(6))
    // .then(()=>print(7))
    // .then(()=>print(8))
    // .then(()=>print(9))
    // .then(()=>print(10))



// Async function

    // Why async and await exist?
        // 1. to avoid promise chaining
        // 2. to excute asynchrounous code properly without confusion.
        // 3. to handle the promise in a better way


    // IMPORTANT !!!!
        // async function alwaysReturnsPromise



    // async function demo(){
    //     return "Async function";
    // }
    // console.log(demo());


// Await
    //  It will pause the async function until the promise returns a result.

    // USE CASE OF AWAIT
        // Always us eit in front of promise.

    // const pro = new Promise((resolve,reject)=>{
    //     setTimeout(()=>{
    //         resolve("promise resolved");
    //     },1000);
    // })

    // function getData(){
    //     pro.then((x)=>console.log(x));
    //     console.log("After promise");
    // }
    // getData()

    // It will print "After promise" then "promise resolved", which is logically not undestandable.

    // async function getData(){
    //     const value = await pro;
    //     console.log(value);
    //     // pro.then((x)=>console.log(x));
    //     // Logic of async function code 
    //     console.log("After promise");
    // }
    // getData()






// API FETCHING


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     // .then(json => console.log(json))
//     .then(data=>console.log(data))




// async function fetchData(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log(data);
//     }
//     catch (err){
//         console.log(err);
//     }
// }
// fetchData()



// WEATHER DATA FETCHING

    async function fetchData(city) {
        try {
            const API_key = "15a8822da5d5d7c6affe4e1f2c68c650";
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`);

            const data = await response.json();
            console.log("City:", city);
            console.log("Temperature:", data.main.temp);
            console.log("Humidity:", data.main.humidity);
        } catch (err) {
            console.error(err);
        }
    }
    fetchData("Gurugram")



