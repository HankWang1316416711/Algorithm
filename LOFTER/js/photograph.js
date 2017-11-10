$(function(){

	// 用js去获取图片的width和height
	// 之后再来设置div的宽高

		$(".works-img img").each(function(key, value){

			var w = $(this).outerWidth();
			var h = $(this).outerHeight();

			$(".works-pic-color")[key].style.position = 'absolute';
			$(".works-pic-color")[key].style.width = w + 'px';
			$(".works-pic-color")[key].style.height = h + 'px';
	});
});