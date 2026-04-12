// 🔊 âm thanh
const soundPass = new Audio("https://www.soundjay.com/human/sounds/applause-8.mp3");
const soundFail = new Audio("https://www.soundjay.com/misc/sounds/fail-buzzer-01.mp3");

// ===== RANDOM 20 CÂU =====
function generateQuiz() {
  let quiz = [];

  for (let i = 0; i < 20; i++) {
    let a = Math.floor(Math.random() * 900) + 100;
    let b = Math.floor(Math.random() * 900) + 100;

    let type = Math.floor(Math.random() * 4);
    let question, correct;

    if (type === 0) {
      question = `${a} + ${b} = ?`;
      correct = a + b;
    } else if (type === 1) {
      if (a < b) [a, b] = [b, a];
      question = `${a} - ${b} = ?`;
      correct = a - b;
    } else if (type === 2) {
      b = Math.floor(Math.random() * 9) + 2;
      question = `${a} x ${b} = ?`;
      correct = a * b;
    } else {
      b = Math.floor(Math.random() * 9) + 2;
      correct = a;
      question = `${a * b} / ${b} = ?`;
    }

    let answers = [correct];
    while (answers.length < 4) {
      let fake = correct + Math.floor(Math.random() * 50) - 25;
      if (!answers.includes(fake)) answers.push(fake);
    }

    answers.sort(() => Math.random() - 0.5);

    quiz.push({
      question,
      answers,
      correct: answers.indexOf(correct)
    });
  }

  return quiz;
}

// ===== STATE =====
let quiz, current, userAnswers;

// ===== START =====
function startQuiz() {
  document.getElementById("startScreen").style.display = "none";
  document.getElementById("quizApp").style.display = "flex";

  quiz = generateQuiz();
  current = 0;
  userAnswers = new Array(quiz.length).fill(null);

  loadQuestion();
  renderSidebar();
}

// ===== LOAD QUESTION =====
function loadQuestion() {
  const q = quiz[current];

  document.getElementById("question").innerText =
    `Câu ${current + 1}: ${q.question}`;

  let percent = ((current + 1) / quiz.length) * 100;
  document.getElementById("progressBar").style.width = percent + "%";
  document.getElementById("progressText").innerText =
    `Câu ${current + 1} / ${quiz.length}`;

  const div = document.getElementById("answers");
  div.innerHTML = "";

  q.answers.forEach((ans, i) => {
    const btn = document.createElement("button");
    btn.innerText = ans;

    if (userAnswers[current] === i) {
      btn.classList.add("selected");
    }

    btn.onclick = () => {
      userAnswers[current] = i;
      loadQuestion();
      renderSidebar();
    };

    div.appendChild(btn);
  });

  updateButtons();
}

// ===== SIDEBAR =====
function renderSidebar() {
  const sidebar = document.getElementById("sidebar");
  sidebar.innerHTML = "";

  quiz.forEach((_, i) => {
    const btn = document.createElement("button");
    btn.innerText = i + 1;

    if (userAnswers[i] !== null) btn.classList.add("answered");
    if (i === current) btn.classList.add("active");

    btn.onclick = () => {
      current = i;
      loadQuestion();
      renderSidebar();
    };

    sidebar.appendChild(btn);
  });
}

// ===== BUTTON =====
function updateButtons() {
  const nextBtn = document.getElementById("nextBtn");
  const submitBtn = document.getElementById("submitBtn");

  if (!userAnswers.includes(null)) {
    nextBtn.style.display = "none";
    submitBtn.style.display = "block";
  } else {
    nextBtn.style.display = "block";
    submitBtn.style.display = "none";
  }
}

function nextQuestion() {
  if (current < quiz.length - 1) {
    current++;
    loadQuestion();
    renderSidebar();
  }
}

function prevQuestion() {
  if (current > 0) {
    current--;
    loadQuestion();
    renderSidebar();
  }
}

// ===== NỘP BÀI =====
function submitQuiz() {
  let correct = 0;
  let html = `<h2>Kết quả</h2>`;

  quiz.forEach((q, i) => {
    let isCorrect = userAnswers[i] === q.correct;
    if (isCorrect) correct++;

    html += `
      <div style="margin:10px;padding:10px;border-radius:10px;
      background:${isCorrect ? '#e8f5e9' : '#ffebee'}">
      <b>Câu ${i+1}</b>: ${isCorrect ? "✔ Đúng" : "✖ Sai"}
      </div>
    `;
  });

  let score = (correct / quiz.length) * 10;

  // 🔊 âm thanh
  if (score >= 5) {
    soundPass.play();
  } else {
    soundFail.play();
  }

  html = `
    <h1>Điểm: ${score.toFixed(1)} / 10</h1>

    <button onclick="restartQuiz()" 
      style="padding:12px;margin:10px 0;background:#2196f3;color:white;border:none;border-radius:10px;">
      🔄 Làm lại
    </button>

    <hr>
  ` + html;

  document.getElementById("quizApp").innerHTML = html;
}

// ===== RESET KHÔNG LỖI =====
function restartQuiz() {
  quiz = generateQuiz();
  current = 0;
  userAnswers = new Array(quiz.length).fill(null);

  document.getElementById("quizApp").innerHTML = `
    <div class="sidebar" id="sidebar"></div>

    <div class="quiz-container">

      <div class="progress">
        <div id="progressBar"></div>
      </div>
      <p id="progressText"></p>

      <h2 id="question"></h2>
      <div id="answers"></div>

      <div class="buttons">
        <button onclick="prevQuestion()">⬅ Quay lại</button>
        <button id="nextBtn" onclick="nextQuestion()">Tiếp theo ➡</button>
        <button id="submitBtn" onclick="submitQuiz()" style="display:none;">✅ Nộp bài</button>
      </div>

    </div>
  `;

  loadQuestion();
  renderSidebar();
}
// ===== RUNG TẤT CẢ NÚT =====
document.addEventListener("click", function(e) {
  if (e.target.tagName === "BUTTON") {
    e.target.classList.add("shake");

    setTimeout(() => {
      e.target.classList.remove("shake");
    }, 250);
  }
});