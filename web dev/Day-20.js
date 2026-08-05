let questions = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyper Transfer Markup Language", "None of these"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "Which property is used to change background color in CSS?",
        options: ["color", "background-color", "bg-color", "background"],
        answer: "background-color"
    },
    {
        question: "Which keyword declares a variable in JavaScript?",
        options: ["var", "let", "const", "All of these"],
        answer: "All of these"
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    let q = questions[currentQuestion];
    document.getElementById("question").innerHTML = q.question;
    document.getElementById("options").innerHTML = "";

    for (let i = 0; i < q.options.length; i++) {
        let btn = document.createElement("button");
        btn.innerHTML = q.options[i];
        btn.addEventListener("click", function() {
            checkAnswer(q.options[i]);
        });
        document.getElementById("options").appendChild(btn);
    }
}

function checkAnswer(selected) {
    let q = questions[currentQuestion];
    if (selected === q.answer) {
        document.getElementById("result").innerHTML = "Correct!";
        score++;
    } else {
        document.getElementById("result").innerHTML = "Wrong! Answer: " + q.answer;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        setTimeout(loadQuestion, 1500);
    } else {
        setTimeout(function() {
            document.getElementById("question").innerHTML = "Quiz Complete!";
            document.getElementById("options").innerHTML = "";
            document.getElementById("result").innerHTML = "";
            document.getElementById("score").innerHTML = "Your score: " + score + "/" + questions.length;
        }, 1500);
    }
}

loadQuestion();
