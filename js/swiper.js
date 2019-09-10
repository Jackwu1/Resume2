!function() {
	let view = document.querySelector('.swiper-container');
	let controller = {
		view: null,
		swiper: null,
		swiperOptions:{
			// Optional parameters
			loop: true,
			 // If we need pagination
			pagination: {
			  el: '.swiper-pagination',
			},
			// Navigation arrows
			navigation: {
			  nextEl: '.swiper-button-next',
			  prevEl: '.swiper-button-prev',
			},
		},
		init(view) {
			this.view = view;
			this.initSwiper()
		},
		initSwiper() {
			this.swiper = new Swiper('.swiper-container', this.swiperOptions);
		}
	}
	controller.init()
}.call()

  