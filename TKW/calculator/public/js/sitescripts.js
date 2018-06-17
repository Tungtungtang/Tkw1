var formular = "";

function reset() {
	formular = "";
	$('#operation').text('0');
	$('#result').text('0');
}

function input(value) {
	formular += value;
	$('#operation').text(formular);
}

function calculate() {
	$('#result').text(eval(formular));
}