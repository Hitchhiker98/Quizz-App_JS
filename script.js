const quizData = [
    {
        question: '"The Force can have a strong influence on the weak-minded."',
        a: "Star Wars: A New Hope",
        b: "Star Wars: The Phantom Menace",
        c: "Star Wars: Revenge of the Sith",
        d: "Star Wars: The Last Jedi",
        correct: "a"
    }, 
    {
        question: "Always remember, your focus determines your reality.",
        a: "Star Wars: The Emprie Strikes Back",
        b: "Star Wars: The Phantom Menace",
        c: "Star Wars: The Force Awakens",
        d: "Rogue One: A Star Wars Story",
        correct: "b"
    },
    {
        question: "They fly now?",
        a: "Star Wars: Attack of the Clones",
        b: "Star Wars The Rise of Skywalker",
        c: "Rogue One: A Star Wars Story",
        d: "SOLO: A Star Wars Story",
        correct: "c"
    },
    {
        question: "I've been in this fight since I was six years old!",
        a: "Star Wars: A New Hope",
        b: "Star Wars The Rise of Skywalker",
        c: "Rogue One: A Star Wars Story",
        d: "SOLO: A Star Wars Story",
        correct: "c"
    },
    {
        question: "I don't like sand.",
        a: "Star Wars: A New Hope",
        b: "Star Wars: Attack of the Clones",
        c: "Star Wars: The Force Awakens",
        d: "Star Wars The Rise of Skywalker",
        correct: "b"
    }
]

const quiz = document.getElementById("quiz");
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const submitBtn = document.getElementById("submit");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");


let currentQuiz = 0; 
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {

    let answer = undefined;

    answerEls.forEach((answerEls) => {
        if(answerEls.checked){
            answer = answerEls.id
        }
    })

    console.log(answer)

    return answer;   
}

function deselectAnswers(){
    answerEls.forEach((answerEls) => {
        answerEls.checked = false;
    })
}


submitBtn.addEventListener("click", () => {

    const answer = getSelected();

    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++; 

        if(currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            console.log(quiz);
            quiz.innerHTML = ` <h2 id="end">You answered correctly at ${score}/${quizData.length} questions.</h2>
                 <button onclick="location.reload()">Reload</button> `;
        }   
    } 
})
