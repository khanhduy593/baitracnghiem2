// Ngân hàng câu hỏi lớp 3
const questionBank = [
    { q: "Kết quả của phép tính: 452 + 316 là?", a: ["768", "769", "758", "668"], correct: 0 },
    { q: "Tìm x, biết: x : 4 = 12", a: ["x = 3", "x = 8", "x = 48", "x = 16"], correct: 2 },
    { q: "Số nào lớn nhất: 8521, 8512, 8251, 8152?", a: ["8512", "8521", "8251", "8152"], correct: 1 },
    { q: "Hình vuông cạnh 6cm. Chu vi là?", a: ["12cm", "24cm", "36cm", "20cm"], correct: 1 },
    { q: "Giá trị của biểu thức 100 - 20 * 3 là?", a: ["240", "40", "60", "80"], correct: 1 },
    { q: "8m 5cm = ... cm?", a: ["85cm", "805cm", "850cm", "8005cm"], correct: 1 },
    { q: "Số liền sau của số 999 là?", a: ["998", "1000", "1001", "900"], correct: 1 },
    { q: "Đồng hồ chỉ 3 giờ rưỡi tức là mấy giờ?", a: ["3:15", "3:30", "3:45", "4:30"], correct: 1 },
    { q: "Kết quả của 96 : 3 là?", a: ["32", "33", "31", "30"], correct: 0 },
    { q: "Hình chữ nhật dài 8cm, rộng 5cm. Chu vi là?", a: ["13cm", "40cm", "26cm", "20cm"], correct: 2 },
    { q: "7 nhân mấy bằng 63?", a: ["7", "8", "9", "6"], correct: 2 },
    { q: "Số 5 trong số 528 có giá trị là?", a: ["5", "50", "500", "5000"], correct: 2 }
];

let questions = [], currentIdx = 0, userAnswers = [];
const audioWin = new Audio('https://www.myinstants.com/media/sounds/applause.mp3');
const audioLose = new Audio('https://www.myinstants.com/media/sounds/sad-meow-song.mp3');

function stopAudio() {
    [audioWin, audioLose].forEach(a => { a.pause(); a.currentTime = 0; });
}

function startQuiz() {
    stopAudio();
    document.getElementById('startScreen').style.display = 'none';
    document.getElementById('quizApp').style.display = 'flex';
    document.getElementById('resultBox').style.display = 'none';
    document.getElementById('quizBody').style.display = 'block';
    currentIdx = 0;
    // Lấy 10 câu ngẫu nhiên
    questions = [...questionBank].sort(() => 0.5 - Math.random()).slice(0, 10);
    userAnswers = new Array(10).fill(null);
    initSidebar();
    showQuestion();
}

function initSidebar() {
    const sb = document.getElementById('sidebar');
    sb.innerHTML = '';
    questions.forEach((_, i) => {
        const b = document.createElement('button');
        b.innerText = i + 1; b.id = `side-btn-${i}`;
        b.onclick = () => { currentIdx = i; showQuestion(); };
        sb.appendChild(b);
    });
}

function showQuestion() {
    const q = questions[currentIdx];
    const card = document.getElementById('quizCard');
    
    card.style.animation = 'none';
    card.offsetHeight; 
    card.style.animation = 'fadeIn 0.5s ease';

    document.getElementById('question').innerText = q.q;
    document.getElementById('progressText').innerText = `${currentIdx + 1}/10`;
    document.getElementById('progressBar').style.width = (currentIdx + 1) * 10 + '%';

    const div = document.getElementById('answers');
    div.innerHTML = '';
    q.a.forEach((t, i) => {
        const b = document.createElement('button');
        b.className = 'answer-btn' + (userAnswers[currentIdx] === i ? ' selected' : '');
        b.innerText = t;
        b.onclick = () => { userAnswers[currentIdx] = i; showQuestion(); };
        div.appendChild(b);
    });
    updateUI();
}

function updateUI() {
    questions.forEach((_, i) => {
        const b = document.getElementById(`side-btn-${i}`);
        if(b) b.className = (i === currentIdx ? 'active' : '') + (userAnswers[i] !== null ? ' answered' : '');
    });
    document.getElementById('prevBtn').style.visibility = currentIdx === 0 ? 'hidden' : 'visible';
    const last = currentIdx === 9;
    document.getElementById('nextBtn').style.display = last ? 'none' : 'block';
    document.getElementById('submitBtn').style.display = last ? 'block' : 'none';
}

function nextQuestion() { if(currentIdx < 9) { currentIdx++; showQuestion(); } }
function prevQuestion() { if(currentIdx > 0) { currentIdx--; showQuestion(); } }

function submitQuiz() {
    let score = 0;
    questions.forEach((q, i) => { if(userAnswers[i] === q.correct) score++; });
    document.getElementById('quizBody').style.display = 'none';
    document.getElementById('resultBox').style.display = 'block';
    document.getElementById('resultScore').innerText = `Điểm: ${score}/10`;
    if(score >= 5) { audioWin.play(); document.getElementById('resultFeedback').innerText = "🎉 Tuyệt vời! Bạn đã vượt qua bài thi."; }
    else { audioLose.play(); document.getElementById('resultFeedback').innerText = "😢 Đừng buồn, hãy ôn tập và làm lại nhé!"; }
}

function resetQuiz() { startQuiz(); }