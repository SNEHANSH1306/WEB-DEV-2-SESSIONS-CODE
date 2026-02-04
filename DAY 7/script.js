// CREATE ELEMENT
    // const para = document.createElement("p");
    // para.textContent = "This is a dynamically added paragraph";
    // console.log(para);

// APPEND ELEMENT
    // document.getElementById("content").appendChild(para);

// REMOVE ELEMENT
    // document.querySelector("#content p").remove();


// TO ADD AND SET THE ATTRIBUTE IN THE TAG
    // const image = document.createElement('img');
    // image.setAttribute('src','https://media.istockphoto.com/id/176977905/photo/footbridge-color-imagee.jpg?s=612x612&w=0&k=20&c=H2M8UnR9Q42fCLwDUpVW1LDIwVcbP9pHStJdms5NvdI=')
    // image.setAttribute('alt','IAMGGEEEEEE')
    // const gallery = document.getElementById('gallery');
    // gallery.appendChild(image);



// const childParagraph = document.querySelector("#parent p");
// const parentDiv = childParagraph.parentElement;
// console.log(parentDiv.id);


// CHILDREN
// nextElementSibiling




setInterval(()=>{
    let date = new Date();
    console.log(date);
    
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    const clock = document.getElementById('digi-clock');
    clock.textContent = hour + ':' + min + ':' + sec
    clock.textContent = `${hour}:${min}:${sec}`;
    // clock.append(hour,':',min,':',sec)
    // console.log(hour,min,sec);
},1000)