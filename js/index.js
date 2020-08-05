$(function(){
	var h = $("body").height();
	$("body,html").scrollTop(2*h);
	$("body,html").stop().animate({scrollTop:0},2000);
	$("body").css("overflow","hidden");
	// $("header").click(function(){
	// 	var h = $("body").height();
	// 	$("body,html").stop().animate({scrollTop:(2*h)},5000);
	// });
	// $("section").click(function(){
	// 	$("body,html").stop().animate({scrollTop:0},5000);
	// })
	
})
