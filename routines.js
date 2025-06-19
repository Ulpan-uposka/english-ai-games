const questions = [
  {
    question: "I ___ up at 7 o'clock every day.",
    answers: ["wake", "sleep", "go", "wash"],
    correct: 0
  },
  {
    question: "I brush my ___ in the morning.",
    answers: ["hair", "face", "teeth", "hands"],
    correct: 2
  },
  {
    question: "We ___ breakfast at 8 a.m.",
    answers: ["drink", "have", "do", "play"],
    correct: 1
  },
  {
    question: "I go to ___ at 9 a.m.",
    answers: ["play", "school", "home", "sleep"],
    correct: 1
  },
  {
    question: "After school I ___ my homework.",
    answers: ["eat", "make", "do", "wash"],
    correct: 2
  },
  {
    question: "In the evening I ___ TV.",
    answers: ["watch", "see", "read", "listen"],
    correct: 0
  },
  {
    question: "Before sleeping I ___ my face.",
    answers: ["cook", "wash", "draw", "paint"],
    correct: 1
  },
  {
    question: "I go to bed at ___ o'clock.",
    answers: ["morning", "school", "10", "breakfast"],
    correct: 2
  },
  {
    question: "I ___ my clothes in the morning.",
    answers: ["wear", "drink", "ride", "draw"],
    correct: 0
  },
  {
    question: "I ___ my hands before eating.",
    answers: ["wash", "sleep", "close", "open"],
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
    btn.style.backgroundColor = i === q.correct ? "#c8e6c9" : (i === index ? "#ffcdd2" : "");
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
