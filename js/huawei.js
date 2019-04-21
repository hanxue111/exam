$(document).ready(function() {
	//黑色导航中集团网站的隐藏部分
	$(".website").click(function() {
		$(".websiteShow").slideToggle();
		$(".languageShow").hide();
	});

	//黑色导航中选择区域/语言的隐藏部分	
	$(".language").click(function() {
		$(".languageShow").slideToggle();
		$(".websiteShow").hide();
	});
	
	//白色导航中“手机，笔记本&平板...”的隐藏部分
	$(".contactLeft1").mouseenter(function(){
		$(".contactLeftShow1").slideToggle();
	});
	$(".contactLeftShow1").mouseenter(function(){
		$(".contactLeftShow1").show();
	});
	$(".contactLeftShow1").mouseleave(function(){
		$(".contactLeftShow1").hide();
	});
	$(".contactLeft1").mouseleave(function(){
		$(".contactLeftShow1").hide();
	});
	
	//白色导航中“解决方案&服务”的隐藏部分
	//白色导航中“手机，笔记本&平板...”的隐藏部分
	$(".contactLeft2").mouseenter(function(){
		$(".contactLeftShow2").slideToggle();
	});
	$(".contactLeftShow2").mouseenter(function(){
		$(".contactLeftShow2").show();
	});
	$(".contactLeftShow2").mouseleave(function(){
		$(".contactLeftShow2").hide();
	});
	$(".contactLeft2").mouseleave(function(){
		$(".contactLeftShow2").hide();
	});

//白色导航中“解决方案&服务”的隐藏部分中三块的切换
$(".bd1").click(function(){
	$(".body1").show();
	$(".body2").hide();
	$(".body3").hide();
});
$(".bd2").click(function(){
	$(".body1").hide();
	$(".body2").show();
	$(".body3").hide();
});
$(".bd3").click(function(){
	$(".body1").hide();
	$(".body2").hide();
	$(".body3").show();
});


                       
//轮播图




});