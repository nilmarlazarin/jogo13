const questions = [
    // Matemática
    {
        question: "Quanto é 5 + 3?",
        options: ["5", "8", "10", "7"],
        answer: 1
    },
    {
        question: "Quanto é 12 ÷ 4?",
        options: ["4", "3", "2", "6"],
        answer: 1
    },
    {
        question: "Quanto é 6 × 7?",
        options: ["42", "48", "40", "36"],
        answer: 0
    },
    {
        question: "Quanto é 15 - 7?",
        options: ["10", "9", "7", "8"],
        answer: 1
    },
    {
        question: "Quanto é 8 × 8?",
        options: ["64", "70", "80", "72"],
        answer: 0
    },

    // Português
    {
        question: "Qual a forma correta da palavra?",
        options: ["Aguá", "Água", "Agua", "Aguaá"],
        answer: 1
    },
    {
        question: "Qual o sinônimo de 'feliz'?",
        options: ["Triste", "Contente", "Raivoso", "Aborrecido"],
        answer: 1
    },
    {
        question: "Como se chama o sinal de pontuação '?'",
        options: ["Ponto de exclamação", "Ponto final", "Interrogação", "Vírgula"],
        answer: 2
    },
    {
        question: "Qual destas palavras está no plural?",
        options: ["Cachorro", "Casa", "Livros", "Carro"],
        answer: 2
    },
    {
        question: "Qual a forma correta de escrever?",
        options: ["Muitto", "Muitíssimo", "Muitos", "Muito"],
        answer: 3
    }
];

let currentQuestionIndex = 0;
let score = 0;
let playerName = "";

function startGame() {
    playerName = document.getElementById("player-name").value;
    if (!playerName) {
        alert("Por favor, digite seu nome!");
        return;
    }

    document.getElementById("start-screen").style.display = "none";
    document.getElementById("quiz-screen").style.display = "block";
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").innerText = question.question;

    const answerButtons = document.querySelectorAll(".answer-button");
    question.options.forEach((option, index) => {
        answerButtons[index].innerText = option;
    });
    document.getElementById("feedback").innerText = "";
}

function checkAnswer(selectedOption) {
    const question = questions[currentQuestionIndex];
    const correctAnswer = question.answer;

    if (selectedOption === correctAnswer) {
        score++;
        document.getElementById("feedback").innerText = "Correto!";
        document.getElementById("feedback").style.color = "green";
        showPrincessAnimation();  // Exibir animação da Princesa Sofia em caso de acerto
    } else {
        document.getElementById("feedback").innerText = "Errado!";
        document.getElementById("feedback").style.color = "red";
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        setTimeout(() => showQuestion(), 1000);
    } else {
        setTimeout(endGame, 1000);
    }
}

function showPrincessAnimation() {
    const sofia = document.getElementById("sofia-animation");
    sofia.style.display = "block";
    setTimeout(() => {
        sofia.style.display = "none";
    }, 3000);  // A Princes
