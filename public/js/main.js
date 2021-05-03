/* *******************************************************
 * filename : main.js
 * description : 메인에만 사용되는 JS
 * date : 2017-05-30
******************************************************** */


$(document).ready(function(){
	var w_width = $(window).innerWidth();
	/* **************************
		메인 비주얼 효과
	***************************** */
	var $slick_carousel = $(".visual-img");
	
	// 비주얼 시작할때
	$slick_carousel.on('init', function(event, slick) {
		setTimeout(function  () {
			$(".visual-img li").eq(0).addClass("active");
		},1000);
	});

	// 비주얼이 돌아갈때
	$slick_carousel.on('afterChange', function(event, slick, currentSlide){
        $(".visual-img li").removeClass("active");
		$(this).find("li").eq(currentSlide).addClass("active");
    });

	$("#mainVisual").each(function  () {
		if (w_width <= 768) {
			$(".visual-img").slick({
				dots: false,
				infinite: true,
				arrows:true,
				pauseOnHover:false,
				autoplay:true,
				autoplaySpeed: 4000,
				slidesToShow: 1,
				slidesToScroll: 1,
				fade:true,
				prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><img src="/images/main/visual_prev_btn.png" alt=""></button>',
				nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><img src="/images/main/visual_next_btn.png" alt=""></button>'
			});
		}
	});

	//  메인 비주얼 이미지
	$(".visual-img li.first .visual-img-inner > span").each(function  () {
		if ( w_width <= 768) {
			$(this).children("img").attr("src",$(this).children("img").attr("src").replace("_pc.jpg","_m.jpg"));
		}else {
			$(this).children("img").attr("src",$(this).children("img").attr("src").replace("_m.jpg","_pc.jpg"));
		}
	});

	$(window).resize(function  () {
		var w_width = $(window).innerWidth();
		$(".visual-img li.first .visual-img-inner > span").each(function  () {
			if ( w_width <= 768) {
				$(this).children("img").attr("src",$(this).children("img").attr("src").replace("_pc.jpg","_m.jpg"));
			}else {
				$(this).children("img").attr("src",$(this).children("img").attr("src").replace("_m.jpg","_pc.jpg"));
			}
		});

		var $slick_carousel = $(".visual-img");
	
		// 비주얼 시작할때
		$slick_carousel.on('init', function(event, slick) {
			setTimeout(function  () {
				$(".visual-img li").eq(0).addClass("active");
			},1000);
		});

		// 비주얼이 돌아갈때
		$slick_carousel.on('afterChange', function(event, slick, currentSlide){
			$(".visual-img li").removeClass("active");
			$(this).find("li").eq(currentSlide).addClass("active");
		});

		$("#mainVisual").each(function  () {
			if (w_width <= 768) {
				$(".visual-img").slick({
					dots: false,
					infinite: true,
					arrows:true,
					pauseOnHover:false,
					autoplay:true,
					autoplaySpeed: 4000,
					slidesToShow: 1,
					slidesToScroll: 1,
					fade:true,
					prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><img src="/images/main/visual_prev_btn.png" alt=""></button>',
					nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><img src="/images/main/visual_next_btn.png" alt=""></button>'
				});
			}
		});
	});
	
	// 스크롤아이콘모션
	var $moveTxt = $('.icon-scroll');
	var moveTEXT = setInterval(function() {
		$moveTxt.animate({opacity:'.5',"bottom":'+=15px'}).animate({opacity:'1',"bottom":'-=15px'})
	}, 1000);
	
	// 메인 텍스트 효과
	var mainTxt0 = 'stop';
	var mainTxt1 = 'stop';

	if (mainTxt0 == 'stop') {
		mainTxt0 = 'play';
		mainPlay0();
	}

	$(window).scroll(function(e){
		if ($(this).scrollTop() == 0) {
			mainTxt1 = 'stop';
		}
	});

	function mainPlay0 () {
		$(".visual-img-inner span img").addClass("active");
		$(".visual-txt").addClass("active");
		$(".visual-animation-list li").addClass("active");
	};

	if (w_width <= 768) {
		$(".visual-img-inner span img").removeClass("active");
	}else {
		function mainPlay0 () {
			$(".visual-img-inner span img").addClass("active");
			$(".visual-txt").addClass("active");
			$(".visual-animation-list li").addClass("active");
		};
	}


	/* **************************
		메인 History
	***************************** */
	$(".main-history-container").each(function  () {
		if (w_width <= 768) {
			var $slideFor = $(this).children(".history-content-box").children(".slider-for");
			var $slideNav = $(this).children(".history-list-box").children(".slider-nav");
			
			$slideNav.slick({
				slidesToShow: 1, //작은이미지 몇개 보여줄것인지..
				slidesToScroll: 1,
				asNavFor: $slideFor,
				focusOnSelect: true,
				arrows:false,
				fade: true,
				adaptiveHeight: true,
				centerMode:false
			});	
			$slideFor.slick({
				autoplay: true, //자동슬라이드
				slidesToShow: 1, //큰이미지 몇개 보여줄것인지
				slidesToScroll: 1,
				arrows: true,
				fade: false,
				asNavFor: $slideNav,
				focusOnSelect: true,
				adaptiveHeight: true,
				prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><img src="/images/button/main_history_prev.png" alt=""></button>',
				nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><img src="/images/button/main_history_next.png" alt=""></button>'
			});
		}else if (w_width <= 1220) {
			var $slideFor = $(this).children(".history-content-box").children(".slider-for");
			var $slideNav = $(this).children(".history-list-box").children(".slider-nav");
			
			$slideNav.slick({
				slidesToShow: 3, //작은이미지 몇개 보여줄것인지..
				slidesToScroll: 1,
				asNavFor: $slideFor,
				focusOnSelect: true,
				arrows:false,
				fade: false,
				adaptiveHeight: true,
				centerMode:true
			});	
			$slideFor.slick({
				autoplay: true, //자동슬라이드
				slidesToShow: 1, //큰이미지 몇개 보여줄것인지
				slidesToScroll: 1,
				arrows: true,
				fade: false,
				asNavFor: $slideNav,
				focusOnSelect: true,
				adaptiveHeight: true,
				prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><img src="/images/button/main_history_prev.png" alt=""></button>',
				nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><img src="/images/button/main_history_next.png" alt=""></button>'
			});
		}else {
			var $slideFor = $(this).children(".history-content-box").children(".slider-for");
			var $slideNav = $(this).children(".history-list-box").children(".slider-nav");
			
			$slideNav.slick({
				slidesToShow: 5, //작은이미지 몇개 보여줄것인지..
				slidesToScroll: 1,
				asNavFor: $slideFor,
				focusOnSelect: true,
				arrows:false,
				fade: false,
				adaptiveHeight: true,
			});	
			$slideFor.slick({
				autoplay: true, //자동슬라이드
				slidesToShow: 1, //큰이미지 몇개 보여줄것인지
				slidesToScroll: 1,
				arrows: true,
				fade: false,
				asNavFor: $slideNav,
				focusOnSelect: true,
				adaptiveHeight: true,
				prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><img src="/images/button/main_history_prev.png" alt=""></button>',
				nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><img src="/images/button/main_history_next.png" alt=""></button>'
			});
		}
	});

	$(window).resize(function  () {
		var w_width = $(window).innerWidth();

		$(".main-history-container").each(function  () {
			if (w_width <= 768) {
				var $slideFor = $(this).children(".history-content-box").children(".slider-for");
				var $slideNav = $(this).children(".history-list-box").children(".slider-nav");
				
				$slideNav.slick({
					slidesToShow: 1, //작은이미지 몇개 보여줄것인지..
					slidesToScroll: 1,
					asNavFor: $slideFor,
					focusOnSelect: true,
					arrows:false,
					fade: true,
					adaptiveHeight: true,
					centerMode:false
				});	
				$slideFor.slick({
					autoplay: true, //자동슬라이드
					slidesToShow: 1, //큰이미지 몇개 보여줄것인지
					slidesToScroll: 1,
					arrows: true,
					fade: false,
					asNavFor: $slideNav,
					focusOnSelect: true,
					adaptiveHeight: true,
					prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><img src="/images/button/main_history_prev.png" alt=""></button>',
					nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><img src="/images/button/main_history_next.png" alt=""></button>'
				});
			}else if (w_width <= 1220) {
				var $slideFor = $(this).children(".history-content-box").children(".slider-for");
				var $slideNav = $(this).children(".history-list-box").children(".slider-nav");
				
				$slideNav.slick({
					slidesToShow: 3, //작은이미지 몇개 보여줄것인지..
					slidesToScroll: 1,
					asNavFor: $slideFor,
					focusOnSelect: true,
					arrows:false,
					fade: false,
					adaptiveHeight: true,
					centerMode:true
				});	
				$slideFor.slick({
					autoplay: true, //자동슬라이드
					slidesToShow: 1, //큰이미지 몇개 보여줄것인지
					slidesToScroll: 1,
					arrows: true,
					fade: false,
					asNavFor: $slideNav,
					focusOnSelect: true,
					adaptiveHeight: true,
					prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><img src="/images/button/main_history_prev.png" alt=""></button>',
					nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><img src="/images/button/main_history_next.png" alt=""></button>'
				});
			}else {
				var $slideFor = $(this).children(".history-content-box").children(".slider-for");
				var $slideNav = $(this).children(".history-list-box").children(".slider-nav");
				
				$slideNav.slick({
					slidesToShow: 5, //작은이미지 몇개 보여줄것인지..
					slidesToScroll: 1,
					asNavFor: $slideFor,
					focusOnSelect: true,
					arrows:false,
					fade: false,
					adaptiveHeight: true,
				});	
				$slideFor.slick({
					autoplay: true, //자동슬라이드
					slidesToShow: 1, //큰이미지 몇개 보여줄것인지
					slidesToScroll: 1,
					arrows: true,
					fade: false,
					asNavFor: $slideNav,
					focusOnSelect: true,
					adaptiveHeight: true,
					prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><img src="/images/button/main_history_prev.png" alt=""></button>',
					nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><img src="/images/button/main_history_next.png" alt=""></button>'
				});
			}
		});
	});
});
