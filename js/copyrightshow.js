$(function(){
    $('#dowebok').fullpage({
         anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage','fivePage', 'lastPage'],
         menu: '#copy-menu-item',
    	     sectionsColor: ['#ffffff', '#4BBFC3', '#7BAABE','#ffff00'],
    	     scrollingSpeed: 500,
    	     afterLoad: function(anchorLink, index){
    	     	$("#copy-menu-item li a").removeClass("copy-active");
    	     	$("#copy-menu-item li").eq(index-1).children("a").addClass("copy-active");
    	     	if(index == 1){
    	     		$(".copy-video").animate({height:"150px"},300,function(){
    	     		      
    	     	    });
    	     	}
    	     },
    	     onLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
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