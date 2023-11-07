var i=1;
document.querySelector("input").addEventListener("click", handleClick);

function handleClick(){
     var d=document.querySelector("h1").innerHTML=i++;
     console.log(`The Number is Changed to ${d}`);
}


