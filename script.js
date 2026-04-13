// 1. NGÂN HÀNG 60 CÂU HỎI TOÁN LỚP 3
const questionBank = [
    { q: "Kết quả của phép tính: 452 + 316 là?", a: ["768", "769", "758", "668"], correct: 0 },
    { q: "Tìm x, biết: x : 4 = 12", a: ["x = 3", "x = 8", "x = 48", "x = 16"], correct: 2 },
    { q: "Số nào lớn nhất: 8521, 8512, 8251, 8152?", a: ["8512", "8521", "8251", "8152"], correct: 1 },
    { q: "Giá trị của biểu thức 100 - 20 * 3 là?", a: ["240", "40", "60", "80"], correct: 1 },
    { q: "Số liền sau của số 999 là?", a: ["998", "1000", "1001", "900"], correct: 1 },
    { q: "Kết quả của 96 : 3 là?", a: ["32", "33", "31", "30"], correct: 0 },
    { q: "7 nhân mấy bằng 63?", a: ["7", "8", "9", "6"], correct: 2 },
    { q: "Số 5 trong số 528 có giá trị là?", a: ["5", "50", "500", "5000"], correct: 2 },
    { q: "Số tròn chục lớn nhất có 2 chữ số là?", a: ["90", "99", "80", "100"], correct: 0 },
    { q: "Gấp 6 lên 5 lần rồi bớt đi 10 thì được?", a: ["20", "30", "40", "25"], correct: 0 },
    { q: "1/3 của 24kg là?", a: ["6kg", "7kg", "8kg", "9kg"], correct: 2 },
    { q: "Số bé nhất có 4 chữ số khác nhau là?", a: ["1000", "1023", "1234", "1001"], correct: 1 },
    { q: "Kết quả phép nhân 121 x 4 là?", a: ["484", "444", "424", "464"], correct: 0 },
    { q: "Số nào chia cho 5 dư 4?", a: ["15", "19", "20", "26"], correct: 1 },
    { q: "Tìm x: x - 150 = 350", a: ["x=200", "x=400", "x=500", "x=600"], correct: 2 },
    { q: "Kết quả của 1200 x 3 là?", a: ["3600", "360", "3000", "4200"], correct: 0 },
    { q: "Số tròn nghìn liền sau 4000 là?", a: ["4100", "5000", "3000", "4001"], correct: 1 },
    { q: "Kết quả của 5000 + 4000 - 2000 là?", a: ["7000", "8000", "9000", "6000"], correct: 0 },
    { q: "Số gồm 5 nghìn, 2 chục, 3 đơn vị viết là?", a: ["523", "5023", "5230", "50023"], correct: 1 },
    { q: "Giá trị biểu thức (20 + 30) x 2 là?", a: ["70", "80", "100", "120"], correct: 2 },
    { q: "Hình vuông cạnh 6cm. Chu vi là?", a: ["12cm", "24cm", "36cm", "20cm"], correct: 1 },
    { q: "Hình chữ nhật dài 8cm, rộng 5cm. Chu vi là?", a: ["13cm", "40cm", "26cm", "20cm"], correct: 2 },
    { q: "Một hình vuông có chu vi 20cm. Cạnh hình vuông đó là?", a: ["4cm", "5cm", "10cm", "8cm"], correct: 1 },
    { q: "Hình tròn có bán kính 4cm. Đường kính là?", a: ["2cm", "4cm", "8cm", "12cm"], correct: 2 },
    { q: "Hình chữ nhật có chiều dài 10cm, rộng bằng 1/2 dài. Chu vi là?", a: ["15cm", "20cm", "30cm", "25cm"], correct: 2 },
    { q: "Một tam giác có 3 cạnh đều bằng 5cm. Chu vi là?", a: ["10cm", "15cm", "20cm", "25cm"], correct: 1 },
    { q: "Diện tích hình vuông có cạnh 4cm là?", a: ["16cm2", "8cm2", "12cm2", "20cm2"], correct: 0 },
    { q: "Chu vi một cái bảng hình chữ nhật dài 2m, rộng 1m là?", a: ["3m", "6m", "4m", "2m"], correct: 1 },
    { q: "Hình tròn có tâm O, đường kính AB bằng 10cm. Bán kính là?", a: ["20cm", "5cm", "10cm", "2cm"], correct: 1 },
    { q: "Hình có 4 cạnh bằng nhau và 4 góc vuông là?", a: ["H.Thoi", "H.Chữ nhật", "H.Vuông", "H.Tròn"], correct: 2 },
    { q: "Diện tích hình chữ nhật dài 5cm, rộng 3cm là?", a: ["15cm2", "8cm2", "16cm2", "10cm2"], correct: 0 },
    { q: "Đoạn thẳng AB dài 12cm, M là trung điểm AB. AM dài?", a: ["4cm", "6cm", "12cm", "24cm"], correct: 1 },
    { q: "Hình chữ nhật có chu vi 20cm, chiều dài 6cm. Chiều rộng là?", a: ["4cm", "14cm", "8cm", "5cm"], correct: 0 },
    { q: "Trong hình tròn, đường kính gấp mấy lần bán kính?", a: ["1 lần", "2 lần", "3 lần", "4 lần"], correct: 1 },
    { q: "Số góc vuông của một hình chữ nhật là?", a: ["1", "2", "3", "4"], correct: 3 },
    { q: "8m 5cm = ... cm?", a: ["85cm", "805cm", "850cm", "8005cm"], correct: 1 },
    { q: "Đồng hồ chỉ 3 giờ rưỡi tức là mấy giờ?", a: ["3:15", "3:30", "3:45", "4:30"], correct: 1 },
    { q: "Tháng nào sau đây có 31 ngày?", a: ["Tháng 4", "Tháng 6", "Tháng 10", "Tháng 11"], correct: 2 },
    { q: "2kg bằng bao nhiêu gam?", a: ["20g", "200g", "2000g", "20000g"], correct: 2 },
    { q: "1 giờ 15 phút = ... phút?", a: ["65 phút", "75 phút", "85 phút", "115 phút"], correct: 1 },
    { q: "Ngày 30 tháng 8 là chủ nhật, ngày 2 tháng 9 cùng năm là?", a: ["Thứ hai", "Thứ ba", "Thứ tư", "Thứ năm"], correct: 2 },
    { q: "1km bằng bao nhiêu mét?", a: ["100m", "1000m", "10m", "10000m"], correct: 1 },
    { q: "5m 4dm = ... dm?", a: ["54", "504", "540", "45"], correct: 0 },
    { q: "Một quý có mấy tháng?", a: ["2 tháng", "3 tháng", "4 tháng", "12 tháng"], correct: 1 },
    { q: "8 giờ tối còn gọi là mấy giờ?", a: ["18 giờ", "20 giờ", "22 giờ", "12 giờ"], correct: 1 },
    { q: "Lọ nước mắm chứa 1 lít, đã dùng 200ml. Còn lại?", a: ["800ml", "900ml", "700ml", "1200ml"], correct: 0 },
    { q: "Tháng hai năm nhuận có bao nhiêu ngày?", a: ["28 ngày", "29 ngày", "30 ngày", "31 ngày"], correct: 1 },
    { q: "1 ngày có bao nhiêu giờ?", a: ["12 giờ", "24 giờ", "48 giờ", "60 giờ"], correct: 1 },
    { q: "3 năm có bao nhiêu tháng?", a: ["12 tháng", "24 tháng", "36 tháng", "48 tháng"], correct: 2 },
    { q: "9km giảm đi 3 lần thì được?", a: ["6km", "3km", "12km", "27km"], correct: 1 },
    { q: "Có 24 kẹo chia cho 4 bạn. Mỗi bạn có?", a: ["4 cái", "5 cái", "6 cái", "8 cái"], correct: 2 },
    { q: "Mỗi con bò có 4 chân. Hỏi 8 con bò có mấy chân?", a: ["12", "24", "32", "40"], correct: 2 },
    { q: "Mẹ mua 2 chục trứng, mẹ dùng hết 5 quả. Còn lại?", a: ["15 quả", "7 quả", "10 quả", "25 quả"], correct: 0 },
    { q: "Lớp 3A có 18 bạn nam, bạn nữ bằng 1/2 nam. Tổng số học sinh là?", a: ["9 em", "24 em", "27 em", "30 em"], correct: 2 },
    { q: "Cuộn dây dài 50m, cắt đi 1/5 cuộn dây. Đã cắt bao nhiêu mét?", a: ["5m", "10m", "15m", "20m"], correct: 1 },
    { q: "Có 5 thùng dầu, mỗi thùng 100 lít. Tổng cộng là?", a: ["50 lít", "500 lít", "105 lít", "150 lít"], correct: 1 },
    { q: "Số liền trước của 10.000 là?", a: ["9.000", "9.900", "9.990", "9.999"], correct: 3 },
    { q: "36 : 4 x 3 = ?", a: ["3", "27", "9", "12"], correct: 1 },
    { q: "Số nhỏ nhất có 5 chữ số là?", a: ["1000", "9999", "10000", "11111"], correct: 2 },
    { q: "Bạn An có 10 viên bi, Bình có gấp đôi An. Cả hai có?", a: ["20 viên", "30 viên", "15 viên", "40 viên"], correct: 1 }
];

let questions = [], currentIdx = 0, userAnswers = [];

// Khởi tạo âm thanh
const audioWin = new Audio('https://www.myinstants.com/media/sounds/applause.mp3');
const audioLose = new Audio('https://www.myinstants.com/media/sounds/sad-meow-song.mp3');

function stopAudio() { 
    [audioWin, audioLose].forEach(a => { a.pause(); a.currentTime = 0; }); 
}

// 2. HÀM TẠO HIỆU ỨNG RUNG
function applyShake(element) {
    if (!element) return;
    element.classList.remove('shaking');
    void element.offsetWidth; // Trigger reflow
    element.classList.add('shaking');
}

// 3. LOGIC QUIZ
function startQuiz() {
    const btn = document.getElementById('startBtn');
    applyShake(btn);
    
    setTimeout(() => {
        stopAudio();
        document.getElementById('startScreen').style.display = 'none';
        document.getElementById('quizApp').style.display = 'flex';
        document.getElementById('resultBox').style.display = 'none';
        document.getElementById('quizBody').style.display = 'block';
        
        currentIdx = 0;
        // Bốc 10 câu ngẫu nhiên từ ngân hàng 60 câu
        questions = [...questionBank].sort(() => 0.5 - Math.random()).slice(0, 10);
        userAnswers = new Array(10).fill(null);
        
        initSidebar();
        showQuestion(true);
    }, 200);
}

function initSidebar() {
    const sb = document.getElementById('sidebar');
    sb.innerHTML = '';
    questions.forEach((_, i) => {
        const b = document.createElement('button');
        b.innerText = i + 1;
        b.id = `side-btn-${i}`;
        b.onclick = () => { 
            currentIdx = i; 
            showQuestion(true); 
        };
        sb.appendChild(b);
    });
}

function showQuestion(withAnimation = false) {
    const q = questions[currentIdx];
    
    if (withAnimation) {
        const card = document.getElementById('quizCard');
        card.style.animation = 'none';
        card.offsetHeight; 
        card.style.animation = 'fadeIn 0.4s ease';
    }

    document.getElementById('question').innerText = q.q;
    document.getElementById('progressText').innerText = `${currentIdx + 1}/10`;
    document.getElementById('progressBar').style.width = (currentIdx + 1) * 10 + '%';

    renderAnswers();
    updateUI();
}

function renderAnswers() {
    const q = questions[currentIdx];
    const div = document.getElementById('answers');
    div.innerHTML = '';
    
    q.a.forEach((text, i) => {
        const b = document.createElement('button');
        b.className = 'answer-btn' + (userAnswers[currentIdx] === i ? ' selected' : '');
        b.innerText = text;
        
        b.onclick = (e) => { 
            applyShake(e.currentTarget);
            userAnswers[currentIdx] = i; 
            
            // Chờ rung một chút rồi mới cập nhật giao diện
            setTimeout(() => {
                renderAnswers(); 
                updateUI();
            }, 100);
        };
        div.appendChild(b);
    });
}

function updateUI() {
    questions.forEach((_, i) => {
        const b = document.getElementById(`side-btn-${i}`);
        if(b) {
            b.className = (i === currentIdx ? 'active' : '') + (userAnswers[i] !== null ? ' answered' : '');
        }
    });

    document.getElementById('prevBtn').style.visibility = currentIdx === 0 ? 'hidden' : 'visible';
    const last = currentIdx === 9;
    document.getElementById('nextBtn').style.display = last ? 'none' : 'block';
    document.getElementById('submitBtn').style.display = last ? 'block' : 'none';
}

function nextQuestion() {
    if(currentIdx < 9) {
        applyShake(document.getElementById('nextBtn'));
        setTimeout(() => {
            currentIdx++;
            showQuestion(true);
        }, 150);
    }
}

function prevQuestion() {
    if(currentIdx > 0) {
        applyShake(document.getElementById('prevBtn'));
        setTimeout(() => {
            currentIdx--;
            showQuestion(true);
        }, 150);
    }
}

function submitQuiz() {
    const btn = document.getElementById('submitBtn');
    applyShake(btn);

    setTimeout(() => {
        const unanswered = userAnswers.filter(a => a === null).length;
        if (unanswered > 0 && !confirm(`Bạn còn ${unanswered} câu chưa làm. Vẫn nộp bài chứ?`)) return;

        let score = 0;
        questions.forEach((q, i) => {
            if(userAnswers[i] === q.correct) score++;
        });

        document.getElementById('quizBody').style.display = 'none';
        document.getElementById('resultBox').style.display = 'block';
        document.getElementById('resultScore').innerText = `Điểm: ${score}/10`;

        if(score >= 5) {
            audioWin.play();
            document.getElementById('resultFeedback').innerText = "🎉 Tuyệt vời! Bạn làm rất tốt.";
        } else {
            audioLose.play();
            document.getElementById('resultFeedback').innerText = "😢 Đừng buồn, hãy ôn tập và thử lại nhé!";
        }
    }, 200);
}

function resetQuiz() {
    startQuiz();
}