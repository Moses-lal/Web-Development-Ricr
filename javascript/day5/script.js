let countdown = 10;
let score = 0;

document.getElementById("start").addEventListener("click", startgame);
document.getElementById("reset").addEventListener("click", reset);
document.getElementById("submit").addEventListener("click", submit);
document.addEventListener("keydown", keysubmit);

function startgame() {
  document.getElementById("reset").disabled = false;
  document.getElementById("submit").disabled = false;
  document.getElementById("start").disabled = true;
  document.getElementById("message").innerText =
    "guess the correct word   !!! ";

  timer();
  playgame();
}

function timer() {
  const timer = document.getElementById("timer");

  const kuchbhi = setInterval(() => {
    countdown--;
    timer.innerText = countdown;

    if (countdown <= 0) {
      clearInterval(kuchbhi);
      document.getElementById("reset").disabled = true;
      document.getElementById("submit").disabled = true;
      document.getElementById("start").disabled = false;
      document.getElementById("message").innerText = " time's  up !!! ";
    }
  }, 1000);
}

function playgame() {}

function submit() {
  if (countdown <= 0 || countdown >= 60) {
    return;
  }
  
 



  



}

function keysubmit(event) {
  const key = event.key;
  if (key === "Enter") {
    submit();
  }
}

function reset() {
  location.reload();
}
