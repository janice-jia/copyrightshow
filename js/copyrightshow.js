$(function(){
	
    $('#dowebok').fullpage({
    	     sectionsColor: ['#ff33ff', '#4BBFC3', '#7BAABE','#ffff00'],
    	     scrollingSpeed: 600,
    	     afterLoad: function(anchorLink, index){
    	     	console.log(index)
    	     }
    });
});