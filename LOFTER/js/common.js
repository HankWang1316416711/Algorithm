$(function(){
	$(".A").click(function(){
		$("#B").slideDown("fast").show();
		return false;
	});
	$(".A").focusout(function(){
		$("#B").hide();
	});
});

$(function(){
	$("#label-input").focusin(function(){
		$(".navRight-form").slideDown("fast").show();
	});
	$("#label-input").focusout(function(){
		$(".navRight-form").hide();
	});
});