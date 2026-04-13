const questionBank = [
    { q: "Kết quả của phép tính: 452 + 316 là?", a: ["768", "769", "758", "668"], correct: 0 },
    { q: "Tìm x, biết: x : 4 = 12", a: ["x = 3", "x = 8", "x = 48", "x = 16"], correct: 2 },
    { q: "Số lớn nhất trong các số: 8521, 8512, 8251, 8152 là?", a: ["8512", "8521", "8251", "8152"], correct: 1 },
    { q: "Một hình vuông có cạnh 6cm. Chu vi hình vuông đó là?", a: ["12cm", "24cm", "36cm", "20cm"], correct: 1 },
    { q: "Tháng nào sau đây có 31 ngày?", a: ["Tháng 4", "Tháng 6", "Tháng 8", "Tháng 9"], correct: 2 },
    { q: "Giá trị của biểu thức 100 - 20 * 3 là?", a: ["240", "40", "60", "80"], correct: 1 },
    { q: "8m 5cm = ... cm?", a: ["85cm", "805cm", "850cm", "8005cm"], correct: 1 },
    { q: "Có 24 cái kẹo chia đều cho 4 bạn. Hỏi mỗi bạn có mấy cái kẹo?", a: ["4 cái", "5 cái", "6 cái", "8 cái"], correct: 2 },
    { q: "Số liền sau của số 999 là?", a: ["998", "1000", "1001", "900"], correct: 1 },
    { q: "Hình tròn có bán kính 5cm, đường kính của hình tròn đó là?", a: ["5cm", "10cm", "15cm", "20cm"], correct: 1 },
    { q: "7 nhân mấy bằng 63?", a: ["7", "8", "9", "6"], correct: 2 },
    { q: "Kết quả của 96 : 3 là?", a: ["32", "33", "31", "30"], correct: 0 },
    { q: "Một hình chữ nhật có chiều dài 8cm, chiều rộng 5cm. Chu vi là?", a: ["13cm", "40cm", "26cm", "20cm"], correct: 2 }
];

let questions = [];
let currentIdx = 0;
let userAnswers = [];

// Khởi tạo âm thanh
const audioWin = new Audio('https://www.myinstants.com/media/sounds/applause.mp3');
const audioLose = new Audio('https://www.myinstants.com/media/sounds/sad-meow-song.mp3');

function stopAllAudio() {
    audioWin.pause();
    audioWin.currentTime = 0;
    audioLose.pause();
    audioLose.currentTime = 0;
}

function prepareQuestions() {
    let shuffled = [...questionBank].sort(() => 0.5 - Math.random());
    questions = shuffled.slice(0, 10);
    userAnswers = new Array(questions.length).fill(null);
}

function initSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.innerHTML = '';
    questions.forEach((_, i) => {
        const btn = document.createElement('button');
        btn.innerText = i + 1;
        btn.id = `side-btn-${i}`;
        btn.onclick = () => jumpToQuestion(i);
        sidebar.appendChild(btn);
    });
}

function startQuiz() {
    stopAllAudio();
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('quizApp').style.display = 'flex';
    document.getElementById('resultBox').style.display = 'none';
    document.getElementById('quizBody').style.display = 'block';
    currentIdx = 0;
    prepareQuestions();
    initSidebar();
    showQuestion();
}

function showQuestion() {
    const q = questions[currentIdx];
    document.getElementById('question').innerText = q.q;
    document.getElementById('progressText').innerText = `${currentIdx + 1} / ${questions.length}`;
    document.getElementById('progressBar').style.width = ((currentIdx + 1) / questions.length) * 100 + '%';

    const answersDiv = document.getElementById('answers');
    answersDiv.innerHTML = '';
    q.a.forEach((text, i) => {
        const btn = document.createElement('button');
        btn.className = 'answer-btn';
        if (userAnswers[currentIdx] === i) btn.classList.add('selected');
        btn.innerText = text;
        btn.onclick = () => { userAnswers[currentIdx] = i; showQuestion(); };
        answersDiv.appendChild(btn);
    });
    updateUI();
}

function updateUI() {
    questions.forEach((_, i) => {
        const btn = document.getElementById(`side-btn-${i}`);
        if(btn) {
            btn.className = (i === currentIdx) ? 'active' : '';
            if (userAnswers[i] !== null) btn.classList.add('answered');
        }
    });
    document.getElementById('prevBtn').style.visibility = currentIdx === 0 ? 'hidden' : 'visible';
    const isLast = currentIdx === questions.length - 1;
    document.getElementById('nextBtn').style.display = isLast ? 'none' : 'block';
    document.getElementById('submitBtn').style.display = isLast ? 'block' : 'none';
}

function nextQuestion() { if (currentIdx < questions.length - 1) { currentIdx++; showQuestion(); } }
function prevQuestion() { if (currentIdx > 0) { currentIdx--; showQuestion(); } }
function jumpToQuestion(i) { currentIdx = i; showQuestion(); }

function submitQuiz() {
    const unanswered = userAnswers.filter(a => a === null).length;
    if (unanswered > 0 && !confirm(`Còn ${unanswered} câu chưa làm. Nộp luôn?`)) return;

    let score = 0;
    questions.forEach((q, i) => { if (userAnswers[i] === q.correct) score++; });

    // Hiển thị kết quả lên màn hình
    document.getElementById('quizBody').style.display = 'none';
    document.getElementById('resultBox').style.display = 'block';
    document.getElementById('resultScore').innerText = `Điểm của bạn: ${score}/10`;
    
    if (score >= 5) {
        audioWin.play();
        document.getElementById('resultFeedback').innerText = "🎉 Tuyệt vời! Bạn đã vượt qua bài thi.";
    } else {
        audioLose.play();
        document.getElementById('resultFeedback').innerText = "😢 Đừng buồn, hãy ôn tập và làm lại nhé!";
    }
}

function resetQuiz() {
    startQuiz(); // Hàm này đã bao gồm stopAllAudio()
}