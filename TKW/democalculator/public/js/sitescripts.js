/* 
function tinhToan() {
	var x = 4;
	var y = 2;
	var operators = ['+', '-', '*', '/'];

	for (var i = 0; i < operators.length; i++) {
		var formular = x + operators[i] + y;
		//eval(): thực hiện một chuỗi, mà chuỗi đó là 1 câu lệnh
		alert(formular + " = " + eval(formular));
	}
}
*/

var formular = "";

function reset() {
	formular = "";
	$('#screen').text('0');
}

function input(value) {
	formular += value;
	$('#screen').text(formular);
}

function calculate() {
	$('#screen').text(formular + " = " + eval(formular));
}