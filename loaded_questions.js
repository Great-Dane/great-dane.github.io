console.log('here we go');
var data;
past_questions = [];

Papa.parse("https://raw.githubusercontent.com/Great-Dane/great-dane.github.io/master/loaded_questions.csv", { 
    download: true,
    complete: function(results) {
        data = results.data;
        console.log(data);
    }
});

function anyQuestion() {
    idx = Math.floor(Math.random()*477);
    if(!past_questions.includes(idx)) {
        past_questions.push(idx);
        console.log(data[idx]);
    }
}