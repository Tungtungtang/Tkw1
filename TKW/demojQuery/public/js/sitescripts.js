$(document).ready(function () {
	var txt = $('#txt').html();
	alert(txt);
});

function getFullname() {
	var fullname = $('#fullname').val();
	$('#txt').text(fullname);
}
