$(function(){
	
    $('#dowebok').fullpage({
    	     sectionsColor: ['#ff33ff', '#efefef', '#7BAABE','#CCCCCC'],
    	     scrollingSpeed: 600,
//             verticalCentered: false,
    	     afterLoad: function(anchorLink, index){
    	     	console.log(index);
                 if(index == 2){
                    $('.copy-do-animation').animate({'marginLeft':'-505px'},'slow');
                    $('.copy-do-copy').animate({'marginLeft':'195px'},'slow');
                 }
    	     }
    });
});