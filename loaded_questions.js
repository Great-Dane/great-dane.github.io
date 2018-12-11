console.log('here we go');
var idx = -1;
var data;
var past_questions = [-1];

Papa.parse("https://raw.githubusercontent.com/Great-Dane/great-dane.github.io/master/loaded_questions.csv", { 
    download: true,
    complete: function(results) {
        data = results.data;
        console.log(data);
    }
});

function anythingGoes() {
    while (past_questions.includes(idx)) {
        idx = Math.floor(Math.random()*115) + 120;
    }
    past_questions.push(idx);
    document.getElementById("question").innerHTML = data[idx][0];
    document.getElementById("category").innerHTML = data[idx][1];
}

function hypotheticals() {
    while (past_questions.includes(idx)) {
        idx = Math.floor(Math.random()*120);
    }
    past_questions.push(idx);
    document.getElementById("question").innerHTML = data[idx][0];
    document.getElementById("category").innerHTML = data[idx][1];
}

function noBrainers() {
    while (past_questions.includes(idx)) {
        idx = Math.floor(Math.random()*119) + 237;
    }
    past_questions.push(idx);
    document.getElementById("question").innerHTML = data[idx][0];
    document.getElementById("category").innerHTML = data[idx][1];
}

function personals() {
    while (past_questions.includes(idx)) {
        idx = Math.floor(Math.random()*119) + 357;
    }
    past_questions.push(idx);
    document.getElementById("question").innerHTML = data[idx][0];
    document.getElementById("category").innerHTML = data[idx][1];
}

function randomQuestion() {
    while (past_questions.includes(idx)) {
        idx = Math.floor(Math.random()*477);
    }
    past_questions.push(idx);
    document.getElementById("question").innerHTML = data[idx][0];
    document.getElementById("category").innerHTML = data[idx][1];
}