// Login Logic
document.addEventListener('DOMContentLoaded', () => { // Ensure DOM is loaded
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        console.log("Login form found, attaching event listener");
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Prevent page reload
            const usernameInput = document.getElementById('username');
            if (!usernameInput) {
                console.error("Username input not found");
                return;
            }
            const username = usernameInput.value.trim();
            const students = ["Test", "Student1", "Student2", "Student2", "Student3", "........." ];
            
            console.log(`Attempting login with username: ${username}`);
            
            if (username === "Coach") {
                console.log("Redirecting to admin.html");
                window.location.href = "admin.html";
            } else if (students.includes(username)) {
                localStorage.setItem("currentUser", username);
                const testState = JSON.parse(localStorage.getItem(`testState_${username}`) || "{}");
                const scores = JSON.parse(localStorage.getItem("scores") || "{}");
                if (scores[username]?.completed && !testState.canRetake) {
                    document.getElementById('error').textContent = "Test already completed. Contact admin to retake.";
                    console.log("Test completed, no retake allowed");
                } else {
                    console.log("Redirecting to test.html");
                    window.location.href = "test.html";
                }
            } else {
                document.getElementById('error').textContent = "Invalid username!";
                console.log("Invalid username entered");
            }
        });
    } else {
        console.error("Login form not found on this page");
    }
});

// Test Logic
if (window.location.pathname.includes("test.html")) {
    const testForm = document.getElementById('testForm');
    const submitButton = document.getElementById('submitTest');
    const timerDisplay = document.getElementById('timer');
    const questionNav = document.getElementById('questionNav');
    const prevButton = document.getElementById('prevButton');
    const nextButton = document.getElementById('nextButton');
    const usernameDisplay = document.getElementById('usernameDisplay');
    const username = localStorage.getItem("currentUser");
    let timeLeft = 30 * 60;
    let timerId;
    let shuffledQuestions;
    let currentQuestionIndex = 0;

    let testState = JSON.parse(localStorage.getItem(`testState_${username}`) || "{}");

    // Check if test is completed on page load; log out if true
    if (testState.completed) {
        localStorage.removeItem("currentUser"); // Log out
        window.location.href = "index.html"; // Redirect to login
        // Removed 'return' here since it's not in a function
    } else {
        // Only proceed if test is not completed
        if (usernameDisplay && username) {
            usernameDisplay.textContent = username;
        } else {
            console.error("Username not found or display element missing");
        }

        if (!testState.questions || testState.completed) {
            shuffledQuestions = getRandomQuestions();
            testState = {
                questions: shuffledQuestions,
                answers: {},
                timeLeft: timeLeft,
                completed: false,
                canRetake: false
            };
            localStorage.setItem(`testState_${username}`, JSON.stringify(testState));
        } else {
            shuffledQuestions = testState.questions;
            timeLeft = testState.timeLeft;
        }

        function renderQuestionNav() {
            questionNav.innerHTML = '';
            for (let i = 0; i < 50; i++) {
                const span = document.createElement('span');
                span.textContent = i + 1;
                span.className = `question-number ${testState.answers[i] !== undefined ? 'answered' : ''} ${i === currentQuestionIndex ? 'current' : ''}`;
                span.addEventListener('click', () => {
                    currentQuestionIndex = i;
                    renderCurrentQuestion();
                    renderQuestionNav();
                });
                questionNav.appendChild(span);
            }
        }

        function renderCurrentQuestion() {
            testForm.innerHTML = '';
            const q = shuffledQuestions[currentQuestionIndex];
            const div = document.createElement('div');
            div.className = 'question';
            div.innerHTML = `
                <p>${currentQuestionIndex + 1}. ${q.question}</p>
                ${q.options.map((opt, i) => `
                    <label><input type="radio" name="q${currentQuestionIndex}" value="${i}" ${testState.answers[currentQuestionIndex] === i ? 'checked' : ''}> ${opt}</label><br>
                `).join('')}
            `;
            testForm.appendChild(div);
            prevButton.disabled = currentQuestionIndex === 0;
            nextButton.disabled = currentQuestionIndex === 49;
        }

        renderQuestionNav();
        renderCurrentQuestion();

        testForm.addEventListener('change', (e) => {
            const input = e.target;
            if (input.type === 'radio') {
                const qIndex = parseInt(input.name.replace('q', ''));
                testState.answers[qIndex] = parseInt(input.value);
                localStorage.setItem(`testState_${username}`, JSON.stringify(testState));
                renderQuestionNav();
            }
        });

        prevButton.addEventListener('click', () => {
            if (currentQuestionIndex > 0) {
                currentQuestionIndex--;
                renderCurrentQuestion();
                renderQuestionNav();
            }
        });

        nextButton.addEventListener('click', () => {
            if (currentQuestionIndex < 49) {
                currentQuestionIndex++;
                renderCurrentQuestion();
                renderQuestionNav();
            }
        });

        timerDisplay.textContent = formatTime(timeLeft);
        timerId = setInterval(() => {
            timeLeft--;
            testState.timeLeft = timeLeft;
            localStorage.setItem(`testState_${username}`, JSON.stringify(testState));
            timerDisplay.textContent = formatTime(timeLeft);
            if (timeLeft <= 0) {
                clearInterval(timerId);
                submitTest();
            }
        }, 1000);

        submitButton.addEventListener('click', submitTest);

        function submitTest() {
            clearInterval(timerId);
            let score = 0;
            const results = [];

            shuffledQuestions.forEach((q, index) => {
                const userAnswer = testState.answers[index] !== undefined ? testState.answers[index] : -1;
                if (userAnswer === q.answer) score++;
                results.push({
                    question: q.question,
                    userAnswer: userAnswer === -1 ? "Not answered" : q.options[userAnswer],
                    correctAnswer: q.options[q.answer],
                    isCorrect: userAnswer === q.answer
                });
            });

            testForm.innerHTML = `<h2>Your Score: ${score}/50</h2>`;
            results.forEach((r, i) => {
                const div = document.createElement('div');
                div.className = 'question';
                div.innerHTML = `
                    <p>${i + 1}. ${r.question}</p>
                    <p>Your Answer: <span class="${r.isCorrect ? 'correct' : 'wrong'}">${r.userAnswer}</span></p>
                    <p>Correct Answer: <span class="correct">${r.correctAnswer}</span></p>
                `;
                testForm.appendChild(div);
            });

            const scores = JSON.parse(localStorage.getItem("scores") || "{}");
            scores[username] = scores[username] || { score: 0, attempts: 0, completed: false };
            scores[username].score = score;
            scores[username].attempts++;
            scores[username].completed = true;
            localStorage.setItem("scores", JSON.stringify(scores));

            testState.completed = true;
            localStorage.setItem(`testState_${username}`, JSON.stringify(testState));

            questionNav.style.display = 'none';
            prevButton.style.display = 'none';
            nextButton.style.display = 'none';
            submitButton.style.display = 'none';
        }

        function formatTime(seconds) {
            const minutes = Math.floor(seconds / 60);
            const secs = seconds % 60;
            return `${minutes}:${secs < 10 ? '0' + secs : secs}`;
        }
    }
}

// Admin Dashboard Logic
if (window.location.pathname.includes("admin.html")) {
    document.addEventListener('DOMContentLoaded', () => {
        const scoreTable = document.getElementById('scoreTable');
        const scores = JSON.parse(localStorage.getItem("scores") || "{}");
        const students = ["Test", "Bolaji", "Tishe", "Vera", "Tina", "Lucky", "Gbemiga", "Uche", "Tosin", "Ola", "Zucky", "Justice", "Big_Spanky", "Samuel", "Ade", "Mercy"];

        students.forEach(student => {
            const data = scores[student] || { score: 0, attempts: 0, completed: false };
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${student}</td>
                <td>${data.score}</td>
                <td>${data.attempts}</td>
                <td><button class="reset-btn" data-student="${student}" ${data.completed ? '' : 'disabled'}>Reset Test</button></td>
            `;
            scoreTable.appendChild(row);
        });

        scoreTable.addEventListener('click', (e) => {
            const button = e.target.closest('.reset-btn');
            if (button) {
                const student = button.getAttribute('data-student');
                const testState = JSON.parse(localStorage.getItem(`testState_${student}`) || "{}");
                const scores = JSON.parse(localStorage.getItem("scores") || "{}");

                if (scores[student] && scores[student].completed) {
                    testState.canRetake = true;
                    testState.completed = false;
                    localStorage.setItem(`testState_${student}`, JSON.stringify(testState));

                    scores[student].completed = false;
                    localStorage.setItem("scores", JSON.stringify(scores));

                    button.disabled = true;
                    alert(`${student} can now retake the test.`);
                }
            }
        });
    });
}
