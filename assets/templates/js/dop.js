
$(document).ready(function() {

   

   $('.arenda__partners-slider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      speed: 900,
      prevArrow: "<button class='nav-prev icon-angle-left'></button>",
      nextArrow: "<button class='nav-next icon-angle-right'></button>",
      responsive: [
         {
            breakpoint: 1199,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
            }
         },
         {
            breakpoint: 860,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               arrows: false,
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false,
            }
         },
      ]
   });

   $('.arenda__zall').hide();

   var optionTabSlider = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      speed: 900,
      prevArrow: "<button class='nav-prev icon-angle-left'></button>",
      nextArrow: "<button class='nav-next icon-angle-right'></button>",
      responsive: [
         {
            breakpoint: 1199,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
            }
         },
         {
            breakpoint: 860,
            settings: {
               slidesToShow: 2,
               slidesToScroll: 2,
               arrows: false,
            }
         },
         {
            breakpoint: 576,
            settings: {
               slidesToShow: 1,
               slidesToScroll: 1,
               arrows: false,
            }
         },
      ]
   }
   
   $('.arenda__zall').eq(0).show();
   
   $('.arenda__zall').eq(0).find('.arenda__zall-slider').on('init', function() {});
   $('.arenda__zall').eq(0).find('.arenda__zall-slider').slick(optionTabSlider).removeClass('hide-animate'); 
   
   $('.arenda__tab-btn').click(function() {
      $('.arenda__tab-btn').removeClass('active').eq($(this).index()).addClass('active');
      $('.arenda__zall').hide().eq($(this).index()).fadeIn();
      $('.arenda__zall').eq($(this).index()).find('.arenda__zall-slider').slick(optionTabSlider).removeClass('hide-animate'); 

   });

   // $('.yakar').click(function() {
   //    $('html, body').animate({
   //          scrollTop: $($(this).attr('href')).offset().top - 70
   //    }, 1500);
   //    return false;
   // });
   
  

});