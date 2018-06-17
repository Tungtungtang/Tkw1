var selectedBg = 'nobg';
$(document).ready(function () {
	$('.btn-color').click(function () {
		$('#status').attr('class', 'form-control status-text');
		$('#status').addClass($(this).val());
		selectedBg = $(this).val();
	});
});

function postStatus() {
	if ($('#status').val().length > 0 ) {
		if ($('#status').val().length <= 50) {
			$('.timeline').prepend('<div class="my-status big-text ' + selectedBg + '">' + $('#status').val() + '</div>');
		} else {
			$('.timeline').prepend('<div class="my-status ' + selectedBg + '">' + $('#status').val() + '</div>');
		}
	}
}