// function handleChange(event){
//     console.log(event);
//     document.getElementById("output").textContent = "Change detected";  
// }


document.getElementById("MyInput").addEventListener("change",(event)=>{
    // Here event is the synthetic event which comes under addEventListner's callback function. It will print the event object which stores all information about the tag.
    console.log(event.target.value);
    // event.target will print the targeted element and event.target.value will print the user input value.
    document.getElementById("output").textContent = "Change Detected";
})