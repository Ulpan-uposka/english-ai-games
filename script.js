const questions = [
  {
    question: "I ___ to school every day.",
    answers: ["go", "goes", "gone", "going"],
    correct: 0
  },
  {
    question: "She ___ a book now.",
    answers: ["read", "reads", "reading", "is reading"],
    correct: 3
  },
  {
    question: "They ___ English at school.",
    answers: ["study", "studies", "studying", "studied"],
    correct: 0
  }
];

let current = 0;

function loadQuestion() {
  const q = questions[current];
  document.getElementById("question").innerText = q.question;
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";

  q.answers.forEach((answer, index) => {
    const btn = document.createElement("button");
    btn.innerText = answer;
    btn.onclick = () => checkAnswer(index);
    answersDiv.appendChild(btn);
  });
}

function checkAnswer(index) {
  const q = questions[current];
  const allButtons = document.querySelectorAll("#answers button");
  allButtons.forEach((btn, i) => {
    btn.disabled = true;
    btn.style.backgroundColor = i === q.correct ? "lightgreen" : (i === index ? "salmon" : "");
  });
}

document.getElementById("nextBtn").onclick = () => {
  current++;
  if (current >= questions.length) {
    document.getElementById("question").innerText = "Well done!";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("nextBtn").style.display = "none";
  } else {
    loadQuestion();
  }
};

loadQuestion();
