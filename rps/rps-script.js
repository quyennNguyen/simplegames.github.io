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

const compScore = document.getElementById("comp-score");
const yourScore = document.getElementById("your-score");
const scoreRecord = {
  cScore: 0,
  yScore: 0,
};

const result = document.getElementById("result");

const chooseRock = () => {
  untarget();
  target(yourRock);
  let score = getScore("rock", compChoice());
  displayResult(score);
};

const choosePaper = () => {
  untarget();
  target(yourPaper);
  let score = getScore("paper", compChoice());
  displayResult(score);
};

const chooseScissor = () => {
  untarget();
  target(yourScissor);
  let score = getScore("scissor", compChoice());
  displayResult(score);
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
    scoreRecord.cScore -= score;
    compScore.innerText = scoreRecord.cScore;
    scoreRecord.yScore += score;
    yourScore.innerText = scoreRecord.yScore;
    result.innerText = "Tie!";
  } else if (score == 1) {
    scoreRecord.cScore -= score;
    compScore.innerText = scoreRecord.cScore;
    scoreRecord.yScore += score;
    yourScore.innerText = scoreRecord.yScore;
    result.innerText = "You Won!";
  } else {
    scoreRecord.cScore -= score;
    compScore.innerText = scoreRecord.cScore;
    scoreRecord.yScore += score;
    yourScore.innerText = scoreRecord.yScore;
    result.innerText = "You Lost!";
  }
};