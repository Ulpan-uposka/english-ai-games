const questions = [
  {
    question: "Which subject teaches numbers and equations?",
    answers: ["Math", "Art", "History", "Music"],
    correct: 0
  },
  {
    question: "Which subject helps you learn about the past?",
    answers: ["English", "Science", "History", "PE"],
    correct: 2
  },
  {
    question: "We draw and paint in ___ class.",
    answers: ["Math", "Art", "PE", "Science"],
    correct: 1
  },
  {
    question: "We run and play games in ___ class.",
    answers: ["English", "Art", "PE", "Music"],
    correct: 2
  },
  {
    question: "We sing songs in ___ class.",
    answers: ["Math", "Music", "PE", "Geography"],
    correct: 1
  },
  {
    question: "We read and write in ___ class.",
    answers: ["English", "Math", "History", "PE"],
    correct: 0
  },
  {
    question: "We learn about the Earth in ___ class.",
    answers: ["Science", "Math", "Geography", "Art"],
    correct: 2
  },
  {
    question: "We do experiments in ___ class.",
    answers: ["Science", "Art", "Math", "Music"],
    correct: 0
  },
  {
    question: "In ___ class we learn to speak properly.",
    answers: ["English", "Art", "History", "PE"],
    correct: 0
  },
  {
    question: "We learn about computers in ___ class.",
    answers: ["ICT", "PE", "Music", "History"],
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
    btn.style.backgroundColor = i === q.correct ? "#c5e1a5" : (i === index ? "#ef9a9a" : "");
  });

  if (index === q.correct) {
    document.getElementById("correctSound").play();
  } else {
    document.getElementById("wrongSound").play();
  }
}

document.getElementById("nextBtn").onclick = () => {
  current++;
  if (current >= questions.length) {
    document.getElementById("question").innerText = "🎉 Well done! You finished!";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("nextBtn").style.display = "none";
  } else {
    loadQuestion();
  }
};

loadQuestion();
