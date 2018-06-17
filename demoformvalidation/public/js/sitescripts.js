function validateForm() {
	if (validateUsername() & validateEmail()) {
		return true;
	} else {
		return false;
	}
}

function validateUsername() {
	var field = $('#username').val();
	var filter = /^.{6,}$/;
	if (filter.test(field) == false) {
		$('#username').parent().parent().addClass('has-error');
		$('#username').next().html('Sai username');
		return false;
	} else {
		$('#username').parent().parent().removeClass('has-error');
		$('#username').next().html('');
		return true;
	}
}

function validateEmail() {
	var field = $('#email').val();
	var filter = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.[a-z]{2,4})+$/;
	if (filter.test(field) == false) {
		$('#email').parent().parent().addClass('has-error');
		$('#email').next().html('Sai email');
		return false;
	} else {
		$('#email').parent().parent().removeClass('has-error');
		$('#email').next().html('');
		return true;
	}
}