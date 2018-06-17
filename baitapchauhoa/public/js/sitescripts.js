var cash = 1800;
var selectedFlower;
var selectedCash;
$(document).ready(function () {

	//Click chọn chậu
	$('.btn-f').click(function () {
		selectedCash = parseInt($(this).text());
		selectedFlower = $(this).attr('id');
	})

	//Click dat chau
	$('.pot').click(function () {
		if (cash >= selectedCash && $(this).children().first().attr('src') == '') {

			//Trừ tiền
			cash -= selectedCash;
			$('#cash').text(cash);

			//Gán hình chậu được chọn
			$(this).children().first().attr('src', 'public/images/' + selectedFlower + '.png');

		} else {
			alert('Ban khong du tien hoac da co chau hoa.')
		}
		
	});
});