
document.addEventListener("keydown",startgame)


function startgame(event){
  const check=event.key;

  if(check==="r"){
    const ball=document.getElementById("ball")

    ball.style.backgroundColor="yellow"
    
    ball.style.transform="translateX(300px)";
    ball.style.transition="transform 2s";
    
    
  }

  else{
    document.getElementById("space").textContent= "please press r key  to play ";
  }

}

function reset() {
  location.reload();
}
