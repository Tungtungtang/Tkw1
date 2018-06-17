var Color;
function setColor(color)
{
	Color = color;

	$(".status-text").attr('class', 'status-text form-control');

	$("#status").addClass(Color); /// them mau nen
}
function post()
{
	if ($('.status-text').val() != '')

	{

		if ($('.status-text').val().length <= 50)

			var stt = $('<div class="my-status big-text ' + Color + '"></div>').text($('.status-text').val());
		else

			var stt = $('<div class="my-status ' + Color + '"></div>').text($('.status-text').val());
		$('.timeline').prepend(stt);
	}
	$("#status").val('');
}
// làm theo cách của thầy:

