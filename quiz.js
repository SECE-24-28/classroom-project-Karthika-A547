const questions = [
    {
        text: "Which keyword declares a constant in JavaScript?",
        options: ["var", "let", "const", "static"]
    },
    {
        text: "Which method is used to log to the console in JavaScript?",
        options: ["print()", "log()", "console()", "console.log()"]
    },
    {
        text: "Which of these is NOT a JavaScript data type?",
        options: ["number", "string", "boolean", "character"]
    }
];
const questionel = document.getElementById("question");
const o1el = document.getElementById("o1");
const o2el = document.getElementById("o2");
const o3el = document.getElementById("o3");   
const o4el = document.getElementById("o4");
const pel = document.getElementById("p");
const nextel = document.getElementById("next");
let currIndex = 0;
function nextQuestion() {
    currIndex++;
    if (currIndex === questions.length) {
        alert("You have completed the quiz!");
        location.href = "task6.html";  // Change this to your next page if needed
        return;
    }
    pel.innerHTML = `Question ${currIndex + 1} of ${questions.length}`;
    questionel.innerHTML = questions[currIndex].text;
    o1el.innerHTML = questions[currIndex].options[0];
    o2el.innerHTML = questions[currIndex].options[1];
    o3el.innerHTML = questions[currIndex].options[2];
    o4el.innerHTML = questions[currIndex].options[3];
}