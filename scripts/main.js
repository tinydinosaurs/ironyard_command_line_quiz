// all my variables for this quiz so I don't have to type stuff over and over
var counter = 0
var correct = 'Hooray! Correct!'
var incorrect = 'Boo. You\'re wrong.'

// ask quiz takers name. I'm okay with null and undefined names at this point.
var name = prompt('What is your name?');


// force quiz taker to take the quiz
ready = prompt('Hello, ' + name + '. Are you ready to take the quiz?');

// make sure quiz taker is ready. If not, keep asking until you wear them down.
while(ready.toLowerCase() != 'yes') {
	ready = prompt('You must take this quiz. Are you ready?');
}

// Set timer by creating new Date. Log and prompt question 1.
timerStart = Date.now();
console.log('Question 1: How do you make a new directory in the command line?');
var question = prompt('Great! Ok, first question: How do you make a new directory in the command line?');

// Check answer. If correct, log var correct to console and add 1 to counter.
// If not, log var incorrect to the console. 
if(question === 'mkdir') {
	console.log(correct);
	counter += 1;
} else {
	console.log(incorrect);
}

// Log and prompt question 2.
console.log('Question 2: what do you put inside < > to make an HTML level 1 header?');
var question = prompt('What tag would you use to make an HTML level 1 header? a) <h> b) <h1> c) <head> d) <header>');

if(question.toLowerCase() === 'b') {
	console.log(correct);
	counter += 1;
} else {
	console.log(incorrect);
}	

// Log and prompt question 3.
console.log('Question 3: The part of a CSS rule that tells the browser what element to style is called a _____');
var question = prompt('The part of a CSS rule that tells the browser what element to style is called a _____');

if(question.toLowerCase() === 'selector') {
	console.log(correct);
	counter += 1;
} else {
	console.log(incorrect);
}	

//Log and prompt question 4.
console.log('Question 4: The concept that every element on a web page is a rectangular box that can have width, height, padding, borders, and margins is the ____ _______ .(two words)');
var question = prompt('The concept that every element on a web page is a rectangular box that can have width, height, padding, borders, and margins is the ____ _______ .(two words)');

if(question.toLowerCase() === 'box model' || 'boxmodel') {
	console.log(correct);
	counter += 1;
} else {
	console.log(incorrect);
}	


//Log and prompt question 5.
console.log('Question 5: Which of these is NOT an available border style in CSS? a) solid b) inset c) dotdash d) groove');
var question = prompt('Which of these is NOT an available border style in CSS? a) solid b) inset c) dotdash d) groove');

if(question.toLowerCase() === 'c') {
	console.log(correct);
	counter += 1;
} else {
	console.log(incorrect);
}	


// Log and prompt question 6.
console.log('Question 6: Which CSS property controls what happens when content extends outside of its container? a) overflow: b) box-sizing: c) display: d) content:');
var question = prompt('Which CSS property controls what happens when content extends outside of its container? a) overflow: b) box-sizing: c) display: d) content:');

if(question.toLowerCase() === 'a') {
	console.log(correct);
	counter += 1;
} else {
	console.log(incorrect);
}	


//Log and prompt question 7.
console.log('Question 7: The practice of building websites that function on all devices and all screen sizes is known as _________ design.');
var question = prompt('The practice of building websites that function on all devices and all screen sizes is known as _________ design.');

if(question.toLowerCase() === 'responsive') {
	console.log(correct);
	counter += 1;
} else {
	console.log(incorrect);
}


// Log and prompt question 8.
console.log('Question 8: True or false - Sass stands for Syntactically Awesome StyleSheets.');
var question = prompt('True or False: Sass stands for Syntactically Awesome StyleSheets.');

if(question.toLowerCase() === 'true') {
	console.log(correct);
	counter += 1;
} else {
	console.log(incorrect);
}	


// Log and prompt question 9.
console.log('Question 9: The CLI command to  lists files in the current folder is ls. Which of these would you include after ls to show hidden files? a) -l b) -t c) -s d) -a');
var question = prompt('The CLI command to  lists files in the current folder is ls. Which of these would you include after ls to show hidden files? a) -l b) -t c) -s d) -a');

if(question.toLowerCase() === 'd') {
	console.log(correct);
	counter += 1;
} else {
	console.log(incorrect);
}	


// Log and prompt question 10.
console.log('Question 10: Which of these is not a value accepted by the position property? a) static b) elastic c) relative d) fixed');
var question = prompt('Which of these is not a value accepted by the position property? a) static b) elastic c) relative d) fixed');

if(question.toLowerCase() === 'b') {
	console.log(correct);
	counter += 1;
} else {
	console.log(incorrect);
}	

// Log and prompt question 11.
console.log('Question 11: What alphanumeric character does Sass use to make something a variable?');
var question = prompt('What alphanumeric character does Sass use to make something a variable?');

if(question === '$') {
	console.log(correct);
	counter += 1;
} else {
	console.log(incorrect);
}	


// Log and prompt question 12.
console.log('Question 12: True or false - Javascript is a compiled language.');
var question = prompt('True or false - Javascript is a compiled language.');

if(question.toLowerCase() === 'false') {
	console.log(correct);
	counter += 1;
} else {
	console.log(incorrect);
}	


//Log and prompt question 13.
console.log('Question 13: How many primitive data types does Javascript have?');
var question = prompt('How many primitive data types does Javascript have?');

if(question.toLowerCase() === '5' || 'five') {
	console.log(correct);
	counter += 1;
} else {
	console.log(incorrect);
}	

//Log and prompt question 14.
console.log('Question 14: How do you find the type of an operand in Javascript?');
var question = prompt('How do you find the type of an operand in Javascript?');

if(question === 'typeof') {
	console.log(correct);
	counter += 1;
} else {
	console.log(incorrect);
}	


// Log and prompt question 15.
console.log('Which of these does not evaluate to true? a) true b) \'false\' c) 0 d) 1');
var question = prompt('Which of these does not evaluate to true? a) true b) \'false\' c) 0 d) 1');

if(question.toLowerCase() === 'c') {
	console.log(correct);
	counter += 1;
} else {
	console.log(incorrect);
}	


//Stop timer.
timerEnd = Date.now();

//log correct answers.
// console.log(counter);

console.log('You got ' + counter + ' out of 15 correct. Thats ' + Math.round(counter / 15 * 100) + ' percent!')

//log quiz time.
console.log('You finished the quiz in ' + (timerEnd - timerStart) + ' seconds.')




// Log and prompt question .
// console.log('');
// var question = prompt('');

// if(question.toLowerCase() === '') {
// 	console.log(correct);
// 	counter += 1;
// } else {
// 	console.log(incorrect);
// }	
