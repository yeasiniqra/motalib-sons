$(document).ready(function(){
		// complete project slide
		$('.project-main-grid').owlCarousel({
			loop:true,
			margin:true,
			nav:true,
			autoplay:true,
			autoplayTimeout:4500,
			dots:false,
			items:3,
				responsive:{
				0:{
					items:1
				},
				575:{
					items:1
				},
				767:{
					items:2
				},
				992:{
					items:3
				},
				1200:{
					items:3
				}
			}
		})

		// partner project slide 
		$('.partner-main-grid').owlCarousel({
			loop:true,
			margin:false,
			nav:false,
			autoplay:true,
			autoplayTimeout:4500,
			dots:false,
			items:5,
				responsive:{
				0:{
					items:2
				},
				575:{
					items:3
				},
				767:{
					items:3
				},
				992:{
					items:5
				},
				1200:{
					items:5
				}
			}
		})

		// testmonial project slide 
		$('.testmonial-main-grid').owlCarousel({
			loop:true,
			margin:false,
			nav:false,
			autoplay:true,
			autoplayTimeout:5000,
			dots:false,
			items:3,
				responsive:{
				0:{
					items:1
				},
				575:{
					items:1
				},
				767:{
					items:2
				},
				992:{
					items:3
				},
				1200:{
					items:3
				}
			}
		})

});






		




