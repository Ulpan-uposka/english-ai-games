const questions = [
  {
    question: "Which one is a fruit?",
    answers: ["Carrot", "Apple", "Potato", "Tomato"],
    correct: 1
  },
  {
    question: "Which drink is healthy?",
    answers: ["Cola", "Water", "Coffee", "Juice"],
    correct: 1
  },
  {
    question: "We eat ___ for breakfast.",
    answers: ["pencil", "bread", "paper", "book"],
    correct: 1
  },
  {
    question: "I like ___ on my pizza.",
    answers: ["cheese", "juice", "milk", "water"],
    correct: 0
  },
  {
    question: "What do we drink from a cup?",
    answers: ["bread", "meat", "tea", "fish"],
    correct: 2
  },
  {
    question: "Which one is NOT a fruit?",
    answers: ["banana", "orange", "apple", "carrot"],
    correct: 3
  },
  {
    question: "Which food is sweet?",
    answers: ["cake", "fish", "rice", "bread"],
    correct: 0
  },
  {
    question: "Which food comes from cows?",
    answers: ["milk", "juice", "bread", "carrot"],
    correct: 0
  },
  {
    question: "We use a ___ to eat soup.",
    answers: ["spoon", "fork", "knife", "cup"],
    correct: 0
  },
  {
    question: "You put food on a ___.",
    answers: ["book", "plate", "pen", "glass"],
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
    btn.style.backgroundColor = i === q.correct ? "#dcedc8" : (i === index ? "#ffcdd2" : "");
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
