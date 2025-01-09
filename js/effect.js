
$('.hotslider').slick({
	prevArrow: "<img class='a-left control-c prev slick-prev' src='images/iconmonstr-angel-left-thin.svg'>",
	nextArrow: "<img class='a-right control-c next slick-next' src='images/iconmonstr-angel-right-thin.svg'>",

	centerMode: true,
	centerPadding: "0px",
	slidesToShow: 3,
	slidesToScroll: 1,
	responsive: [


		{
			breakpoint: 768,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: "0px",
				slidesToShow: 1
			}
		}, {
			breakpoint: 480,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: "0px",
				slidesToShow: 1
			}
		}
	]
});


$(document).ready(function () {

	$('.carousel').carousel({
		pause: "false",
		interval: 7000
	});



});


AOS.init();

setTimeout(function () {

	$(".mask").css("display", "none");


}, 3500);
/*
setTimeout(function(){
	
	$("#all").css("opacity", "1");


}, 800);

*/





$(document).ready(function () {
	if ($('#back-to-top').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('#back-to-top').addClass('show');
				} else {
					$('#back-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('#back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
});

Fancybox.bind("[data-fancybox]", {
	Thumbs: {
		autoStart: false,
		maxSlideCount: 5

	},
});


$(document).ready(function () {
	var sbar = $(window).scrollTop(); //卷軸的高度
	if (sbar > 100) {
		$(".topbox").css("background-color", "#b59e7e");

	} else {
		$(".topbox").css("background-color", "transparent");
		
	};
});



$(function () {
	//scroll 事件適用於所有可滾動的元素和 window 對象（瀏覽器窗口）。
	$(window).scroll(function () {
		var scroHei = $(window).scrollTop(); //滾動的高度
		if (scroHei < 100) {
			$(".topbox").css("background-color", "transparent");

		} else {
			$(".topbox").css("background-color", "#b59e7e");

		}
	})

});
