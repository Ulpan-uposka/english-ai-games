
const questions = [
  {
    question: "Who is your mother's husband?",
    answers: ["Uncle", "Brother", "Father", "Cousin"],
    correct: 2
  },
  {
    question: "Who is your father's daughter?",
    answers: ["Sister", "Aunt", "Mother", "Grandma"],
    correct: 0
  },
  {
    question: "What do you call your mom’s sister?",
    answers: ["Uncle", "Grandma", "Aunt", "Sister"],
    correct: 2
  },
  {
    question: "Who is your grandmother’s son?",
    answers: ["Father", "Uncle", "Brother", "Grandpa"],
    correct: 0
  },
  {
    question: "Who is your uncle's child?",
    answers: ["Cousin", "Sister", "Aunt", "Father"],
    correct: 0
  },
  {
    question: "Who is your brother's sister?",
    answers: ["Aunt", "You", "Mother", "Grandma"],
    correct: 1
  },
  {
    question: "Who is your father’s father?",
    answers: ["Brother", "Uncle", "Grandpa", "Cousin"],
    correct: 2
  },
  {
    question: "Who is your mom’s mother?",
    answers: ["Grandma", "Sister", "Aunt", "Friend"],
    correct: 0
  },
  {
    question: "What do we call people who are very close to us and play together?",
    answers: ["Relatives", "Enemies", "Friends", "Teachers"],
    correct: 2
  },
  {
    question: "Who do you live with in a house?",
    answers: ["Friends", "Teachers", "Family", "Neighbors"],
    correct: 2
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

  if (index === q.correct) {
    document.getElementById("correctSound").play();
  } else {
    document.getElementById("wrongSound").play();
  }
}

document.getElementById("nextBtn").onclick = () => {
  current++;
  if (current >= questions.length) {
    document.getElementById("question").innerText = "🎉 Great job! You finished the quiz!";
    document.getElementById("answers").innerHTML = "";
    document.getElementById("nextBtn").style.display = "none";
  } else {
    loadQuestion();
  }
};

loadQuestion();
