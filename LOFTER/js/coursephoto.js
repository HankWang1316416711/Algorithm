$(function(){

	setInterval(function(){
		var targetH = $("html body").scrollTop();

		if( targetH > 1880 ){
			$( ".nav" ).css("display","none");
		}else{
			$(".nav").css("display","block");
		}
		if( targetH > 1200 ){
			$(".arrowtop").css("display","block");
		}else{
			$(".arrowtop").css("display","none");
		}

	},10);
		$(".arrowtop").on('click',function(e){
			$("html body").animate({
				scrollTop:0
			},400)
			return false;
		});

});