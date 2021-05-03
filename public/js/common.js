/* *******************************************************
 * filename : common.js
 * description : 전체적으로 사용되는 JS
 * date : 2017-05-30
******************************************************** */


jQuery(function($){
	// top버튼 클릭시
	$(".to-top-btn").on("click",function  () {
		$("html, body").animate({scrollTop:0},600,"easeInOutExpo");	// easing 효과 사용하기위해서는 jquery.easing.1.3.js이 필요함, 없을 시 기본 "swing"
		return false;
	});

	/* 패밀리사이트 */
	$("#familySiteBox a.family-open-btn").click(function  () {
		if ( $(this).siblings("ul").css("display") == "none") {
			$(this).siblings("ul").stop().slideDown();
		}
		return false;
	});

	$("#familySiteBox").on("mouseleave",function  () {
		$(this).children("ul").stop().slideUp();
	});
});
