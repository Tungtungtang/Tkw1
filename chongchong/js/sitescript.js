var y;
var x = 0;
function setCanh ()
{
		$('.image').css('transform', 'rotate('+ x +'deg)');
		x++;
}	

function start ()
{
	y = setInterval(setCanh, 100);
}

function dungLaiNhanh() 
{
	clearInterval(y);
}