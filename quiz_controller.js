//This is are constructive function that we are using to calculate score with 3 attributes
function Quiz(questions){
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

//We need a function that will get the index of current question
Quiz.prototype.getQuestionIndex = function(){
    return this.questions[this.questionIndex];
}

//lets us know if the quiz has ended
Quiz.prototype.isEnded = function(){
    return this.questions.length === this.questionIndex;
}

//confirms if answer is correct
Quiz.prototype.guess = function(answer){
    
    if(this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
    }

    this.questionIndex++;

}