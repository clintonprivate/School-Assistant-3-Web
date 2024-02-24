fetch('upcomingexams.txt').then(response => {return response.text();}).then(upcomingExams => {
    // Split into subjects
    upcomingExams = upcomingExams.split("\n");
    upcomingExams.pop();

    // Create a suggestion circle for each exam
    var circlesContainer = document.getElementById('circlesContainer');
    upcomingExams.forEach(examInformation => {
        const circle = document.createElement('button');
        circle.classList.add('suggestion');
        examInformation = examInformation.split(" | ");
        var article = "a";
        if (firstLetterIsAVowel(examInformation[0])) {
            article += "n";
        }
        circle.textContent = "Create " + article + " " + examInformation[0].toLowerCase() + " " + examInformation[1].toLowerCase() + "?";
        circle.onclick = function() {
            createNewExam(examInformation);
        };
        circlesContainer.appendChild(circle);
    });
});

function firstLetterIsAVowel(str) {
    const firstLetter = str.toLowerCase().charAt(0);
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(firstLetter);
}

function createNewExam(examInformation) {
    window.location.href = "create.html?subject=" + examInformation[0] + "&type=" + examInformation[1] + "&date=" + examInformation[2];
}