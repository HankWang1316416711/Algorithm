
$(function(){
	$("header span:last-child").mouseenter(function(){
		$(".header-ul").slideDown("normal").show();
	});	
	$("header span:last-child").mouseleave(function(){
		$(".header-ul").slideUp("fast").hien();
	});

	// ======================================
	// 实现art中的外边框的交互
	$(".for img").each(function(key, value){
		var h = $(this).outerHeight();
		var w = $(this).outerWidth();
		var targetHeight = Math.floor( h * 0.65 );
		var targetWidth = Math.floor( w * 0.65 );
	/*	console.log(targetWidth);
		console.log(targetHeight);*/
		$(this).mouseenter(function(){

			$(this).css({ "width":targetWidth,"height":targetHeight,"transition":"width 0.5s,height 0.5s"});
			// $($(".for a")[key]).css("border","3px solid black");

			$($(".border")[key]).fadeIn("normal");
		});
		$(".for a").mouseleave(function(){
			$(".for img").css({ "width":w,"height":h,"transition":"width 1s,height 1s"});
			// $($(".for a")[key]).css("border","0 none");
			$($(".border")[key]).fadeOut("normal");
		});
	});










});

