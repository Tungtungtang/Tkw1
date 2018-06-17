var score = 0;
var order = 1;

$(document).ready(function () {

	for (var i = 1; i <= 100; i++) {
		$('.circle-container').append('<div class="circle">' + i + '</div>');
	}


	setPosition();
	setTimeout(gameOver, 10000);

	$('.circle').click(function () {
		setScore($(this));
	});
});

function setScore(selectedCircle) {
	if (selectedCircle.text() == order) {
		score++;
		order++;
		$('.score').html(score);
		selectedCircle.css('background', 'red');
	}
	
}

function setPosition() {
	for (var i = 0; i < $('.circle').length; i++) {
		$('.circle').eq(i).css('left', getRandomIntInclusive(0, 1200));
		$('.circle').eq(i).css('top', getRandomIntInclusive(0, 800));
	}
}

function gameOver() {
	$('.thongbao').show();
	$('.thongbao').text("Time's up " + score);
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}