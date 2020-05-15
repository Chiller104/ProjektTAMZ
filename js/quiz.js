var summary = document.getElementById("Summary");
var summaryList = document.getElementById("SummaryList");
var count = 0;

function setSuccessAnswer() {
    var listItem = document.createElement("li");
    var listItemText = document.createTextNode("Správne");
    listItem.appendChild(listItemText);
    listItem.setAttribute("class", "success");
    summaryList.appendChild(listItem);
}

function setFailedAnswer() {
    var listItem = document.createElement("li");
    var listItemText = document.createTextNode("Neprávne");
    listItem.appendChild(listItemText);
    listItem.setAttribute("class", "failed");
    summaryList.appendChild(listItem);
}

function checkAnswer1() {
    let thisQuestion = document.getElementById("q-1");
    let nextQuestion = document.getElementById("q-2");
    let thisRightAnswer = document.getElementById("q-1_a-1");

    if (thisRightAnswer.checked == true) {
        setSuccessAnswer();
        count++;
    } else {
        setFailedAnswer();
    }
    thisQuestion.style.display = "none";
    nextQuestion.style.display = "block";
}

function checkAnswer2() {
    let thisQuestion = document.getElementById("q-2");
    let nextQuestion = document.getElementById("q-3");
    let thisRightAnswer = document.getElementById("q-2_a-3");

    if (thisRightAnswer.checked == true) {
        setSuccessAnswer();
        count++;
    } else {
        setFailedAnswer();
    }
    thisQuestion.style.display = "none";
    nextQuestion.style.display = "block";
}

function checkAnswer3() {
    let thisQuestion = document.getElementById("q-3");
    let nextQuestion = document.getElementById("q-4");
    let thisRightAnswer = document.getElementById("q-3_a-1");

    if (thisRightAnswer.checked == true) {
        setSuccessAnswer();
        count++;
    } else {
        setFailedAnswer();
    }
    thisQuestion.style.display = "none";
    nextQuestion.style.display = "block";
}

function checkAnswer4() {
    let thisQuestion = document.getElementById("q-4");
    let nextQuestion = document.getElementById("q-5");
    let thisRightAnswer = document.getElementById("q-4_a-2");

    if (thisRightAnswer.checked == true) {
        setSuccessAnswer();
        count++;
    } else {
        setFailedAnswer();
    }
    thisQuestion.style.display = "none";
    nextQuestion.style.display = "block";
}

function checkAnswer5() {
    let thisQuestion = document.getElementById("q-5");
    let thisRightAnswer = document.getElementById("q-5_a-3");

    if (thisRightAnswer.checked == true) {
        setSuccessAnswer();
        count++;
    } else {
        setFailedAnswer();
    }
    thisQuestion.style.display = "none";
    summary.style.display = "block";
    document.getElementById("points").innerHTML = "Počet získaných bodov: " + count + " / 5";
}