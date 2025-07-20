const Words = [
  "your",
  "camp",
  "seat",
  "join",
  "wash",
  "high",
  "belt",
  "feel",
  "path",
  "flow",
  "list",
  "used",
  "task",
  "vote",
  "cold",
  "palm",
  "huge",
  "ball",
  "wore",
  "chip",
  "date",
  "bend",
  "role",
  "sick",
  "rank",
  "rice",
  "glad",
  "give",
  "some",
  "film",
  "copy",
  "show",
  "call",
  "gift",
  "deck",
  "snow",
  "burn",
  "sell",
  "form",
  "thin",
  "risk",
  "cool",
  "fine",
  "draw",
  "shot",
  "fail",
  "full",
  "note",
  "earn",
  "hint",
  "left",
  "lack",
  "card",
  "heat",
  "club",
  "rare",
  "hour",
  "move",
  "tone",
  "knew",
  "fall",
  "ever",
  "dark",
  "play",
  "mood",
  "wave",
  "area",
  "wire",
  "fold",
  "lamp",
  "plug",
  "mean",
  "list",
  "rear",
  "send",
  "else",
  "mile",
  "hook",
  "love",
  "chat",
  "game",
  "care",
  "fill",
  "bush",
  "gate",
  "vote",
  "note",
  "read",
  "zero",
  "must",
  "suit",
  "easy",
  "late",
  "wing",
  "meal",
  "line",
  "much",
  "cost",
  "past",
  "feet",
  "like",
  "when",
  "mail",
  "wake",
  "slow",
  "fact",
  "golf",
  "cold",
  "folk",
  "past",
  "soul",
  "both",
  "tone",
  "trip",
  "main",
  "melt",
  "blue",
  "luck",
  "roof",
  "fear",
  "self",
  "luck",
  "holy",
  "wait",
  "tool",
  "rich",
  "size",
  "rest",
  "mile",
  "held",
  "base",
  "true",
  "fail",
  "army",
  "sent",
  "page",
  "told",
  "roof",
  "gulf",
  "cute",
  "once",
  "fish",
  "feel",
  "tear",
  "bank",
  "knee",
  "duck",
  "pipe",
  "swim",
  "line",
  "type",
  "text",
  "stay",
  "port",
  "word",
  "kill",
  "lock",
  "pile",
  "gone",
  "walk",
  "note",
  "salt",
  "unit",
  "disk",
  "iron",
  "deny",
  "hair",
  "boss",
  "hill",
  "pull",
  "more",
  "rock",
  "huge",
  "coat",
  "user",
  "from",
  "debt",
  "cook",
  "load",
  "area",
  "sign",
  "coat",
  "main",
  "yard",
  "fair",
  "jump",
  "loan",
  "bowl",
  "vest",
  "rule",
  "neck",
  "rear",
  "find",
  "gift",
  "rate",
  "room",
  "ward",
  "just",
  "hint",
  "hide",
  "many",
  "girl",
  "cell",
  "luck",
  "hard",
  "news",
  "trap",
  "deck",
  "fuel",
  "long",
  "sake",
  "song",
  "barn",
  "ride",
  "fell",
  "yarn",
  "fool",
  "wife",
  "else",
  "role",
  "hang",
  "test",
  "coat",
  "draw",
  "race",
  "come",
  "town",
  "cost",
  "slow",
  "face",
  "hard",
  "area",
  "side",
  "park",
  "four",
  "them",
  "pipe",
  "does",
  "open",
  "army",
  "tale",
  "safe",
  "task",
  "blue",
  "type",
  "west",
  "tied",
  "down",
  "site",
  "rank",
  "gave",
  "live",
  "navy",
  "tree",
  "pass",
  "holy",
  "neck",
  "pair",
  "rain",
  "seed",
  "yarn",
  "data",
  "disk",
  "port",
  "ball",
  "page",
  "home",
  "seat",
  "gave",
  "been",
  "idea",
  "vest",
  "read",
  "cook",
  "rule",
  "want",
  "duty",
  "code",
  "bank",
  "past",
  "zone",
  "hill",
  "term",
  "bush",
  "park",
  "mood",
  "host",
  "ride",
  "club",
  "fail",
  "twin",
  "bury",
  "look",
  "game",
  "much",
  "heat",
  "tank",
  "tiny",
  "menu",
  "pull",
  "hard",
  "firm",
  "test",
  "legs",
  "four",
  "near",
  "wear",
  "thin",
  "push",
  "lamp",
  "lens",
  "coat",
  "kiss",
  "deny",
  "jury",
  "unit",
  "camp",
  "help",
  "mine",
  "like",
  "sing",
  "rear",
  "bell",
  "hype",
  "wall",
  "form",
  "rank",
  "fold",
  "your",
  "mass",
  "hero",
  "best",
  "hang",
  "rose",
  "info",
  "walk",
  "wide",
  "beat",
  "gone",
  "port",
  "wise",
  "road",
  "deal",
  "read",
  "boat",
  "kill",
  "bike",
  "feet",
  "song",
  "size",
];

let countdown = 20;
let score = 0;
let Randomword;

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

function playgame() {
  document.getElementById("answer").value = "";
  document.getElementById("answer").focus();
  Randomword = Words[Math.floor(Math.random() * 350)];

  let currentWord = Randomword.split("");

  for (let i = currentWord.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [currentWord[i], currentWord[j]] = [currentWord[j], currentWord[i]];
  }

  document.getElementById("daba1").innerText = currentWord[0].toUpperCase();
  document.getElementById("daba2").innerText = currentWord[1].toUpperCase();
  document.getElementById("daba3").innerText = currentWord[2].toUpperCase();
  document.getElementById("daba4").innerText = currentWord[3].toUpperCase();
}

function submit() {
  if (countdown <= 0 || countdown >= 60) {
    return;
  }

  if (document.getElementById("answer").value === Randomword) {
    score++;
    document.getElementById("score").innerText = score;
    document.getElementById("message").innerText = "Correct Guess";
    document.getElementById("message").style.color = "Green";
    setTimeout(play, 500);
  } else {
    document.getElementById("answer").value = "";
    document.getElementById("answer").focus();
    document.getElementById("message").innerText = "Incorrect Guess";
    document.getElementById("message").style.color = "red";
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
