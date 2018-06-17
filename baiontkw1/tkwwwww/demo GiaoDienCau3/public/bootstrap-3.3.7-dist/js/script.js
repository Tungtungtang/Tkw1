$(document).ready(function(){
	var color;
	$('#post').click(function(){
		var status = $('#status').val();
		if(status.length <= 50){
			$('.timeline').prepend('<div class="my-status big-text '+color+'">'+status+'</div>');
		}
		else{
			$('.timeline').prepend('<div class="my-status '+color+'">'+status+'</div>');
		}
	})
	$('.btn-color').click(function(){
		color = $(this).val();	
		$('#status').removeClass('red green blue yellow orange');	
		$('#status').addClass(color);
	})
})