
//=============
//App Variables
//=============

var questions = [
	{
		question : "Tokyo is comprised of 23 wards. Which of the following is NOT a Tokyo ward?",
		guesses : ["Shinjuku", "Edogawa", "Chiyoda", "Yokohama"],
		indexAnswer: 3
	},
	{
		question : "Which is the largest of Japan's main islands?",
		guesses : ["Hokkaido", "Honshu", "Shikoku", "Kyushu"],
		indexAnswer : 1
	},
	{
		question : "A popular tourist destination, this city served as the Japanese capital from 794 A.D. until 1868.",
		guesses : ["Kamakura", "Osaka", "Kyoto", "Des Moines, Iowa"],
		indexAnswer : 2
	},
	{
		question : "This city was founded by Jesuit missionaries in the 16th century and the only place where the presence of foreigners was tolerated for over 400 years.",
		guesses : ["Shibuya", "Nagasaki", "Macao", "Kobe"],
		indexAnswer : 1
	},
	{
		question : "The southernmost of Japanese islands is home to the Ryukyu culture and was the stage of the bloodiest battle in the Pacific War.",
		guesses : ["Hiroshima", "Australia", "Saipan", "Okinawa"],
		indexAnswer : 3
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
		// Adds text to HTML elements
		$('#question-forms').find('form').each(function(i) {
			$(this).find('h3').html(questions[i].question);
			$(this).find('.form-check-label').each(function(j) {
				$(this).append(questions[i].guesses[j]);
			});
		});

		//Changes the display to game screen
		$('.start-screen').css('display', 'none');
		$('.game-screen').css('display', 'initial');

		beginCountdown();

	});

});
