
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
		anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fivePage', 'lastPage'],
		menu: '#copy-menu-item',
		sectionsColor: ['#ffffff', '#4BBFC3', '#7BAABE', '#ffff00'],
		scrollingSpeed: 500,
		afterLoad: function(anchorLink, index) {
			// one start ----->
			if (index == 1) {
				$(".copy-video-left").animate({"left": "0px"}, 300);
				$(".copy-video-right").animate({"right": "0px"}, 300, function() {
				     $(".copy-title").animate({"top": copyTitleTop}, 300)
				});
			}
			if(index == 2){
                    $('.copy-do-animation').animate({'marginLeft':'-505px'},'slow');
                    $('.copy-do-copy').animate({'marginLeft':'195px'},'slow');
                 }
                 
                 if(index == 4){
	 
                    $('#copy-service-con1').animate({left:'50%','marginLeft':'-502.5px'},'slow');	 
                    $('#copy-service-con2').animate({right:'50%','marginRight':'-502.5px'},'slow');
	               }
			// one end ----->
		},
		onLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex) {
			// one start ----->
			$("#copy-menu-item li a").removeClass("copy-active");
			$("#copy-menu-item li").eq(index - 1).children("a").addClass("copy-active");
			if (index != 1) {
				$(".copy-video-left").animate({"left": (0 - posiValue)}, 300);
				$(".copy-video-right").animate({"right": (0 - posiValue)}, 300);
				$(".copy-title").animate({"top": "-64"}, 300)
			}
			
			 if(index != 2){
                        $('.copy-do-animation').animate({'marginLeft':'-155px'},'slow');

                        $('.copy-do-copy').animate({'marginLeft':'-155px'},'slow');

                    }
	 
                    if(index != 4){

                        $('#copy-service-con1').animate({left:'100%','marginLeft':'0'},'slow');

                        $('#copy-service-con2').animate({right:'100%','marginRight':'0'},'slow');

                    }
			// one end ----->
		}

	});
    // one start ----->
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
	
	$(".copy-video ul li").click(function(){
		 var html = $(this).attr("data-video");
		 layer.open({
		      type: 2,
		      scrollbar:false,
		      title: ' ',
		      shadeClose: true,
		      shade: false,
		      maxmin: true, //开启最大化最小化按钮
		      area: ['950px', '600px'],
		      content: html
         });
	});
	// one end ----->
    
    $("#copy-menu-item li").click(function(){
    	     $(this).children("a").addClass("copy-active");
    	     $(this).siblings().children("a").removeClass("copy-active");
    });
});