$(document).ready(function() {
	//黑色导航中集团网站的隐藏部分
	$(".website").click(function() {
		$(".websiteShow").slideToggle();
		$(".languageShow").hide();
		//黑色导航隐藏部分图标的切换
		$("#up1").toggle();
		$("#down1").toggle();
	});
	
	//黑色导航中选择区域/语言的隐藏部分	
	$(".language").click(function() {
		$(".languageShow").slideToggle();
		$(".websiteShow").hide();
		//黑色导航隐藏部分图标的切换
		$("#up2").toggle();
		$("#down2").toggle();
	});
	/*黑色导航中集团网站的隐藏部分中向右动画图标*/
	$(".webLi1 .webLi2 .webLi3").mouseenter(function() {
		$("#right1").animate({
			left: "+=25px"
		});
	});
	$(".webLi1 .webLi2 .webLi3").mouseleave(function() {
		$("#right1").animate({
			left: "-=25px"
		});
	});
	//白色导航中搜索框部分
 	$(".search").click(function(){
 		$(".mask").toggle();
 		$(".contact1").toggle();
 		$("#searchi").toggle();
 		$(".delete").toggle();
 		$(".input").toggle();
 	});
    
	$(".search").click(function(){
		$("body").css("overflow"," hidden");
			},
			function(){
		$("body").css("overflow","scroll");
	});


	//白色导航中“手机，笔记本&平板...”的隐藏部分
	$(".contactLeft1").mouseenter(function() {
		$(".contactLeftShow1").slideToggle();
	});
	$(".contactLeftShow1").mouseenter(function() {
		$(".contactLeftShow1").show();
	});
	$(".contactLeftShow1").mouseleave(function() {
		$(".contactLeftShow1").hide();
	});
	$(".contactLeft1").mouseleave(function() {
		$(".contactLeftShow1").hide();
	});

	//白色导航中“解决方案&服务”的隐藏部分
	//白色导航中“手机，笔记本&平板...”的隐藏部分
	$(".contactLeft2").mouseenter(function() {
		$(".contactLeftShow2").slideToggle();
	});
	$(".contactLeftShow2").mouseenter(function() {
		$(".contactLeftShow2").show();
	});
	$(".contactLeftShow2").mouseleave(function() {
		$(".contactLeftShow2").hide();
	});
	$(".contactLeft2").mouseleave(function() {
		$(".contactLeftShow2").hide();
	});

	//白色导航中“解决方案&服务”的隐藏部分中三块的切换
	$(".bd1").click(function() {
		$(".body1").show();
		$(".body2").hide();
		$(".body3").hide();
	});
	$(".bd2").click(function() {
		$(".body1").hide();
		$(".body2").show();
		$(".body3").hide();
	});
	$(".bd3").click(function() {
		$(".body1").hide();
		$(".body2").hide();
		$(".body3").show();
	});

	//轮播图
	$(function() {
		var num = 0;
		var timer = null;
		go();
		$("#box").mouseenter(function() { //实现当鼠标移动到box上时，不执行自动轮播功能
			clearInterval(timer); //移动进去时清除定时器
		}).mouseleave(function() {
			go(); //移出后执行go函数
		});
		$(".span_list").eq(0).css("backgroundColor", "#3B3B3B");
		//页面加载后默认是第一张图，则让第一个导航圆点变为“选中色”。
		function go() {
			timer = setInterval(function() { //设置定时器
				num++; //用一个全局变量来控制图的运动次数
				if(num > 3) { //如果移动到了最后一张图，则num赋值1，调整ul边距（相当于初始化）
					num = 1;
					$(".ul_list").css("margin-left", "0px");
				}
				if(num == 3) { //由于圆点只有三个，而图片有四张，当移动到第四张图片时，给第一个圆点“选中色”。
					$(".span_list").css("backgroundColor", "transparent");
					$(".span_list").eq(0).css("backgroundColor", "#3B3B3B");
				} else { //图片运动一次，导航圆点也动态的变换，这里先让所有圆点变为“不选中色”，再让当前圆点变为“选中色”。
					$(".span_list").css("backgroundColor", "transparent");
					$(".span_list").eq(num).css("backgroundColor", "#3B3B3B");
				}
				$(".ul_list").animate({
					"marginLeft": -$("#box").width() * num + "px"
				}, 580); //使用animate实行运动功能
			}, 2000);
		}

		$(".span_list").each(function(index) { //遍历每一个圆点添加点击事件，点击当前圆点则让num值赋为当前圆点的索引
			$(this).click(function() {
				num = index;
				$(".span_list").css("backgroundColor", "transparent");
				$(".span_list").eq(num).css("backgroundColor", "#3B3B3B");
				$(".ul_list").stop().animate({
					"marginLeft": -$("#box").width() * num + "px"
				}, 580);
			})
		});

		$(".right_click").click(function() {
			//右按钮点击事件，每点击一次num++,这里有很多的判断，是用来消除一些BUG的。
			if(num <= 3) {
				num++;
			}
			if(num > 3) {
				num = 1;
				$(".ul_list").css("margin-left", "0px");
			}
			if(num == 3) {
				$(".span_list").css("backgroundColor", "transparent");
				$(".span_list").eq(0).css("backgroundColor", "#3B3B3B");
			} else {
				$(".span_list").css("backgroundColor", "transparent");
				$(".span_list").eq(num).css("backgroundColor", "#3B3B3B");
			}
			$(".ul_list").stop().animate({
				"marginLeft": -$("#box").width() * num + "px"
			}, 580);

		});

		$(".left_click").click(function() { //左按钮点击事件
			if(num >= 0) {
				num--;
			}
			if(num < 0) {
				num = 2;
				$(".ul_list").css("margin-left", "-2800px")
				$(".span_list").css("backgroundColor", "transparent");
				$(".span_list").eq(2).css("backgroundColor", "#3B3B3B");
			} else {
				$(".span_list").css("backgroundColor", "transparent");
				$(".span_list").eq(num).css("backgroundColor", "#3B3B3B");
			}
			$(".ul_list").stop().animate({
				"marginLeft": -$("#box").width() * num + "px"
			}, 580);

		});
		$(".left_click").hover(function() { //这里是实现左右按钮的阴影效果显示，用到了hover事件
			$(".btn_left").css("opacity", "1");
		}, function() {
			$(".btn_left").css("opacity", "0.5");
		});

		$(".right_click").hover(function() {
			$(".btn_right").css("opacity", "1");
		}, function() {
			$(".btn_right").css("opacity", "0.5");
		});
//		未来影像手机图片部分手机触碰滑动效果
		$(".rowScoll").mouseenter(function() {
		$(".rowLeftA1").animate({
			left: "+=20px"
		});
	});
	$(".rowScoll").mouseleave(function() {
		$(".rowLeftA1").animate({
			left: "-=20px"
		});
	});
	//未来影像部分右侧箭头触碰滑动效果
		$(".rowRightText").mouseenter(function() {
		$(".rowRightT41").animate({
			left: "+=20px"
		});
	});
	$(".rowRightText").mouseleave(function() {
		$(".rowRightT41").animate({
			left: "-=20px"
		});
	});
	$(".activeBanner2").mouseleave(function() {
		$(".BannerLeft2").animate({
			left: "-=20px"
		});
	});
	//成功故事箭头触碰滑动效果1
		$("#successBodyT11").mouseenter(function() {
		$(".TMore1").animate({
			left: "+=20px"
		});
	});
	$("#successBodyT11").mouseleave(function() {
		$(".TMore1").animate({
			left: "-=20px"
		});
	});
	//成功故事箭头触碰滑动效果2
$("#successBodyT22").mouseenter(function() {
		$(".TMore2").animate({
			left: "+=20px"
		});
	});
	$("#successBodyT22").mouseleave(function() {
		$(".TMore2").animate({
			left: "-=20px"
		});
	});
	//成功故事箭头触碰滑动效果3
$("#successBodyT33").mouseenter(function() {
		$(".TMore3").animate({
			left: "+=20px"
		});
	});
	$("#successBodyT33").mouseleave(function() {
		$(".TMore3").animate({
			left: "-=20px"
		});
	});
	//近期新闻箭头触碰滑动效果
		$("#newsLeftT").mouseenter(function() {
		$(".TMore4").animate({
			left: "+=20px"
		});
	});
	$("#newsLeftT").mouseleave(function() {
		$(".TMore4").animate({
			left: "-=20px"
		});
	});
		//第二块轮播图
		$(function() {
			var num = 0;
			var timer = null;
			go();
			$(".activeCenter").mouseenter(function() { //实现当鼠标移动到box上时，不执行自动轮播功能
				clearInterval(timer); //移动进去时清除定时器
			}).mouseleave(function() {
				go(); //移出后执行go函数
			});
			$(".spanList").eq(0).css("backgroundColor", "#3B3B3B");
			//页面加载后默认是第一张图，则让第一个导航圆点变为“选中色”。
			function go() {
				timer = setInterval(function() { //设置定时器
					num++; //用一个全局变量来控制图的运动次数
					if(num > 2) { //如果移动到了最后一张图，则num赋值1，调整ul边距（相当于初始化）
						num = 1;
						$(".activeBanner").css("margin-left", "0px");
					}
					if(num == 2) { //由于圆点只有三个，而图片有四张，当移动到第四张图片时，给第一个圆点“选中色”。
						$(".spanList").css("backgroundColor", "transparent");
						$(".spanList").eq(0).css("backgroundColor", "#3B3B3B");
					} else { //图片运动一次，导航圆点也动态的变换，这里先让所有圆点变为“不选中色”，再让当前圆点变为“选中色”。
						$(".spanList").css("backgroundColor", "transparent");
						$(".spanList").eq(num).css("backgroundColor", "#3B3B3B");
					}
					$(".activeBanner").animate({
						"marginLeft": -$(".activeCenter").width() * num + "px"
					}, 580); //使用animate实行运动功能
				}, 2000);
			}

			$(".spanList").each(function(index) { //遍历每一个圆点添加点击事件，点击当前圆点则让num值赋为当前圆点的索引
				$(this).click(function() {
					num = index;
					$(".spanList").css("backgroundColor", "transparent");
					$(".spanList").eq(num).css("backgroundColor", "#3B3B3B");
					$(".activeBanner").stop().animate({
						"marginLeft": -$(".activeCenter").width() * num + "px"
					}, 580);
				})
			});

			$(".rightClick").click(function() {
				//右按钮点击事件，每点击一次num++,这里有很多的判断，是用来消除一些BUG的。
				if(num <= 2) {
					num++;
				}
				if(num > 2) {
					num = 1;
					$(".activeBanner").css("margin-left", "0px");
				}
				if(num == 2) {
					$(".spanList").css("backgroundColor", "transparent");
					$(".spanList").eq(0).css("backgroundColor", "#3B3B3B");
				} else {
					$(".spanList").css("backgroundColor", "transparent");
					$(".spanList").eq(num).css("backgroundColor", "#3B3B3B");
				}
				$(".activeBanner").stop().animate({
					"marginLeft": -$(".activeCenter").width() * num + "px"
				}, 580);

			});
			$(".leftClick").click(function() { //左按钮点击事件
				if(num >= 0) {
					num--;
				}
				if(num < 0) {
					num = 2;
					$(".activeBanner").css("margin-left", "-2800px")
					$(".spanList").css("backgroundColor", "transparent");
					$(".spanList").eq(2).css("backgroundColor", "#3B3B3B");
				} else {
					$(".spanList").css("backgroundColor", "transparent");
					$(".spanList").eq(num).css("backgroundColor", "#3B3B3B");
				}
				$(".activeBanner").stop().animate({
					"marginLeft": -$("#box").width() * num + "px"
				}, 580);

			});

		});

	});

});