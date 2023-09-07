// create an array with list of questions and answers

const questions = [
    {
        question: "What is the capital of Estonia?",
        answers: [
            { text: "Warsaw", correct: false },
            { text: "Riga", correct: false },
            { text: "Tallinn", correct: true },
            { text: "Vilnius", correct: false },
        ]
    },
    {
        question: "The capital of which EU member is the Northernmost?",
        answers: [
            { text: "Sweden", correct: false },
            { text: "Finland", correct: true },
            { text: "Denmark", correct: false },
            { text: "Estonia", correct: false },
        ]
    },
    {
        question: "The capital of which EU member is Zagreb?",
        answers: [
            { text: "Bulgaria", correct: false },
            { text: "Slovenia", correct: false },
            { text: "Cyprus", correct: false },
            { text: "Croatia", correct: true },
        ]
    },
    {
        question: "The capital of which EU member is the Southernmost?",
        answers: [
            { text: "Cyprus", correct: true },
            { text: "Malta", correct: false },
            { text: "Greece", correct: false },
            { text: "Portugal", correct: false },
        ]
    },
    {
        question: "Which of the following languageus is NOT the official language in Brussels?",
        answers: [
            { text: "English", correct: true },
            { text: "German", correct: false },
            { text: "French", correct: false },
            { text: "Dutch", correct: false },
        ]
    },
    {
        question: "Which of the following EU capitals has the largest population?",
        answers: [
            { text: "Berlin", correct: true },
            { text: "Paris", correct: false },
            { text: "Madrid", correct: false },
            { text: "Rome", correct: false },
        ]
    },
    {
        question: "Which country's capital is NOT a coastal city?",
        answers: [
            { text: "Ireland", correct: false },
            { text: "Greece", correct: false },
            { text: "Italy", correct: true },
            { text: "Finland", correct: false },
        ]
    },
    {
        question: "The Danube river is NOT flowing through which EU capital?",
        answers: [
            { text: "Budapest", correct: false },
            { text: "Zagreb", correct: true },
            { text: "Bratislava", correct: false },
            { text: "Vienna", correct: false },
        ]
    },
    {
        question: "The capital of which EU member is the Westernmost?",
        answers: [
            { text: "Ireland", correct: false },
            { text: "Portugal", correct: true },
            { text: "Spain", correct: false },
            { text: "none of the above", correct: false },
        ]
    },
    {
        question: "Which of the following EU capitals has the smallest population?",
        answers: [
            { text: "Nikosia", correct: false },
            { text: "Luxembourg", correct: false },
            { text: "Valletta", correct: true },
            { text: "Ljubljana", correct: false },
        ]
    },
    {
        question: "The capital of which EU member is the Easternmost?",
        answers: [
            { text: "Finland", correct: false },
            { text: "Estonia", correct: false },
            { text: "Romania", correct: false },
            { text: "Cyprus", correct: true },
        ]
    },
    {
        question: "Bratislava is the capital of which of the following EU member?",
        answers: [
            { text: "Bulgaria", correct: false },
            { text: "Slovenia", correct: false },
            { text: "Slovakia", correct: true },
            { text: "Hungary", correct: false },
        ]
    },
    {
        question: "Which of the following EU capitals is a coastal city?",
        answers: [
            { text: "Riga", correct: true },
            { text: "Rome", correct: false },
            { text: "Madrid", correct: false },
            { text: "Sofia", correct: false },
        ]
    },
    {
        question: "Which of the nordic countries is NOT a member of the European Union?",
        answers: [
            { text: "Norway", correct: true },
            { text: "Sweden", correct: false },
            { text: "Denmark", correct: false },
            { text: "Finland", correct: false },
        ]
    },
    {
        question: "And finally - how many members does the European Union have?",
        answers: [
            { text: "25", correct: false },
            { text: "26", correct: false },
            { text: "27", correct: true },
            { text: "28", correct: false },
        ]
    }
];

let currentQuestionIndex = 0;
const answerButtons = document.getElementById("answer-buttons");
const questionElement = document.getElementById("question");

function startQuiz() {
    currentQuestionIndex = 0; // restarts question index to 0 when we start quiz 
    displayQuestion();
}

function displayQuestion() {
    hidePreviousQuestion();
    // get properties from questions array and set a question number
    let currentQuestion = questions[currentQuestionIndex];
    let questionNr = currentQuestionIndex + 1;

    // display current question
    questionElement.innerHTML = questionNr + ". " + currentQuestion.question;

    // display answers for current question using forEach array method
    currentQuestion.answers.forEach(answers => {
        const button = document.createElement("button");
        button.innerHTML = answers.text;
        button.classList.add("buttons");
        answerButtons.appendChild(button);
        
        // returns true or false from dataset correct
        if(answers.correct) {
            button.dataset.correct = answers.correct;
        }
        // add event listener for button clicks
        button.addEventListener("click", checkAnswer);
    });
}

function hidePreviousQuestion() {
    // hide previous question while displaying current question
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

/*
function for event listener to check
whether selected answer is true or false    
*/
function checkAnswer(c) {
    const selectedButton = c.target;
    const isCorrect = selectedButton.dataset.correct === "true";

    // style buttons for click event
    if(isCorrect) {
        selectedButton.classList.add("correct");
    } else {
        selectedButton.classList.add("incorrect");
    }

    // check dataset for each button if it's true
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        // disable buttons when answer was selected
        button.disabled = "true";
    })
}

startQuiz();

function handleNextButton() {

}

function showScore() {

}