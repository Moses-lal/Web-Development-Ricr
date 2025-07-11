function fun(){
   
  const fun= document.getElementById("fun1")

  fun.style.backgroundColor="blue";
  fun.style.color="white";

}


function on(){

    const circle = document.getElementById("circle")

    // circle.style.backgroundColor="yellow"
    circle.classList.add("chalo");  
    circle.classList.remove()

}

function off(){
    const circle = document.getElementById("circle")

    circle.style.backgroundColor= "white"
}

function onOff(){
   
    const bulb = document.getElementById("dursaGola")

    bulb.classList.toggle("kuchbhi")

}

function disco(color){
    const bulb = document.getElementById("teesra")

    bulb.style.backgroundColor=color
}


function OFF(){
    const bulb = document.getElementById("teersa")

    bulb.style.backgroundColor= "white"
}