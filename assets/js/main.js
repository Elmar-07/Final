


  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: -50,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  let menuBtn = document.querySelector('.menu-btn');
  let menu = document.querySelector('.menu');
  menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})


  


$(function() {
    $('#navbar.navbar-right ul li a').click(function() {
      //clear active status of any parent LI's
      $('#navbar.navbar-right ul li').removeClass('active');

      // store id of new active sub-nav
      var currSub = $(this).parent();
      currSub.addClass('active')
      var id = currSub.attr('id');

      // clear active status of any sub-nav list
      $('#subnavbar ul.navbar-nav').removeClass('active');

      // set selected sub-nav to active
      $('.' + id).addClass('active');

      console.log($('.' + id).attr('class'));

    });

  });



