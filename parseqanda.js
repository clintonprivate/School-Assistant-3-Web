// Split entire qanda into pairs
qanda = qanda.replaceAll("\n", "");
var qaPairs = qanda.split("</antwort>");
for (var i = 0; i < qaPairs.length; i++) {
    qaPairs[i] += "</antwort>";
}
qaPairs.pop();

// Add the questions and an input bar to the form
var quizElement = document.getElementById("quiz");
qaPairs.forEach(function(pair) {
    var question = pair.substring(pair.indexOf("<frage>") + "<frage>".length, pair.indexOf("</frage>")) + " ";
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
    }
    questionElement.appendChild(answerInput);
    quizElement.appendChild(questionElement);
})

// Move submit button to the bottom of the questions
var submitButton = document.getElementById("submitBtn");
quizElement.removeChild(submitButton);
quizElement.appendChild(submitButton);

// Display
console.log(qaPairs);
