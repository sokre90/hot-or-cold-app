var randNum;
randomNumber();
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  		var i = 0
	$('#guessButton').click(function(event) {

	  	console.log(randNum);
	  	var userNum = $('#userGuess').val();

	  	var hot = Math.abs(randNum - userNum) >= 10 && Math.abs(randNum - userNum) < 20; 
	  	var warm = Math.abs(randNum - userNum) >= 20 && Math.abs(randNum - userNum) < 30; 
	  	var veryHot = Math.abs(randNum - userNum) < 10;
	  	var iceCold = Math.abs(randNum - userNum) >= 50;
	  	var cold = Math.abs(randNum - userNum) >= 30 && Math.abs(randNum - userNum) < 50;

	  	if (userNum < 0 || userNum > 101 || userNum == "") {
  			$('#feedback').text('Please choose a number between 0 and 100');	
  		} else {

		  	if (randNum == userNum) {
		  		$('#feedback').text('You Won. Click new game to play again');
		  	}
		  	else if (veryHot) {
		  		$('#feedback').text('Pheonix hot!');
		  	}
		  	else if (iceCold) {
		  		$('#feedback').text('You are in Antarctica!');
		  	}
		  	else if (cold) {
		  		$('#feedback').text('Cold!');
		  	}
		  	else if (warm) {
		  		$('#feedback').text('L.A. warm!');
		  	}
			else if (hot) {
		  		$('#feedback').text('Florida hot!');
		  	}

		  	i++
		  	$('#count').text(i);

		  	$('#guessList').append('<li>'+userNum+'</li>');

			$('.text').val('');
		}

		event.preventDefault();

	})

	$('.new').click(function(event) {
			i = 0;
			$('#feedback').text('Make your Guees!');
			$('#guessList, .text').empty();
			$('#count').text(i);

			randomNumber();

			event.preventDefault();
	})
});

function randomNumber() {
	randNum = Math.floor(Math.random() * 100)+1;
}