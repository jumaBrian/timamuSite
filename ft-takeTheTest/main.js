var quiz = [];
quiz[0] = new Question("Little interest or pleasure in doing things?", "Not at all ", "Several days ", "More than half the days", "Nearly everyday");
quiz[1] = new Question("Feeling down, depressed or hopeless ?", "Not at all ", "Several days ", "More than half the days", "Nearly everyday");
quiz[2] = new Question("Trouble falling asleep,staying asleep, or sleeping too much?Feeling down, depressed or hopeless ?", "Not at all ", "Several days ", "More than half the days", "Nearly everyday");
quiz[3] = new Question(" Feeling tired or having little energy?", "Not at all ", "Several days ", "More than half the days", "Nearly everyday");
quiz[4] = new Question(" Poor appetite or overeating", "Not at all ", "Several days ", "More than half the days", "Nearly everyday");
quiz[5] = new Question("Feeling down, depressed or hopeless ?Feeling bad about yourself-or that you're a failure or have let yourself or  your family down?", "Not at all ", "Several days ", "More than half the days", "Nearly everyday");
var randomQuestion;
var answers = [];
var currentScore = 0;

document.addEventListener("DOMContentLoaded",
    function(event) {
        btnProvideQuestion();
    });

function
Question(question, rightAnswer, wrongAnswer1, wrongAnswer2) {
    this.question = question;
    this.rightAnswer = rightAnswer;
    this.wrongAnswer1 = wrongAnswer2;
};

function shuffle(o) {
    for (var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};