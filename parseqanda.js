// Split entire qanda into pairs
qanda = qanda.trim();
var qaPairs = qanda.split("</antwort>");
for (var i = 0; i < qaPairs.length; i++) {
    qaPairs[i] += "</antwort>";
}
qaPairs.pop();

// Add the questions and an input bar to the form
var quizElement = document.getElementById("quiz");
qaPairs.forEach(function(pair) {
    var question = pair.substring(pair.indexOf("<frage>") + "<frage>".length, pair.indexOf("</frage>")) + " ";
    var answer = pair.substring(pair.indexOf("<antwort>") + "<antwort>".length, pair.indexOf("</antwort>"));
    answer = answer.trim();
    var questionElement = document.createElement("div");
    questionElement.classList.add("question");
    var questionLabel = document.createElement("label");
    questionLabel.innerHTML = question;
    questionElement.appendChild(questionLabel);
    var answerInput;
    if (qaPairs.length > 1) {
        answerInput = document.createElement("input");
        answerInput.type = "text";
    }
    else if (qaPairs.length == 1) {
        var lineBreak = document.createElement("br");
        questionElement.appendChild(lineBreak);
        answerInput = document.createElement("textarea");
        answerInput.id = "recite"
        answerInput.setAttribute("data-answer", answer);
    }
    answerInput.spellcheck = false;
    questionElement.appendChild(answerInput);
    quizElement.appendChild(questionElement);
})

// Move submit button to the bottom of the questions
var submitButton = document.getElementById("submitBtn");
quizElement.removeChild(submitButton);
quizElement.appendChild(submitButton);

// Display the correct exact answer after clicking the submit button
function displayAnswer() {
    var answerInput = document.getElementById("recite");
    var yourAnswer = answerInput.value;
    var correctAnswer = answerInput.getAttribute("data-answer");
    var displayString = "";
    for (var i = 0; i < yourAnswer.length || i < correctAnswer.length; i++) {
        if (yourAnswer[i] === correctAnswer[i]) {
            displayString += '<span class="correct">' + correctAnswer[i] + '</span>';
        } else {
            displayString += '<span class="incorrect">' + correctAnswer[i] + '</span>';
        }
        if (correctAnswer[i] === '\n') {
            displayString += '<br>';
        }
    }
    quizElement.innerHTML = displayString;
}
