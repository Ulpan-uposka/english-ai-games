const questions = [
  {
    word: "The cat is ___ the table.",
    options: ["in", "on", "under", "between"],
    answer: "on"
  },
  {
    word: "She ___ to school every day.",
    options: ["go", "goes", "going", "gone"],
    answer: "goes"
  },
  {
    word: "They are ___ a song.",
    options: ["sing", "sings", "singing", "sang"],
    answer: "singing"
  }
];

let currentQuestion = 0;

function showQuestion() {
  const q = questions[currentQuestion];
  document.getElementById('question').textContent = q.word;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = "";
  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => checkAnswer(option);
    optionsDiv.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const q = questions[currentQuestion];
  const result = document.getElementById('result');
  if (selected === q.answer) {
    result.textContent = "✅ Correct!";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Try again!";
    result.style.color = "red";
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion >= questions.length) {
    document.getElementById('question').textContent = "🎉 Well done! You've completed the quiz.";
    document.getElementById('options').innerHTML = "";
    document.getElementById('result').textContent = "";
  } else {
    document.getElementById('result').textContent = "";
    showQuestion();
  }
}

window.onload = showQuestion;
