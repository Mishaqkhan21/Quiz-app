const questions = [
    {
        question: "What does HTML stand for?",
        answers: [
            "Hyper Text Markup Language",
            "High Text Machine Language",
            "Hyperlink Text Management Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },

    {
        question: "Which language is used to style web pages?",
        answers: ["HTML", "CSS", "Java", "SQL"],
        correct: 1
    },

    {
        question: "Which language is used to add interactivity to webpages?",
        answers: ["CSS", "HTML", "JavaScript", "XML"],
        correct: 2
    },

    {
        question: "Which symbol is used for an ID selector in CSS?",
        answers: [".", "#", "@", "*"],
        correct: 1
    },

    {
        question : "Why we use Javascript in web development?",
        answers :  ["interactive and dynamic","For logic building","To store files","Create structure"],
        correct : 0
    }



];

let questionIndex = 0;
let score = 0;

const question = document.getElementById("question");
const answers = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

const questionCount = document.getElementById("question-count");
const scoreText = document.getElementById("score");

const quiz = document.getElementById("quiz");
const result = document.getElementById("result");

const finalScore = document.getElementById("final-score");
const message = document.getElementById("message");

const restartButton = document.getElementById("restart-btn");


function showQuestion() {

    let current = questions[questionIndex];

    question.innerText = current.question;

    questionCount.innerText =
        "Question " + (questionIndex + 1) + " of " + questions.length;

    scoreText.innerText = "Score: " + score;

    answers.innerHTML = "";

    nextButton.disabled = true;

    for (let i = 0; i < current.answers.length; i++) {

        let button = document.createElement("button");

        button.innerText = current.answers[i];
        button.className = "answer-btn";

        button.onclick = function() {
            checkAnswer(i, button);
        };

        answers.appendChild(button);
    }
}


function checkAnswer(selected, button) {

    let correct = questions[questionIndex].correct;

    if (selected === correct) {

        button.classList.add("correct");
        score++;

    } else {

        button.classList.add("wrong");

    
        answers.children[correct].classList.add("correct");
    }

    scoreText.innerText = "Score: " + score;

    for (let i = 0; i < answers.children.length; i++) {
        answers.children[i].disabled = true;
    }

    nextButton.disabled = false;
}


nextButton.onclick = function() {

    questionIndex++;

    if (questionIndex < questions.length) {

        showQuestion();

    } else {

        showResult();
    }
};


function showResult() {

    quiz.classList.add("hide");
    result.classList.remove("hide");

    let percentage = (score / questions.length) * 100;

    finalScore.innerText =
        score + " / " + questions.length + " (" + percentage + "%)";

    if (percentage === 100) {
        message.innerText = "Excellent! You got everything correct.";
    } else if (percentage >= 50) {
        message.innerText = "Good job! Keep practicing.";
    } else {
        message.innerText = "Keep learning and try again!";
    }
};



restartButton.onclick = function() {

    questionIndex = 0;
    score = 0;

    result.classList.add("hide");
    quiz.classList.remove("hide");

    showQuestion();
};


showQuestion();
