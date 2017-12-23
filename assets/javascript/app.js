
//=============
//App Variables
//=============

var questions = [
	{
		question : "Tokyo is comprised of 23 wards. Which of the following is NOT a Tokyo ward?",
		guesses : ["Shinjuku", "Edogawa", "Chiyoda"],
		answer : "Yokohama"
	},
	{
		question : "Which is the largest of Japan's main islands?",
		guesses : ["Hokkaido", "Shikoku", "Kyushu"],
		answer : "Honshu"
	},
	{
		question : "A popular tourist destination, this city served as the Japanese capital from 794 A.D. until 1868.",
		guesses : ["Kamakura", "Osaka", "Des Moines, Iowa"],
		answer : "Kyoto"
	},
	{
		question : "This city was founded by Jesuit missionaries in the 16th century and the only place where the presence of foreigners was tolerated for over 400 years.",
		guesses : ["Shibuya", "Macao", "Kobe"],
		answer : "Nagasaki"
	},
	{
		question : "The southernmost of Japanese islands is home to the Ryukyu culture and was the stage of the bloodiest battle in the Pacific War.",
		guesses : ["Hiroshima", "Australia", "Saipan"],
		answer : "Okinawa"
	}
];


var number = 30;

var intervalId;

var correct = 0;

var incorrect = 0;

var unanswered = 5;

var isChosen = false;

/*var addCorrect = function() {
	correct++;
	unanswered--;
};

var addIncorrect = function() {
	incorrect++;
	unanswered--;
};*/

//=================
//Initialize Script
//=================

$(document).ready(function() {

	//=================
	//Scoring Functions
	//=================

	function check() {
    	document.getElementById("radio-button").checked = true;
	};

	function uncheck() {
	    document.getElementById("radio-button").checked = false;
	};


	var scoreUp = function() {
		correct++;
		unanswered--;
	};

	var scoreDown = function() {
		incorrect++;
		unanswered--;
	};

	$('#done').click(function(event) {
		event.preventDefault();
		
		showResults();
		console.log(correct);
		console.log(incorrect);
		console.log(unanswered);
		
	});

	function calculateScore() {
		$('#question-1').each(function() {
			if ($('#correct').prop('checked')) {
				scoreUp();
			};
			if ($('#incorrect').prop('checked')) {
				scoreDown();
			};
		});
		$('#question-2').each(function() {
			if ($('#correct').prop('checked')) {
				scoreUp();
			};
			if ($('#incorrect').prop('checked')) {
				scoreDown();
			};
		});
		$('#question-3').each(function() {
			if ($('#correct').prop('checked')) {
				scoreUp();
			};
			if ($('#incorrect').prop('checked')) {
				scoreDown();
			};
		});
		$('#question-4').each(function() {
			if ($('#correct').prop('checked')) {
				scoreUp();
			};
			if ($('#incorrect').prop('checked')) {
				scoreDown();
			};
		});
		$('#question-5').each(function() {
			if ($('#correct').prop('checked')) {
				scoreUp();
			};
			if ($('#incorrect').prop('checked')) {
				scoreDown();
			};
		});
	};

	function showResults() {
		stopTimer();
		calculateScore();
		$('#correct').append(correct);
		$('#incorrect').append(incorrect);
		$('#unanswered').append(unanswered);
		$('.game-screen').css('display', 'none');
		$('.results-screen').css('display', 'initial');
	};
	//==============
	//Timer Function
	//==============

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

	function stopTimer() {
		clearInterval(intervalId);
	};


	//==========================
	//Functions for Start Screen
	//==========================

	$('#start-button').on('click', function initializeGame() {

		//Adding text to the first question and its answers
		$('#q1-q').html(questions[0].question);
		$('#q1-1').html(questions[0].answer);
		$('#q1-2').html(questions[0].guesses[0]);
		$('#q1-3').html(questions[0].guesses[1]);
		$('#q1-4').html(questions[0].guesses[2]);

		//And now the second question and its answers
		$('#q2-q').html(questions[1].question);
		$('#q2-1').html(questions[1].guesses[0]);
		$('#q2-2').html(questions[1].answer);
		$('#q2-3').html(questions[1].guesses[1]);
		$('#q2-4').html(questions[1].guesses[2]);

		//And so on...
		$('#q3-q').html(questions[2].question);
		$('#q3-1').html(questions[2].guesses[0]);
		$('#q3-2').html(questions[2].guesses[1]);
		$('#q3-3').html(questions[2].answer);
		$('#q3-4').html(questions[2].guesses[2]);

		//Question 4
		$('#q4-q').html(questions[3].question);
		$('#q4-1').html(questions[3].guesses[0]);
		$('#q4-2').html(questions[3].guesses[1]);
		$('#q4-3').html(questions[3].guesses[2]);
		$('#q4-4').html(questions[3].answer);

		//Question 5
		$('#q5-q').html(questions[4].question);
		$('#q5-1').html(questions[4].guesses[0]);
		$('#q5-2').html(questions[4].guesses[1]);
		$('#q5-3').html(questions[4].answer);
		$('#q5-4').html(questions[4].guesses[2]);


		//Changes the display to game screen
		$('.start-screen').css('display', 'none');
		$('.game-screen').css('display', 'initial');

		beginCountdown();

	});

});
