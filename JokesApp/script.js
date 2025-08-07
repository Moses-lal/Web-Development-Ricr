async function getJokes(){
    const response = await fetch("https://v2.jokeapi.dev/joke/Any?type=twopart") ;

    const data = await response.json();

    const joke = document.getElementById("welcome");

    const punchline = document.getElementById("punchline");

    joke.innerText=data.setup;

    punchline.innerText=data.delivery;

}