$(function() {

	// one start ----->
	var pheight = $(window).height();
	var posiValue = $(".copy-video-left").width();
	var copyTitleHeight = $(".copy-title").height();
	var pwidth = $(window).width(); //pheight*0.28
	var videoHeight = pheight * 0.28;
	var videoWidth = pwidth / 4;
	$(".copy-video-left").css("left", 0 - posiValue);
	$(".copy-video-right").css("right", 0 - posiValue);
	var copyTitleWidth = $(".copy-title").width();
	var copyTitleLeft = (pwidth - copyTitleWidth) / 2;
	var copyTitleTop = (pheight - copyTitleHeight - videoHeight - 50) / 2 + 30;

	$(".copy-video").css({
		"height": videoHeight
	});
	$(".copy-video ul li").css({
		"height": videoHeight,
		"width": videoWidth
	});
	$(".copy-video ul li div").css({
		"height": videoHeight
	});

	$(".copy-title").css({
		"left": copyTitleLeft
	});
	// one end ----->

	$('#dowebok').fullpage({
		navigation: true,
		navigationPosition: 'right',
		navigationColor: 'white',
		slidesNavPosition: 'top',
		controlArrowColor: '#4cabeb',
		loopHorizontal: false,
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fivePage', 'lastPage'],
		menu: '#copy-menu-item',
		sectionsColor: ['#ffffff', '#efefef', '#7BAABE', '#CCCCCC'],
		scrollingSpeed: 500,
		afterLoad: function(anchorLink, index) {

			if (index == 1) {
				$(".copy-video-left").animate({
					"left": "0px"
				}, 300);
				$(".copy-video-right").animate({
					"right": "0px"
				}, 300, function() {
					$(".copy-title").animate({
						"top": copyTitleTop
					}, 300)
				});
			}
			if (index == 2) {
				$('.copy-do-animation').animate({
					'marginLeft': '-505px'
				}, 'slow');
				$('.copy-do-copy').animate({
					'marginLeft': '195px'
				}, 'slow');
			}

			if (index == 3) {

				$('.page3-slide1-left').toggleClass('fadeInDownBig animated');
				$('.page3-slide1-left').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
					$(this).removeClass('fadeInDownBig animated');
				});

				$('.page3-slide1').toggleClass('fadeInUpBig animated');
				$('.page3-slide1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
					$(this).removeClass('fadeInUpBig animated');
				});

				$('.page3-slide2-left').toggleClass('rotateDownRight animated');
				$('.page3-slide2-left').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
					$(this).removeClass('rotateDownRight animated');
				});

				$('.page3-slide2').toggleClass('rotateDownLeft animated');
				$('.page3-slide2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
					$(this).removeClass('rotateDownLeft animated');
				});

				$('.page3-slide3-left').toggleClass('zoomInLeft animated');
				$('.page3-slide3-left').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
					$(this).removeClass('zoomInLeft animated');
				});

				$('.page3-slide3').toggleClass('zoomInRight animated');
				$('.page3-slide3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
					$(this).removeClass('zoomInRight animated');
				});

			}

			if (index == 4) {

				$('#copy-service-con1').animate({
					left: '50%',
					'marginLeft': '-502.5px'
				}, 'slow');
				$('#copy-service-con2').animate({
					right: '50%',
					'marginRight': '-502.5px'
				}, 'slow');

			}

			if (index == 5) {
				$('.copy-five-con li').toggleClass("zoomIn animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
					$(this).removeClass('zoomIn animated');
				});
			}

			if (index == 6) {
				$('.page6-QWR').toggleClass('lightSpeedIn animated');
				$('.page6-QWR').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
					$(this).removeClass('lightSpeedIn animated');
				});

				$('.page6-address li').toggleClass("fadeInLeftBig animated").one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
					$(this).removeClass('fadeInLeftBig animated');
				});

			}
		},
		onLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
			$("#copy-menu-item li a").removeClass("copy-active");
			$("#copy-menu-item li").eq(index - 1).children("a").addClass("copy-active");
			//alert("1111")
			if (index != 1) {
				$(".copy-video-left").animate({
					"left": (0 - posiValue)
				}, 300);
				$(".copy-video-right").animate({
					"right": (0 - posiValue)
				}, 300);
				$(".copy-title").animate({
					"top": "-64"
				}, 300)
			}
			if (index != 2) {
				$('.copy-do-animation').animate({
					'marginLeft': '-155px'
				}, 'slow');

				$('.copy-do-copy').animate({
					'marginLeft': '-155px'
				}, 'slow');

			}

			if (index != 4) {

				$('#copy-service-con1').animate({
					left: '100%',
					'marginLeft': '0'
				}, 'slow');

				$('#copy-service-con2').animate({
					right: '100%',
					'marginRight': '0'
				}, 'slow');

			}

		},
		afterSlideLoad: function(anchorLink, index, slideIndex) {

			if (index === 3) {
				switch (slideIndex) {
					case 0:
						$('.page3-slide1-left').toggleClass('fadeInDownBig animated');
						$('.page3-slide1-left').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
							$(this).removeClass('fadeInDownBig animated');
						});

						$('.page3-slide1').toggleClass('fadeInUpBig animated');
						$('.page3-slide1').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
							$(this).removeClass('fadeInUpBig animated');
						});
                       
						break;
					case 1:
						$('.page3-slide2-left').toggleClass('rotateDownRight animated');
						$('.page3-slide2-left').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
							$(this).removeClass('rotateDownRight animated');
						});

						break;
					case 2:
						$('.page3-slide3-left').toggleClass('zoomInLeft animated');
						$('.page3-slide3-left').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
							$(this).removeClass('zoomInLeft animated');
						});

						$('.page3-slide3').toggleClass('zoomInRight animated');
						$('.page3-slide3').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(e) {
							$(this).removeClass('zoomInRight animated');
						});
						break;
				}
				//alert(slideIndex)
				 $(".copy-page-switch li").eq(slideIndex).css({background:"#4cabed"});
				 $(".copy-page-switch li").eq(slideIndex).siblings("li").css({background:"#000"})
			}

		}

	});
	
	$("#copy-menu-item li").click(function() {
		$(this).children("a").addClass("copy-active");
		$(this).siblings().children("a").removeClass("copy-active");
	});

	$(".copy-video ul li div").hover(function() {
		$(this).children("span").animate({
			width: "100%"
		}, 200);
	}, function() {
		$(this).children("span").animate({
			width: "0"
		}, 200);
	});
	
	$(".copy-video ul li").click(function() {
		var title = $(this).children("div").children("p").html();
		var html = $(this).attr("data-video");
		layer.open({
			type: 2,
			scrollbar: false,
			title: title,
			shadeClose: true,
			shade: false,
			maxmin: true, //开启最大化最小化按钮
			area: ['950px', '600px'],
			content: html
		});
	});

});