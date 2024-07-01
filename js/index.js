let computerNum = 0;
let chances = 3;
const userInput = document.getElementById("user-input");
const playBtn = document.getElementById("play-button");
const resultArea = document.getElementById("result-area");
const resetBtn = document.getElementById("reset-button");
const chanceArea = document.getElementById("chance-area");
const correctAnswer = document.getElementById("correct-answer");
const rule = document.getElementById("rule");
const historyArea = document.getElementById("history-area");

let history = [];

function pickRandom() {
  computerNum = Math.floor(Math.random() * 100 + 1);
  correctAnswer.textContent = `The correct answer is ${computerNum}`;
}

pickRandom();

userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function numberSelect(event) {
  event.preventDefault();
  const userValue = userInput.value;
  rule.classList.add("hidden");
  historyArea.classList.remove("hidden");

  if (userValue == "") {
    resultArea.textContent = `Please write a number between 100 and 1`;
    resultArea.classList.remove("hidden");
    document.getElementById("result-img").src =
      "https://media.tenor.com/GPMqRbwdDFkAAAAj/sleepy-sleeping.gif";
    return;
  }

  if (userValue > 100 || userValue < 1) {
    resultArea.textContent = `Please write a number between 100 and 1`;
    resultArea.classList.remove("hidden");
    document.getElementById("result-img").src =
      "https://media.tenor.com/GPMqRbwdDFkAAAAj/sleepy-sleeping.gif";
    return;
  }

  if (history.includes(userValue)) {
    resultArea.textContent = `You already write this number. Please write another number`;
    resultArea.classList.remove("hidden");
    document.getElementById("result-img").src =
      "https://media.tenor.com/GPMqRbwdDFkAAAAj/sleepy-sleeping.gif";
    return;
  }

  chances--;
  chanceArea.textContent = `Chances: ${chances}`;

  history.push(userValue);
  historyArea.textContent = `The numbers you put: ${history}`;
  console.log(history);

  if (userValue > computerNum) {
    resultArea.innerText = "DOWN!!";
    resultArea.classList.remove("hidden");
    document.getElementById("result-img").src =
      "https://media.tenor.com/5PPvmTH4cScAAAAi/kirby.gif";
  } else if (userValue < computerNum) {
    resultArea.innerText = "UP!!";
    resultArea.classList.remove("hidden");
    document.getElementById("result-img").src =
      "https://media.tenor.com/QKBV5lc8X4IAAAAi/kirby.gif";
  } else {
    resultArea.innerText = `That's right! The number is ${computerNum}`;
    resultArea.classList.remove("hidden");
    playBtn.disabled = true;
    document.getElementById("result-img").src =
      "https://static.wikia.nocookie.net/b4c43da4-174f-4a7a-9933-1e67c3b6dff3/scale-to-width/755";
    return;
  }

  if (chances < 1) {
    playBtn.disabled = true;
    resultArea.textContent = `I'm sorry! The answer was ${computerNum}!`;
    document.getElementById("result-img").src =
      "https://i.pinimg.com/originals/9d/b0/e8/9db0e86ec0ddaff2234edd671e713ed6.gif";
  }
}

function resetGame(event) {
  event.preventDefault();
  userInput.value = "";
  pickRandom();
  resultArea.classList.add("hidden");
  rule.classList.remove("hidden");
  chances = 3;
  chanceArea.textContent = `Chances: ${chances}`;
  playBtn.disabled = false;
  history = [];
  historyArea.classList.add("hidden");

  document.getElementById("result-img").src =
    "https://media.tenor.com/Kccs8vZdVs0AAAAj/confused-kawaii.gif";
}

playBtn.addEventListener("click", numberSelect);
resetBtn.addEventListener("click", resetGame);
