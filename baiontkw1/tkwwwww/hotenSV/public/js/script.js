$(document).ready(function(){
	var x = getRandomIntInclusive(1,9);
	var y = getRandomIntInclusive(1,9);
	var z = getRandomIntInclusive(1,9);
	$('#randomcode').text(x+''+y+''+z);
})
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}
function validateForm(){
	if(validateFieldFname() & validateFieldPass() & validateFieldCode()){
		return true;
	}
	return false;
}
function validateFieldFname(){
	var field = $('#fname').val();
	var filter = /^\w{3,}$/;
	if(filter.test(field) == false)	//Giá trị không hợp lệ
	{
		alert('sai fname');
		return	false;
	}
	else
	{
		return	true;
	}
}
function validateFieldPass(){
	var field = $('#pass').val();
	var filter = /^\w{6,}$/;
	if(filter.test(field) == false)	//Giá trị không hợp lệ
	{
		alert('sai pass');
		return	false;
	}
	else
	{
		return	true;
	}
}
function validateFieldCode(){
	var randomcode = $('#randomcode').text();
	var code = $('#code').val();
	if(randomcode != code)	//Giá trị không hợp lệ
	{
		alert('sai code');
		return	false;
	}
	else
	{
		return	true;
	}
}