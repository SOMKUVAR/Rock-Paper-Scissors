let rock = document.getElementById("rock");
let paper = document.getElementById("paper");
let scissors = document.getElementById("scissors");
// adding eventlistener
// to rock
rock.addEventListener("click", function () {
  rpsGame(this);
});
// to paper
paper.addEventListener("click", function () {
  rpsGame(this);
});
// to scissors
scissors.addEventListener("click", function () {
  rpsGame(this);
});
// rps game function
function rpsGame(yourChoise) {
  let humanChoise = yourChoise.id;
  let botChoise = numToChoise(ranToRpsInt());
  result = decideWinner(humanChoise, botChoise);
  message = finalMessage(result);
  rpsFrontEnd(humanChoise, botChoise, message);
}
// randomizing number
function ranToRpsInt() {
  return Math.floor(Math.random() * 3);
}
// getting random choise
function numToChoise(number) {
  return ["rock", "paper", "scissors"][number];
}
function decideWinner(yourChoise, botChoise) {
  let rpsDataBase = {
    rock: { rock: 0, paper: -1, scissors: 1 },
    paper: { paper: 0, scissors: -1, rock: 1 },
    scissors: { scissors: 0, rock: -1, paper: 1 },
  };

  return rpsDataBase[yourChoise][botChoise];
}
function finalMessage(yourScore) {
  if (yourScore === 1) {
    return {
      message: "You Won!",
      color: "green",
    };
  } else if (yourScore === 0) {
    return {
      message: "You Tied!",
      color: "teal",
    };
  }
  return {
    message: "You Lost!",
    color: "red",
  };
}
let imageDataBase;
function rpsFrontEnd(humanChoise, computerCoise, finalMessage) {
   imageDataBase = {
    rock: document.getElementById("rock").src,
    paper: document.getElementById("paper").src,
    scissors: document.getElementById("scissors").src,
  };
  // remove all images
  document.getElementById("rock").remove();
  document.getElementById("paper").remove();
  document.getElementById("scissors").remove();
  // create div
  let humandiv = document.createElement("div");
  let messagediv = document.createElement("div")
  let dotdiv = document.createElement("div");
  let playAgain = document.createElement("button")
  // set Attribute
  humandiv.setAttribute("id", "human");
  dotdiv.setAttribute("id", "computer");
  messagediv.setAttribute("id", "message");
  playAgain.setAttribute("id", "btn");
  //appending img
  humandiv.innerHTML = "<img src ='" + imageDataBase[humanChoise] + "'>";
  messagediv.innerHTML = "<h1 style = 'color :"+finalMessage['color']+"; font-size: 60px;'>"+finalMessage['message']+"</h1>"
  dotdiv.innerHTML = "<img src ='" + imageDataBase[computerCoise] + "'>";
  playAgain.innerHTML = "PLAY AGAIN"
  // showing img
  document.getElementById("rps").appendChild(humandiv);
  document.getElementById("rps").appendChild(messagediv)
  document.getElementById("rps").appendChild(dotdiv);
  document.getElementById("play").appendChild(playAgain)
}
let playbtn = document.getElementById('play')
playbtn.addEventListener('click',playAgain)
function playAgain(){
    location.reload();
}
