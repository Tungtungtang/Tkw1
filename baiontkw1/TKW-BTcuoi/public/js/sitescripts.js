var postbg = 'nobg';
function addText() {
	var stt = $('#status').val();
	if(stt.length > 50)
	$('.timeline').prepend('<div class="my-status '+ postbg + '">' + stt + '</div>');
	else if(stt.length > 0)
			 $('.timeline').prepend('<div class="my-status big-text ' + postbg + '">' + stt + '</div>');
}
$(document).ready(function(){
		$('.btn-color').click(function(){
			var color = $(this).val();
			postbg = $(this).val();
			$('#status').attr("class" , 'form-control status-text');
			$('#status').addClass(color);
		}) 
});