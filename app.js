//Generates choices and question, calculates the score, checks the number of questions in array
function populate() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // pulls question from array and places it into the array
        var element = document.getElementById('question');
        element.innerHTML = quiz.getQuestionIndex().text;



        var choices = quiz.getQuestionIndex().choices;



        //This for loop goes through the array and sets the matches the buttons up with the 4 avaiable choices
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById('choice' + i); //choice 0
            element.innerHTML = choices[i]; //set choice 0 innerhtml 
            guess("btn" + i, choices[i]);

        }
        //shows progress while game is ongoing
        showProgress();
    }
}

//passes ID and guess arguments to allow the client to guess and compares it to guess prototype
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function () {
        quiz.guess(guess);
        populate();
    }
}

//Shows the progress of test by matching the lengh of array to the current index  
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;

}


//This will display the result and score at the end of the Quiz
function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    gameOverHtml += "<h2 id='score'>Your Score: " + quiz.score + " out of " + quiz.questionIndex + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;

}



//this is linked to "question.js" and will send the 3 paraments to the questions function (text, choice, answer)
var questions = [
    new Question("Who is the creator of JavaScript?", ["Steve Balmer", "Brendan Eich", "Håkon Wium Lie", "Yang Lu"], "Brendan Eich"),
    new Question("What symbol is used to create JavaScript comments?", ["*/", "&&", "//", "||"], "//"),
    new Question("Which is not an object oriented programming language?", ["Java", "C#", "C++", "C"], "C++")
];

//object for 'quiz controller' as a contructor we are sending the questions that was created in array
var quiz = new Quiz(questions);

populate();