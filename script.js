// ===================== قاعدة البيانات النهائية (61 سؤالاً) =====================
const allQuestions = [
    // ---- أولاً: صح أو خطأ (15 سؤالاً) ----
    { id: 1, type: 'truefalse', question: 'البحث العلمي في اللغة يعني تتبع الشيء.', answer: 'صح' },
    { id: 2, type: 'truefalse', question: 'التنقيب عن الشيء هو التعريف اللغوي للبحث.', answer: 'صح' },
    { id: 3, type: 'truefalse', question: 'من عناصر خطة البحث العلمي الشمول.', answer: 'خطأ' },
    { id: 4, type: 'truefalse', question: 'استخدام المنهج العلمي من عناصر البحث العلمي.', answer: 'صح' },
    { id: 5, type: 'truefalse', question: 'من عناصر البحث أن يكون هادفًا.', answer: 'صح' },
    { id: 6, type: 'truefalse', question: 'من عناصر البحث أن تكون نتائجه غير صحيحة.', answer: 'خطأ' },
    { id: 7, type: 'truefalse', question: 'العلم هو المعرفة بذاتها.', answer: 'خطأ' },
    { id: 8, type: 'truefalse', question: 'من أهداف البحث العلمي التفسير.', answer: 'صح' },
    { id: 9, type: 'truefalse', question: 'من أهداف البحث العلمي التنبؤ.', answer: 'صح' },
    { id: 10, type: 'truefalse', question: 'من خصائص البحث العلمي الموضوعية.', answer: 'صح' },
    { id: 11, type: 'truefalse', question: 'الهدفية من خصائص البحث العلمي.', answer: 'صح' },
    { id: 12, type: 'truefalse', question: 'السببية هدف من أهداف البحث العلمي.', answer: 'خطأ' },
    { id: 13, type: 'truefalse', question: 'النشأة الأولى للبحث العلمي كانت سنة 1999م.', answer: 'خطأ' },
    { id: 14, type: 'truefalse', question: 'الثورة الصناعية من عوامل تطور البحث العلمي.', answer: 'صح' },
    { id: 15, type: 'truefalse', question: 'الحروب من عوامل تطور البحث العلمي.', answer: 'خطأ' },

    // ---- ثانياً: اختر الإجابة الصحيحة (2 سؤالاً) ----
    { id: 16, type: 'multiple', question: 'الاستقراء هو تعريف للبحث:', options: ['العلمي', 'اللغوي', 'الاصطلاحي', 'التفسيري'], answer: 'اللغوي' },
    { id: 17, type: 'multiple', question: 'من خصائص البحث العلمي:', options: ['العمر', 'التشبع', 'الانحدار', 'الموضوعية'], answer: 'الموضوعية' },

    // ---- ثالثاً: أنواع البحوث (15 سؤالاً) ----
    { id: 18, type: 'truefalse', question: 'البحوث الوصفية أقوى من البحوث الاستكشافية.', answer: 'صح' },
    { id: 19, type: 'truefalse', question: 'البحوث الاستكشافية أعلى من الوصفية.', answer: 'خطأ' },
    { id: 20, type: 'truefalse', question: 'يمكن تفسير الظاهرة دون وصفها أولًا.', answer: 'خطأ' },
    { id: 21, type: 'truefalse', question: 'البحوث التفسيرية أعلى مستوى من الوصفية.', answer: 'صح' },
    { id: 22, type: 'truefalse', question: 'البحوث التجريبية من البحوث الوصفية.', answer: 'خطأ' },
    { id: 23, type: 'truefalse', question: 'البحوث التفسيرية هي التي تصف الظواهر.', answer: 'خطأ' },
    { id: 24, type: 'truefalse', question: 'البحوث التفسيرية هي التي تفسر الظواهر.', answer: 'صح' },
    { id: 25, type: 'truefalse', question: 'البحوث التفسيرية أرقى مستويات البحث العلمي.', answer: 'صح' },
    { id: 26, type: 'truefalse', question: 'البحوث الارتباطية هي البحوث التجريبية.', answer: 'خطأ' },
    { id: 27, type: 'truefalse', question: 'البحوث المسحية من البحوث الوصفية.', answer: 'صح' },
    { id: 28, type: 'truefalse', question: 'البحوث التاريخية من البحوث الوصفية.', answer: 'صح' },
    { id: 29, type: 'truefalse', question: 'البحوث التاريخية بحوث مسحية.', answer: 'خطأ' },
    { id: 30, type: 'truefalse', question: 'من خطوات البحوث المسحية اختيار عينة من المجتمع.', answer: 'صح' },
    { id: 31, type: 'truefalse', question: 'بحوث دراسة الحالة بحوث شبه تجريبية.', answer: 'خطأ' },
    { id: 32, type: 'truefalse', question: 'بحوث تحليل الخطاب بحوث وصفية كمية.', answer: 'صح' },

    // ---- الخيار الوحيد في أنواع البحوث ----
    { id: 33, type: 'multiple', question: 'البحوث التي تجيب عن سؤال "لماذا؟" هي:', options: ['البحوث التفسيرية', 'البحوث الوصفية', 'البحوث الاستكشافية'], answer: 'البحوث التفسيرية' },

    // ---- رابعاً: خطة البحث (5 أسئلة) ----
    { id: 34, type: 'truefalse', question: 'خطة البحث هي الخطوات التي يسير عليها الباحث.', answer: 'صح' },
    { id: 35, type: 'truefalse', question: 'لا يمكن إجراء البحث دون خطة بحثية.', answer: 'صح' },
    { id: 36, type: 'truefalse', question: 'من شروط خطة البحث الحصول على قرار الجامعة.', answer: 'خطأ' },
    { id: 37, type: 'truefalse', question: 'كتابة خطة البحث شرط لكتابة تقرير البحث.', answer: 'صح' },
    { id: 38, type: 'truefalse', question: 'تصميم عينة البحث من عناصر خطة البحث.', answer: 'صح' },

    // ---- خامساً: الصدق والثبات (11 سؤالاً) ----
    { id: 39, type: 'truefalse', question: 'تكون الأداة صادقة عندما تمثل ما يراد قياسه.', answer: 'صح' },
    { id: 40, type: 'truefalse', question: 'من شروط أداة البحث أن تكون صادقة وثابتة.', answer: 'صح' },
    { id: 41, type: 'truefalse', question: 'كل أداة ثابتة صادقة.', answer: 'خطأ' },
    { id: 42, type: 'truefalse', question: 'الاستنتاج من أدوات البحث العلمي.', answer: 'خطأ' },
    { id: 43, type: 'truefalse', question: 'استمارة تحليل المضمون أداة لجمع البيانات.', answer: 'صح' },
    { id: 44, type: 'truefalse', question: 'تحليل البيانات أداة من أدوات البحث.', answer: 'خطأ' },
    { id: 45, type: 'truefalse', question: 'الصدق هو نفسه الثبات.', answer: 'خطأ' },
    { id: 46, type: 'truefalse', question: 'إذا بلغت الأداة درجة عالية من الصدق فإنها تكون ثابتة.', answer: 'صح' },
    { id: 47, type: 'truefalse', question: 'يجرى اختبار الصدق والثبات للتأكد من أن الأداة تجمع البيانات المطلوبة.', answer: 'صح' },
    { id: 48, type: 'truefalse', question: 'من أشكال الصدق: الصدق الظاهري.', answer: 'صح' },
    { id: 49, type: 'truefalse', question: 'من طرق اختبار الثبات: الاختبار وإعادة الاختبار.', answer: 'صح' },

    // ---- سادساً: الفروض وأسئلة البحث (11 سؤالاً) ----
    { id: 50, type: 'truefalse', question: 'أسئلة البحث هي أدوات البحث.', answer: 'خطأ' },
    { id: 51, type: 'truefalse', question: 'أسئلة البحث هي متغيرات البحث المصاغة بصورة استفهامية.', answer: 'صح' },
    { id: 52, type: 'truefalse', question: 'أهمية الفروض العلمية أنها التي يختبرها البحث.', answer: 'صح' },
    { id: 53, type: 'truefalse', question: 'الفروض الارتباطية ليست فروضًا علمية.', answer: 'خطأ' },
    { id: 54, type: 'truefalse', question: 'من شروط الفرض العلمي أن يكون صحيحًا.', answer: 'خطأ' },
    { id: 55, type: 'truefalse', question: 'تقسيم مشكلة البحث إلى أجزاء فرعية يمثل أسئلة البحث.', answer: 'صح' },
    { id: 56, type: 'truefalse', question: 'توضع خطة البحث قبل صياغة الأسئلة والفروض.', answer: 'خطأ' },

    // ---- أسئلة الاختيار المتبقية (3 أسئلة) ----
    { id: 57, type: 'multiple', question: 'توجد علاقة بين استخدام طلبة الجامعات لمواقع التواصل والوعي بخطورة تداول الإشاعات. هذا الفرض هو:', options: ['ارتباطي', 'فرض فروق'], answer: 'ارتباطي' },
    { id: 58, type: 'multiple', question: 'من شروط الفرض العلمي:', options: ['قابل للاختبار', 'صحيح', 'حقيقة علمية'], answer: 'قابل للاختبار' },
    { id: 59, type: 'multiple', question: 'تنقسم الفروض العلمية إلى:', options: ['ارتباطية وفروق', 'شاملة ونوعية', 'علمية ومعرفية'], answer: 'ارتباطية وفروق' },

    // ---- سؤال إضافي ليصبح المجموع 61 ----
    { id: 60, type: 'truefalse', question: 'الفروض العلمية هي التعريفات والمفاهيم.', answer: 'خطأ' },
    { id: 61, type: 'truefalse', question: 'الاستنتاج هو عملية الوصول إلى نتائج من البيانات.', answer: 'صح' }
];

// ===== إعدادات الامتحان =====
const TOTAL_QUESTIONS = 30;
const MULTIPLE_COUNT = 11;
const TRUE_FALSE_COUNT = TOTAL_QUESTIONS - MULTIPLE_COUNT;

// ===== المتغيرات العامة =====
let currentQuestionIndex = 0;
let userAnswers = [];
let startTime = null;
let timerInterval = null;
let timeLeft = 60 * 60;
let examCompleted = false;
let currentQuestions = [];
let shuffledQuestions = [];
let navButtons = [];

// ===== عناصر DOM =====
const startScreen = document.getElementById('startScreen');
const examScreen = document.getElementById('examScreen');
const resultsScreen = document.getElementById('resultsScreen');
const startExamBtn = document.getElementById('startExamBtn');
const endExamBtn = document.getElementById('endExamBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const questionText = document.getElementById('questionText');
const questionNumber = document.getElementById('questionNumber');
const optionsContainer = document.getElementById('optionsContainer');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const progressPercent = document.getElementById('progressPercent');
const timer = document.getElementById('timer');
const darkModeToggle = document.getElementById('darkModeToggle');
const reviewBtn = document.getElementById('reviewBtn');
const retryBtn = document.getElementById('retryBtn');
const newTestBtn = document.getElementById('newTestBtn');
const reviewSection = document.getElementById('reviewSection');
const wrongAnswersList = document.getElementById('wrongAnswersList');
const noWrongAnswers = document.getElementById('noWrongAnswers');
const closeReviewBtn = document.getElementById('closeReviewBtn');
const finalScore = document.getElementById('finalScore');
const percentage = document.getElementById('percentage');
const grade = document.getElementById('grade');
const correctAnswers = document.getElementById('correctAnswers');
const wrongAnswers = document.getElementById('wrongAnswers');
const timeTaken = document.getElementById('timeTaken');
const scorePercentage = document.getElementById('scorePercentage');
const scoreCircle = document.getElementById('scoreCircle');
const confirmModal = document.getElementById('confirmModal');
const cancelEndBtn = document.getElementById('cancelEndBtn');
const confirmEndBtn = document.getElementById('confirmEndBtn');
const remainingQuestions = document.getElementById('remainingQuestions');
const unansweredAlert = document.getElementById('unansweredAlert');
const unansweredCount = document.getElementById('unansweredCount');
const questionsGrid = document.getElementById('questionsGrid');
const scrollTopBtn = document.getElementById('scrollTopBtn');

// ===== دوال مساعدة =====
function shuffleArray(arr) {
    const newArr = [...arr];
    for (let i = newArr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
}

function selectQuestions() {
    let usedIds = JSON.parse(localStorage.getItem('usedQuestionIds')) || [];
    let availableMultiple = allQuestions.filter(q => q.type === 'multiple' && !usedIds.includes(q.id));
    let availableTrueFalse = allQuestions.filter(q => q.type === 'truefalse' && !usedIds.includes(q.id));

    if (availableMultiple.length < MULTIPLE_COUNT) {
        const usedMultiple = allQuestions.filter(q => q.type === 'multiple' && usedIds.includes(q.id));
        const needed = MULTIPLE_COUNT - availableMultiple.length;
        const extra = shuffleArray(usedMultiple).slice(0, needed);
        availableMultiple = availableMultiple.concat(extra);
    }
    if (availableTrueFalse.length < TRUE_FALSE_COUNT) {
        const usedTrueFalse = allQuestions.filter(q => q.type === 'truefalse' && usedIds.includes(q.id));
        const needed = TRUE_FALSE_COUNT - availableTrueFalse.length;
        const extra = shuffleArray(usedTrueFalse).slice(0, needed);
        availableTrueFalse = availableTrueFalse.concat(extra);
    }

    const selectedMultiple = shuffleArray(availableMultiple).slice(0, MULTIPLE_COUNT);
    const selectedTrueFalse = shuffleArray(availableTrueFalse).slice(0, TRUE_FALSE_COUNT);
    const selected = selectedMultiple.concat(selectedTrueFalse);
    const shuffledSelected = shuffleArray(selected);

    const newUsedIds = usedIds.concat(shuffledSelected.map(q => q.id));
    if (newUsedIds.length > 100) newUsedIds.splice(0, newUsedIds.length - 100);
    localStorage.setItem('usedQuestionIds', JSON.stringify(newUsedIds));

    return shuffledSelected;
}

function shuffleQuestionOptions(question) {
    if (question.type !== 'multiple') return question;
    const opts = question.options;
    const correct = question.answer;
    const shuffledOpts = shuffleArray([...opts]);
    return { ...question, shuffledOptions: shuffledOpts, correctAnswer: correct };
}

// ===== بناء شبكة التنقل =====
function buildNavigationGrid() {
    questionsGrid.innerHTML = '';
    navButtons = [];
    shuffledQuestions.forEach((_, index) => {
        const btn = document.createElement('button');
        btn.className = 'question-nav-btn unanswered';
        btn.textContent = index + 1;
        btn.addEventListener('click', () => {
            currentQuestionIndex = index;
            loadQuestion(currentQuestionIndex);
        });
        questionsGrid.appendChild(btn);
        navButtons.push(btn);
    });
}

function updateQuestionsGrid() {
    navButtons.forEach((btn, index) => {
        btn.classList.remove('current', 'answered', 'unanswered');
        if (index === currentQuestionIndex) {
            btn.classList.add('current');
        } else if (userAnswers[index] !== null) {
            btn.classList.add('answered');
        } else {
            btn.classList.add('unanswered');
        }
    });
}

// ===== تحميل السؤال =====
function loadQuestion(index) {
    const question = shuffledQuestions[index];
    questionNumber.textContent = `س${index + 1}`;
    questionText.textContent = question.question;

    const progress = ((index + 1) / shuffledQuestions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `السؤال ${index + 1} من ${shuffledQuestions.length}`;
    progressPercent.textContent = `${Math.round(progress)}%`;

    prevBtn.disabled = index === 0;
    nextBtn.textContent = index === shuffledQuestions.length - 1 ? 'إنهاء الاختبار' : 'التالي';

    optionsContainer.innerHTML = '';
    if (question.type === 'truefalse') {
        const options = ['صح', 'خطأ'];
        options.forEach((opt, i) => {
            const optionDiv = createOptionElement(i, opt, index);
            optionsContainer.appendChild(optionDiv);
        });
    } else {
        const options = question.shuffledOptions;
        options.forEach((opt, i) => {
            const optionDiv = createOptionElement(i, opt, index);
            optionsContainer.appendChild(optionDiv);
        });
    }

    const statusEl = document.getElementById('questionStatus');
    if (userAnswers[index] === null) {
        statusEl.innerHTML = '<span class="icon">⭐</span> جديد';
        statusEl.style.color = 'var(--warning-color)';
    } else {
        statusEl.innerHTML = '<span class="icon">✅</span> تم الإجابة';
        statusEl.style.color = 'var(--success-color)';
    }

    updateQuestionsGrid();
    requestAnimationFrame(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function createOptionElement(index, text, qIndex) {
    const div = document.createElement('div');
    div.className = 'option';
    if (userAnswers[qIndex] === index) div.classList.add('selected');

    const marker = document.createElement('div');
    marker.className = 'option-marker';
    marker.textContent = String.fromCharCode(1632 + index + 1);

    const txt = document.createElement('div');
    txt.className = 'option-text';
    txt.textContent = text;

    div.appendChild(marker);
    div.appendChild(txt);

    div.addEventListener('click', () => selectOption(qIndex, index));
    return div;
}

function selectOption(qIndex, optIndex) {
    userAnswers[qIndex] = optIndex;
    loadQuestion(qIndex);
    updateUnansweredAlert();
}

// ===== التنقل =====
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
}

function nextQuestion() {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    } else {
        showConfirmModal();
    }
}

// ===== تنبيه الأسئلة غير المجاب عنها =====
function updateUnansweredAlert() {
    const unanswered = userAnswers.filter(a => a === null).length;
    if (unanswered > 0) {
        unansweredCount.textContent = `${unanswered} أسئلة من أصل ${shuffledQuestions.length}`;
        unansweredAlert.style.display = 'flex';
    } else {
        unansweredAlert.style.display = 'none';
    }
}

// ===== المؤقت =====
function startTimer() {
    updateTimerDisplay();
    timerInterval = setInterval(() => {
        timeLeft--;
        updateTimerDisplay();
        if (timeLeft <= 0) endExam();
    }, 1000);
}

function updateTimerDisplay() {
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    timer.querySelector('span').textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    if (timeLeft < 300) timer.style.color = 'var(--accent-color)';
    else if (timeLeft < 600) timer.style.color = 'var(--warning-color)';
}

// ===== نافذة التأكيد =====
function showConfirmModal() {
    const unanswered = userAnswers.filter(a => a === null).length;
    remainingQuestions.textContent = unanswered;
    confirmModal.style.display = 'flex';
}

// ===== إنهاء الامتحان =====
function endExam() {
    confirmModal.style.display = 'none';
    clearInterval(timerInterval);
    examCompleted = true;
    examScreen.classList.remove('active');
    resultsScreen.classList.add('active');
    calculateResults();
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===== حساب النتائج =====
function calculateResults() {
    let correct = 0,
        wrong = 0;
    shuffledQuestions.forEach((q, idx) => {
        const userAns = userAnswers[idx];
        if (userAns === null) { wrong++; return; }

        let isCorrect = false;
        if (q.type === 'truefalse') {
            const userText = userAns === 0 ? 'صح' : 'خطأ';
            isCorrect = (userText === q.answer);
        } else {
            const correctText = q.correctAnswer;
            const selectedText = q.shuffledOptions[userAns];
            isCorrect = (selectedText === correctText);
        }
        if (isCorrect) correct++;
        else wrong++;
    });

    const total = shuffledQuestions.length;
    const percent = (correct / total) * 100;
    finalScore.textContent = `${correct}/${total}`;
    percentage.textContent = `${percent.toFixed(1)}%`;
    scorePercentage.textContent = `${percent.toFixed(1)}%`;
    correctAnswers.textContent = correct;
    wrongAnswers.textContent = wrong;

    let gradeText = '';
    if (percent >= 90) gradeText = 'امتياز';
    else if (percent >= 80) gradeText = 'جيد جداً';
    else if (percent >= 70) gradeText = 'جيد';
    else if (percent >= 60) gradeText = 'مقبول';
    else gradeText = 'راسب';
    grade.textContent = gradeText;
    grade.style.color = percent >= 60 ? 'var(--success-color)' : 'var(--accent-color)';

    const endTime = new Date();
    const diff = Math.floor((endTime - startTime) / 1000);
    const mins = Math.floor(diff / 60);
    const secs = diff % 60;
    timeTaken.textContent = `${mins}:${String(secs).padStart(2, '0')}`;

    const circleLen = 800;
    const offset = circleLen - (circleLen * (percent / 100));
    scoreCircle.style.strokeDashoffset = offset;
    if (percent >= 90) scoreCircle.style.stroke = '#9b59b6';
    else if (percent >= 80) scoreCircle.style.stroke = 'var(--success-color)';
    else if (percent >= 70) scoreCircle.style.stroke = '#2ecc71';
    else if (percent >= 60) scoreCircle.style.stroke = 'var(--warning-color)';
    else scoreCircle.style.stroke = 'var(--accent-color)';
}

// ===== مراجعة الإجابات الخاطئة =====
function toggleReview() {
    const isVisible = reviewSection.style.display === 'block';
    if (isVisible) {
        reviewSection.style.display = 'none';
        reviewBtn.innerHTML = '<span class="icon">📋</span> مراجعة الإجابات الخاطئة';
    } else {
        reviewSection.style.display = 'block';
        reviewBtn.innerHTML = '<span class="icon">✖️</span> إغلاق المراجعة';
        generateWrongReview();
        setTimeout(() => reviewSection.scrollIntoView({ behavior: 'smooth' }), 100);
    }
}

function generateWrongReview() {
    wrongAnswersList.innerHTML = '';
    let wrongCount = 0;
    shuffledQuestions.forEach((q, idx) => {
        const userAns = userAnswers[idx];
        if (userAns === null) return;

        let isCorrect = false;
        if (q.type === 'truefalse') {
            const userText = userAns === 0 ? 'صح' : 'خطأ';
            isCorrect = (userText === q.answer);
        } else {
            const correctText = q.correctAnswer;
            const selectedText = q.shuffledOptions[userAns];
            isCorrect = (selectedText === correctText);
        }

        if (!isCorrect) {
            wrongCount++;
            const item = document.createElement('div');
            item.className = 'review-item';

            const qDiv = document.createElement('div');
            qDiv.className = 'review-question';
            qDiv.textContent = `${idx + 1}. ${q.question}`;

            const ansDiv = document.createElement('div');
            ansDiv.className = 'review-answers';

            const userDiv = document.createElement('div');
            userDiv.className = 'answer-item user-answer';
            let userText = 'لم يتم الإجابة';
            if (q.type === 'truefalse') {
                userText = userAns === 0 ? 'صح' : 'خطأ';
            } else {
                userText = q.shuffledOptions[userAns];
            }
            userDiv.innerHTML = `<span class="icon">👤</span> <span>إجابتك: ${userText}</span>`;

            const correctDiv = document.createElement('div');
            correctDiv.className = 'answer-item correct-answer';
            let correctText = '';
            if (q.type === 'truefalse') {
                correctText = q.answer;
            } else {
                correctText = q.correctAnswer;
            }
            correctDiv.innerHTML = `<span class="icon">✅</span> <span>الإجابة الصحيحة: ${correctText}</span>`;

            ansDiv.appendChild(userDiv);
            ansDiv.appendChild(correctDiv);
            item.appendChild(qDiv);
            item.appendChild(ansDiv);
            wrongAnswersList.appendChild(item);
        }
    });

    if (wrongCount === 0) {
        wrongAnswersList.style.display = 'none';
        noWrongAnswers.style.display = 'block';
    } else {
        wrongAnswersList.style.display = 'block';
        noWrongAnswers.style.display = 'none';
    }
}

// ===== إعادة الاختبار =====
function retryExam() {
    shuffledQuestions = shuffledQuestions.map(q => shuffleQuestionOptions(q));
    userAnswers = new Array(shuffledQuestions.length).fill(null);
    currentQuestionIndex = 0;
    examCompleted = false;
    resultsScreen.classList.remove('active');
    examScreen.classList.add('active');
    reviewSection.style.display = 'none';
    reviewBtn.innerHTML = '<span class="icon">📋</span> مراجعة الإجابات الخاطئة';
    startTime = new Date();
    timeLeft = 60 * 60;
    startTimer();
    loadQuestion(currentQuestionIndex);
    updateUnansweredAlert();
}

function startNewExam() {
    startExam();
}

// ===== بدء الامتحان =====
function startExam() {
    startScreen.classList.remove('active');
    examScreen.classList.add('active');
    resultsScreen.classList.remove('active');

    currentQuestions = selectQuestions();
    shuffledQuestions = currentQuestions.map(q => shuffleQuestionOptions(q));
    userAnswers = new Array(shuffledQuestions.length).fill(null);
    currentQuestionIndex = 0;
    startTime = new Date();
    timeLeft = 60 * 60;
    examCompleted = false;

    buildNavigationGrid();
    startTimer();
    loadQuestion(currentQuestionIndex);
    updateUnansweredAlert();
}

// ===== الوضع المظلم =====
function toggleDarkMode() {
    const isDark = document.body.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.body.removeAttribute('data-theme');
        darkModeToggle.textContent = '🌙';
        darkModeToggle.title = 'الوضع الليلي';
        localStorage.setItem('darkMode', 'false');
    } else {
        document.body.setAttribute('data-theme', 'dark');
        darkModeToggle.textContent = '☀️';
        darkModeToggle.title = 'الوضع النهاري';
        localStorage.setItem('darkMode', 'true');
    }
}

// ===== التهيئة =====
function init() {
    if (localStorage.getItem('darkMode') === 'true') {
        document.body.setAttribute('data-theme', 'dark');
        darkModeToggle.textContent = '☀️';
        darkModeToggle.title = 'الوضع النهاري';
    }

    startExamBtn.addEventListener('click', startExam);
    endExamBtn.addEventListener('click', showConfirmModal);
    prevBtn.addEventListener('click', prevQuestion);
    nextBtn.addEventListener('click', nextQuestion);
    darkModeToggle.addEventListener('click', toggleDarkMode);
    reviewBtn.addEventListener('click', toggleReview);
    retryBtn.addEventListener('click', retryExam);
    newTestBtn.addEventListener('click', startNewExam);
    closeReviewBtn.addEventListener('click', () => {
        reviewSection.style.display = 'none';
        reviewBtn.innerHTML = '<span class="icon">📋</span> مراجعة الإجابات الخاطئة';
    });
    cancelEndBtn.addEventListener('click', () => { confirmModal.style.display = 'none'; });
    confirmEndBtn.addEventListener('click', endExam);
    confirmModal.addEventListener('click', (e) => {
        if (e.target === confirmModal) confirmModal.style.display = 'none';
    });

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) scrollTopBtn.classList.add('visible');
        else scrollTopBtn.classList.remove('visible');
    });
    scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

document.addEventListener('DOMContentLoaded', init);