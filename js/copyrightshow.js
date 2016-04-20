$(function(){
    $('#dowebok').fullpage({
        loopHorizontal:false,
         anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage','fivePage', 'lastPage'],
         menu: '#copy-menu-item',
    	     sectionsColor: ['#ffffff', '#efefef', '#7BAABE','#CCCCCC'],
    	     scrollingSpeed: 500,
    	     afterLoad: function(anchorLink, index){

    	     	if(index == 1){
    	     		$(".copy-video").animate({height:"150px"},300,function(){

    	     	    });
    	     	}
                if(index == 2){
                    $('.copy-do-animation').animate({'marginLeft':'-505px'},'slow');
                    $('.copy-do-copy').animate({'marginLeft':'195px'},'slow');
                 }
    	     },
    	     onLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
                 $("#copy-menu-item li a").removeClass("copy-active");
                 $("#copy-menu-item li").eq(index-1).children("a").addClass("copy-active");
    	     	   //alert("1111")
    	     	   $(".copy-video").animate({height:"0px"},200,function(){
    	     		
    	     	    });
    	     }
    	     
    });
    
    $("#copy-menu-item li").click(function(){
    	     $(this).children("a").addClass("copy-active");
    	     $(this).siblings().children("a").removeClass("copy-active");
    });
});