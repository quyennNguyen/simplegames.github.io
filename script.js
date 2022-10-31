//  rock paper scissor
const yourRock = document.getElementById("your-rock");
const yourPaper = document.getElementById("your-paper");
const yourScissor = document.getElementById("your-scissor");

const compRock = document.getElementById("comp-rock");
const compPaper = document.getElementById("comp-paper");
const compScissor = document.getElementById("comp-scissor");

const targets = [
  yourRock,
  yourPaper,
  yourScissor,
  compRock,
  compPaper,
  compScissor,
];

const result = document.getElementById("result");

const chooseRock = () => {
  untarget();
  target(yourRock);
  displayResult(getScore("rock", compChoice()));
};

const choosePaper = () => {
  untarget();
  target(yourPaper);
  displayResult(getScore("paper", compChoice()));
};

const chooseScissor = () => {
  untarget();
  target(yourScissor);
  displayResult(getScore("scissor", compChoice()));
};

const target = (target) => {
  target.style.background = "#f2cc8f";
};
const untarget = () => {
  targets.forEach((target) => (target.style.background = "#f4f1de"));
};

const compChoice = () => {
  const choices = ["rock", "paper", "scissor"];
  let num = Math.floor(Math.random() * 3);

  if (num == 0) {
    target(compRock);
  } else if (num == 1) {
    target(compPaper);
  } else {
    target(compScissor);
  }

  return choices[num];
};

const getScore = (yourChoice, compChoice) => {
  let score = 0;

  if (yourChoice == compChoice) {
    score = 0;
  } else if (yourChoice == "rock" && compChoice == "scissor") {
    score = 1;
  } else if (yourChoice == "paper" && compChoice == "rock") {
    score = 1;
  } else if (yourChoice == "scissor" && compChoice == "paper") {
    score = 1;
  } else {
    score = -1;
  }

  return score;
};

const displayResult = (score) => {
  if (score == 0) {
    result.innerText = "Tie!";
  } else if (score == 1) {
    result.innerText = "You Won!";
  } else {
    result.innerText = "You Lost!";
  }
};
