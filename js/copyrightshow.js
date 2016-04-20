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
                 
                 if(index == 4){
	 
                    $('#copy-service-con1').animate({left:'50%','marginLeft':'-502.5px'},'slow');	 
                    $('#copy-service-con2').animate({right:'50%','marginRight':'-502.5px'},'slow');
	               }
    	     },
    	     onLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){
                 $("#copy-menu-item li a").removeClass("copy-active");
                 $("#copy-menu-item li").eq(index-1).children("a").addClass("copy-active");
    	     	   //alert("1111")
    	     	   $(".copy-video").animate({height:"0px"},200,function(){
    	     		
    	     	    });
                 
                    if(index != 2){
                        $('.copy-do-animation').animate({'marginLeft':'-155px'},'slow');

                        $('.copy-do-copy').animate({'marginLeft':'-155px'},'slow');

                    }
	 
                    if(index != 4){

                        $('#copy-service-con1').animate({left:'100%','marginLeft':'0'},'slow');

                        $('#copy-service-con2').animate({right:'100%','marginRight':'0'},'slow');

                    }
    	     }
    	     
    });
    
    $("#copy-menu-item li").click(function(){
    	     $(this).children("a").addClass("copy-active");
    	     $(this).siblings().children("a").removeClass("copy-active");
    });
});