const questions = [
  {
    question: "Which hobby involves reading books?",
    answers: ["Drawing", "Reading", "Dancing", "Cooking"],
    correct: 1
  },
  {
    question: "Which one is a musical hobby?",
    answers: ["Swimming", "Singing", "Running", "Cycling"],
    correct: 1
  },
  {
    question: "You use a ball in ___",
    answers: ["Football", "Drawing", "Singing", "Reading"],
    correct: 0
  },
  {
    question: "Which hobby uses colors and paper?",
    answers: ["Cooking", "Reading", "Drawing", "Swimming"],
    correct: 2
  },
  {
    question: "Which one is a hobby in the kitchen?",
    answers: ["Painting", "Cooking", "Dancing", "Running"],
    correct: 1
  },
  {
    question: "Playing the guitar is a ___",
    answers: ["Sport", "Hobby", "Drink", "Subject"],
    correct: 1
  },
  {
    question: "People ___ in the pool.",
    answers: ["dance", "sing", "swim", "paint"],
    correct: 2
  },
  {
    question: "You can ___ a bike in free time.",
    answers: ["ride", "draw", "read", "eat"],
    correct: 0
  },
  {
    question: "Drawing and painting are ___ hobbies.",
    answers: ["sport", "art", "science", "music"],
    correct: 1
  },
  {
    question: "Which one is NOT a hobby?",
    answers: ["Football", "Math", "Singing", "Reading"],
    correct: 1
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
    btn.style.backgroundColor = i === q.correct ? "#d1c4e9" : (i === index ? "#f8bbd0" : "");
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
