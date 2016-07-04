$(".pic").mouseenter(function(){
	$(this).addClass("b");
});
$(".pic").mouseleave(function(){
	$(this).removeClass("b");
	$(".des").slidedown();
});
