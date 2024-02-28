var quizdata = [{
        question: "Why did the scarecrow win an award?",
        a: "Outstanding in his field.",
        b: "Best actor on the field.",
        c: "Excellent at scaring crows.",
        correct: "a",
    },
    {
        question: "Why dont scientists trust atoms?",
        a: "They are too small.",
        b: "Because they make up everything.",
        c: "Atoms are known pranksters.",
        correct: "b",
    },
    {
        question: "Why dont skeletons fight each other?",
        a: "It is against their principles.",
        b: "Theyre too bone-tired.",
        c: "They dont have the guts.",
        correct: "c",
    },
    {
        question: "What did one hat say to the other hat?",
        a: "Hats off to you!",
        b: "We make a great pair.",
        c: "You are on the top.",
        correct: "a",
    },
    {
        question: "Why did the computer go to therapy?",
        a: "It had a hard drive of issues.",
        b: "It had too many bytes of emotions.",
        c: "No peace in cyberspace.",
        correct: "a",
    },
];


var quiz = document.getElementById("quizdiv");

var answer = document.querySelectorAll(".answer");
var question = document.getElementById("question");

var option_a = document.getElementById("a_value");
var option_b = document.getElementById("b_value");
var option_c = document.getElementById("c_value");

var submit_btn = document.getElementById("submit");

var current_question = 0;
var quiz_score = 0;

load_quiz();

function load_quiz() {
    deselect();



    question.innerHTML = quizdata[current_question].question;
    option_a.innerText = quizdata[current_question].a;
    option_b.innerText = quizdata[current_question].b;
    option_c.innerText = quizdata[current_question].c;
}

function deselect() {
    answer.forEach((answer) => (answer.checked = false));
}

submit_btn.addEventListener("click", () => {
    var selectedoption;
    answer.forEach((answer) => {
        if (answer.checked) {
            selectedoption = answer.id;
        }
    });

    if (selectedoption == quizdata[current_question].correct) {
        quiz_score = quiz_score + 1;
    }
    current_question = current_question + 1;

    console.log(current_question);
    console.log(quizdata.length);

    if (current_question == quizdata.length) {
        document.getElementById(
            "quizdiv"
        ).innerHTML = `<h1>🎉 Superb! <br> You scored ${quiz_score} / ${quizdata.length}  </h1>
        <button class="btn btn-danger" onclick="location.reload()">RESTART</button>`;
    } else {
        load_quiz();
    }
});