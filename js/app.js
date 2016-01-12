
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

  		var randNum = randomNumber();
  		var i = 0
	$('#guessButton').click(function(event) {

	  	console.log(randNum);

	  	var userNum = $('#userGuess').val();
	  	// var arizonaHot = (randNum - 10) < (randNum) < (randNum + 10);
	  	if (randNum == userNum) {
	  		$('#feedback').text('You Won. Click new game to play again');
	  	}
	  	// else if (userNum == arizonaHot){
	  	// 	$('#feedback').text('Arizona Hot!');
	  	// }
	  	else if (userNum < randNum) {
	   		$('#feedback').text('Too low.');
	  	}
	  	else if (userNum > randNum) {
	  		$('#feedback').text('Too high.');
	  	}
	  	
	  	else if (userNum == userNum.val('')) {
	  		alert('Please enter a number from 1 to 100');
	  	}

	  	i++
	  	$('#count').text(i);

	  	$('#guessList').append('<li>'+userNum+'</li>');

		$('.text').val('');

		event.preventDefault();

	})
	$('.new').click(function(event) {

			i = 0;
			$('#feedback').text('Make your Guees!');
			$('#guessList').empty();
			$('#count').text(i);

			event.preventDefault();
			return randomNumber();
	})
});

function randomNumber() {
	return Math.floor(Math.random() * 100);
}
// function newGame() {
// 	$('.new').click(function(event) {
// 		i = 0;
// 		$('#feedback').text('Make your Guees!');
// 		$('#guessList').empty();
// 		$('#count').text(i);
// 		return randomNumber();
// 		event.preventDefault();
// 	})
// }