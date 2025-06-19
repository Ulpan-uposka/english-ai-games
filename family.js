const questions = [
  {
    question: "This is my ___. She is very kind.",
    answers: ["aunt", "uncle", "brother", "grandpa"],
    correct: 0
  },
  {
    question: "My father's son is my ___.",
    answers: ["sister", "cousin", "brother", "uncle"],
    correct: 2
  },
  {
    question: "My mother's daughter is my ___.",
    answers: ["aunt", "sister", "cousin", "grandma"],
    correct: 1
  },
  {
    question: "My uncle’s son is my ___.",
    answers: ["father", "brother", "cousin", "nephew"],
    correct: 2
  },
  {
    question: "She is my mother's mother. She is my ___.",
    answers: ["grandma", "sister", "aunt", "friend"],
    correct: 0
  },
  {
    question: "He is my father. I am his ___.",
    answers: ["sister", "daughter", "cousin", "grandma"],
    correct: 1
  },
  {
    question: "My brother's sister is my ___.",
    answers: ["friend", "aunt", "sister", "mother"],
    correct: 2
  },
  {
    question: "He is my mom's dad. He is my ___.",
    answers: ["uncle", "grandpa", "dad", "brother"],
    correct: 1
  },
  {
    question: "She is my friend. She is very ___.",
    answers: ["tall", "kind", "happy", "all of them"],
    correct: 3
  },
  {
    question: "This is my ___. He is strong and funny.",
    answers: ["aunt", "dad", "sister", "grandma"],
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
    btn.style.backgroundColor = i === q.correct ? "#b2ff59" : (i === index ? "#ff8a80" : "");
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
