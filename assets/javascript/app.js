
//=============
//App Variables
//=============

var questions = [
	{
		question : "",
		guesses : "",
		answer : ""
	},
	{
		question : "",
		guesses : "",
		answer : ""
	},
	{
		question : "",
		guesses : "",
		answer : ""
	},
	{
		question : "",
		guesses : "",
		answer : ""
	},
	{
		question : "",
		guesses : "",
		answer : ""
	}
];

var number = 30;

var intervalId;

//=========
//Functions
//=========

function beginCountdown() {
	intervalId = setInterval(decrement, 1000);
};

function decrement() {
	number--;
	$('#countdown').html('<h2>' + 'The game will end in ' + number + ' seconds.' + '</h2>');
	if (number === 0) {
		showResults();
	};
};

function showResults() {
	stopTimer();
	$('.game-screen').css('display', 'none');
	$('.results-screen').css('display', 'initial');
};

function stopTimer() {
	clearInterval(intervalId);
};

//======
//Events
//======

$('#start-button').on('click', function initializeGame() {
	$('.start-screen').css('display', 'none');
	$('.game-screen').css('display', 'initial');

	beginCountdown();

	/*if (number === 0) {
		showResults();
	};*/
});

$('#done').on('click', showResults);


//=================
//Initialize Script
//=================

$(document).ready(function() {


});
