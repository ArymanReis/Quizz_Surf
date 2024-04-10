const question       = document.querySelector("#question");
const answersBox     = document.querySelector("#answers-box");
const quizzContainer = document.querySelector("#quizz-container");
const scoreContainer = document.querySelector("#score-container");
const letters        = ['a', 'b', 'c', 'd'];
let points           = 0;
let actualQuestion   = 0;

// Perguntas
const questions = [
{
    "question": "Que saldação é mais comum entre os surfistas?",
    "answers": [
    {
        "answer": "Aloha",
        "correct": true
    },
    {
        "answer": "Beleza",
        "correct": false
    },
    {
        "answer": "Tamo Junto",
        "correct": false
    },
    {
        "answer": "Tudo bem?",
        "correct": false
    },
    ]
},
{
    "question": "Quem foi o primeiro campeão mundial de surf?",
    "answers": [
    {
        "answer": "Felipe Toledo",
        "correct": false
    },
    {
        "answer": "Gabriel Medina",
        "correct": true
    },
    {
        "answer": "Peterson Rosa",
        "correct": false
    },
    {
        "answer": "Fabio Gouveia",
        "correct": false
    },
    ]
},
{
    "question": "Praia mais famosa no mundo do surf?",
    "answers": [
    {
        "answer": "Havaí",
        "correct": true
    },
    {
        "answer": "Grumari",
        "correct": false
    },
    {
        "answer": "Indonésia",
        "correct": false
    },
    {
        "answer": "Saquarema",
        "correct": false
    },
    ]
},
]

// Substituição do quiz para a primeira pergunta
function init() {
    createQuestion(0);
}

// Create a question 
function createQuestion(i) {

// Limpa questão anterior
const oldButtons = answersBox.querySelectorAll("button");

oldButtons.forEach(function(btn) {
    btn.remove();
});
// Alterar o texto da pergunta
const questionText   = question.querySelector("#question-text");
const questionNumber = question.querySelector("#question-number");

questionText.textContent   = questions[i].question;
questionNumber.textContent = i + 1;

// inserir as alternativas
questions[i].answers.forEach(function(answer, i) {

    // Cria o tamplete do botão do quizz
    const answerTemplate = document.querySelector(".answer-template").cloneNode(true);
    
    const letterBtn = answerTemplate.querySelector(".btn-letter");
    const answerText = answerTemplate.querySelector(".question-answer");

    letterBtn.textContent  = letters[i];
    answerText.textContent = answer['answer'];

    answerTemplate.setAttribute("correct-answer", answer["correct"]);

    // Remover hide e template class
    answerTemplate.classList.remove("hide");
    answerTemplate.classList.remove("answer-template");

    // Inserir a alternativa na tela
    answersBox.appendChild(answerTemplate);

    // Inserir um evvento de clique no botão
    answerTemplate.addEventListener("click", function(){
        console.log(this);
    });
});

// Incrementar o número da questão
actualQuestion++;
}

// Inicialização do Quizz
init();
