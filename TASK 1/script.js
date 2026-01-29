// TASK 1

    const profile = document.getElementById("profile");
    profile.style.backgroundColor = 'aqua';
    profile.style.padding = '15px';
    profile.style.textAlign = 'Center'

// TASK 2

    const highlight = document.getElementsByClassName("important");
    console.log(highlight)
    for(let i = 0;i<highlight.length; i++){
        
        highlight[i].style.color = 'Red';
        highlight[i].style.fontSize = '50px';
    }
    
    
    console.log(highlight.length)