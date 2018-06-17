$(document).ready(function () {
	randomSecurityCode();
});
function randomSecurityCode() {
	var x = getRandomIntInclusive(0,9);
	var y = getRandomIntInclusive(0,9);
	var z = getRandomIntInclusive(0,9);
	$('#code').text('' + x + y + z);
}
function validateForm() {
	if (validateFullname() & validatePasword() & validateSecurity()) {
		return true;
	} else {
		return false;
	}
}

function validateFullname() {
	var field = $('#fullname').val();
	var filter = /^[a-zA-Z0-9]+(\s?[a-zA-Z0-9]+)*$/;
	if (filter.test(field) == false) {
		$('#fullname').parent().parent().addClass('has-error');
		$('#fullname').next().html('Sai fullname');
		return false;
	} else {
		$('#fullname').parent().parent().removeClass('has-error');
		$('#fullname').next().html('');
		return true;
	}
}

function validatePasword() {
	var field = $('#password').val();
	var filter = /^.{6,}$/;
	if (filter.test(field) == false) {
		$('#password').parent().parent().addClass('has-error');
		$('#password').next().html('Sai password');
		return false;
	} else {
		$('#password').parent().parent().removeClass('has-error');
		$('#password').next().html('');
		return true;
	}
}

function validateSecurity() {
	if ($('#securitycode').val() != $('#code').text()) {
		$('#securitycode').parent().parent().addClass('has-error');
		$('#securitycode').next().html('Sai code');
		return false;
	} else {
		$('#securitycode').parent().parent().removeClass('has-error');
		$('#securitycode').next().html('');
		return true;
	}
}

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}