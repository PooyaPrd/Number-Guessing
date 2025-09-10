let rand= Math.floor(Math.random()*100); 
let text =document.querySelector("#historyText");
let cnt=0; 

document.querySelector("#buttonArea").addEventListener('click',handler);
document.querySelector("#userGuess").addEventListener('keydown',function(event){
    if(event.key==="Enter"){
        handler();
    }
})

function handler(){
    let userGuess = Number(document.querySelector("#userGuess").value);

    if(userGuess >=1 && userGuess<=100){
        cnt++;
        document.querySelector("#cnt").innerHTML=cnt + " Try";
        if(userGuess==rand){
            text.innerHTML="You Won!"
            alert("You won on "+cnt+ " try.");
        } else if (userGuess>rand){
            text.innerHTML="Go Down!"
        } else{
            text.innerHTML="Go Up!"
        }
    }
    else{
        if(userGuess){
            alert("Please enter number betwin 1 to 100!")
        }
        
    }
}



