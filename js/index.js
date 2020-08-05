$(function(){
	$("body,html").scrollTop(0);
	var h = $("body").height();
	$("body,html").stop().animate({scrollTop:2*h},2000);
	$("body").css("overflow","hidden");
})
