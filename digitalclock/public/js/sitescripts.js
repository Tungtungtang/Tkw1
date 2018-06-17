$(document).ready(function () {
	setClock();
	setInterval(setClock, 1000);
});

function setClock() {
	var curTime = new Date(); //Tra ve thoi gian hien tai
	$('#digi-clock').text(curTime.getHours() + ':' + curTime.getMinutes() + ':' + curTime.getSeconds());
}