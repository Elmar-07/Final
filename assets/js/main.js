


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    grabCursor:"true",

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: "true"
    },

    breakpoints: {
      0: {
          slidesPerView: 1,
          spaceBetween: 30,
      },
      520: {
          slidesPerView: 2,
          spaceBetween: 20,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 20,
    },

    992: {
      slidesPerView: 2,
      spaceBetween: 20,
  },

      1024: {
          slidesPerView: 3,
          spaceBetween: 0,
      },
      

    },
  
   });
   


  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');
  menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})



function kura_tm_preloader(){
	
	"use strict";
	
	var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
	var preloader = $('#preloader');
	
	if (!isMobile) {
		setTimeout(function() {
			preloader.addClass('preloaded');
		}, 800);
		setTimeout(function() {
			preloader.remove();
		}, 2000);

	} else {
		preloader.remove();
	}
}


function kura_tm_my_load(){
	
	"use strict";
	
	var speed	= 500;
	setTimeout(function(){kura_tm_preloader();},speed);
	setTimeout(function(){jQuery('body').addClass('opened');},speed+2000);
}



// $(function() {
//     $('#navbar.navbar-right ul li a').click(function() {
//       //clear active status of any parent LI's
//       $('#navbar.navbar-right ul li').removeClass('active');

//       // store id of new active sub-nav
//       var currSub = $(this).parent();
//       currSub.addClass('active')
//       var id = currSub.attr('id');

//       // clear active status of any sub-nav list
//       $('#subnavbar ul.navbar-nav').removeClass('active');

//       // set selected sub-nav to active
//       $('.' + id).addClass('active');

//       console.log($('.' + id).attr('class'));

//     });

//   });





