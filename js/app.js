'use strict';

//define arrays to push scores into to keep track of correct and incorrect
var numCorrect =[];
var numIncorrect =[];

//define a variable to keep code shorter for each console log to give reports on score after each question
var addedMessage = ('you have ' + numCorrect.length + ' correct and ' + numIncorrect.length + ' wrong.');

//get userName so I can use it in the score message
var userName = prompt('What is your name?');

//different answers for different responses. parseInt used to convert answer, which  is string, to  number to be evaluated
//toLowerCase used so that different cases in the user's answer don't influence the program's response
var petQuestion = parseInt(prompt('How many pets do you think I have? Please enter a number.'));
if(petQuestion === 2){
  alert('Correct! I have two kittens named Ruby and Sid, short for Obsidian! ');
  numIncorrect.push('Correct');
}else if (petQuestion < 2) {
  alert('No, I am an amimal lover!');
  numIncorrect.push('Incorrect');
} else {
  alert('I wish!');
  numIncorrect.push('Incorrect');
}
console.log('Question 1: ' + addedMessage);

var myAge = prompt('Do you think I am older than 25?').toLowerCase();
if(myAge === 'no') {
  alert('You are correct! I am 24.');
  numCorrect.push('Correct');
} else {
  alert('No, I am younger than 25!');
  numIncorrect.push('Incorrect');
}
console.log('Question 2: ' + addedMessage);

var myTravels = prompt('Have I been to Australia?').toLowerCase();
if(myTravels === 'no') {
  alert('You are correct! Ever since the Lord of the Rings movies, I have wanted to go to Oceania! My favorite trip was probably to Copenhagen, but Australia and New Zealand are high on the list!' );
  numCorrect.push('Correct');
} else{
  alert ('Unfortunately, I have not! Ever since the Lord of the Rings movies, I have wanted to go to Oceania! My favorite trip was probably to Copenhagen, but Australia and New Zealand are high on the list!');
  numIncorrect.push('Incorrect');
}
console.log('Question 3: ' + addedMessage);


var MyEducation = prompt('Do I have a bachelor\'s degree?').toLowerCase();
if(MyEducation === 'yes') {
  alert ('Yes. I went to Whitman College where I studied Geology and minored in Anthropology. Can you tell from my cats\' names?');
  numCorrect.push('Correct');
} else {
  alert('I actually do. I went to Whitman College where I studied Geology and minored in Anthropology. Can you tell from my cats\' names?');
  numIncorrect.push('Incorrect');
}
console.log('Question 4: ' + addedMessage);


var doILikeHorses = prompt('Do I like horses?').toLowerCase();
if(doILikeHorses === 'yes') {
  alert ('Yes. Growing up, I rode horses and enjoyed jumping. Taking care of horses is a lot of work!');
  numCorrect.push('Correct');
} else {
  alert ('I actually do like them. I particularly enjoyed jumping while I was growing up.');
  numIncorrect.push('Incorrect');
}
console.log('Question 5: ' + addedMessage);


var iCantSwim = prompt ('Do you believe me when I say I cannot swim?').toLowerCase();
if(iCantSwim === 'no') {
  alert('You are right not to believe me. On this one, at least!');
  numCorrect.push('Correct');
} else {
  alert('Actually, I\'m just pulling your leg. I can swim!');
  numIncorrect.push('Incorrect');
}
console.log('Question 6: ' + addedMessage);


var lasagnaServings = parseInt(prompt('How many servings of Lasagna did I make this weekend?'));
if(lasagnaServings === 8) {
  alert('You\'re good at guessing! I\'m still eating it four days later and have more in my freezer!');
  numCorrect.push('Correct');
} else if (lasagnaServings < 8) {
  alert('Actually, more!');
  numIncorrect.push('Incorrect');
} else {
  alert('Okay, not that much!');
  numIncorrect.push('Incorrect');
}
console.log('Question 7: ' + addedMessage);

//concatenation used here based on variables defined at top to report score to user
alert ('Good job ' + userName + ', you got ' + numCorrect.length + ' answer(s) correct, and only ' + numIncorrect.length + ' answer(s) wrong. ');