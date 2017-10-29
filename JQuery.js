$(document).ready(function(){
	
	$(window).scroll(function(){
		
		console.log($(window).scrollTop());
		if($(window).scrollTop() > 75) {
     	 $('nav').addClass('FixedNav');
     	 $('nav ul li').css("height", "50px");
     	 $('nav ul li a').css({"line-height":"50px", "padding":"14px 20px"});
    	}
   	 	if ($(window).scrollTop() < 76) {
      	$('nav').removeClass('FixedNav');
      	$('nav ul li').css("height", "30px");
     	$('nav ul li a').css({"line-height":"30px", "padding":"8px 20px"});
    	}
  });
	
});
