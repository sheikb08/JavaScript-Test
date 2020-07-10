//declaring a function 3 parameters and storing those 3 parameters into 3 variables.
function Question(text, choices, answer){
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

//Creating a function that belongs to the question function above. We are using 'prototype' because we are writing a function outside of the 
//the constuctive funtion 
Question.prototype.correctAnswer = function(choice){
    //if the choice that the user selects equals 'this.answer' it will return the choice.
    return choice === this.answer;

}