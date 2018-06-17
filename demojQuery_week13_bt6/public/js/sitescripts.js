var score = 0;
var g;
$(document).ready(function () {
	setPosition();
	g = setInterval(setPosition, 2000);
	setTimeout(gameOver, 10000);

	$('.circle').click(function () {
		setScore($(this).text());
	});
});

function setScore(point) {
	score += parseInt(point);
	$('.score').html(score);
}

function setPosition() {
	for (var i = 0; i < $('.circle').length; i++) {
		$('.circle').eq(i).css('left', getRandomIntInclusive(0, 1200));
		$('.circle').eq(i).css('top', getRandomIntInclusive(0, 800));
	}
}

function gameOver() {
	clearInterval(g);
	$('.thongbao').show();
	$('.thongbao').text("Time's up " + score);
}
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}