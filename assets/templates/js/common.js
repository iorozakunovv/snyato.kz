$(document).ready(function() {

   // Slider ----------------------------------
    var e = $(".product__item-img");
   
   e.imagesLoaded(function() {
      $('.product__item-img').slick({
         dots: false,
         infinite: false,
         slidesToShow: 1,
         slidesToScroll: 1,
         speed: 900,
         prevArrow: "<button class='nav-prev icon-angle-left'></button>",
         nextArrow: "<button class='nav-next icon-angle-right'></button>",
      });
   })

   // $('.studios__detail-slider').slick({
   //    dots: true,
   //    infinite: true,
   //    slidesToShow: 1,
   //    speed: 900,
   //    prevArrow: "<button class='nav-prev icon-angle-left'></button>",
   //    nextArrow: "<button class='nav-next icon-angle-right'></button>",
   //    responsive: [{
   //       breakpoint: 576,
   //       settings: {
   //          arrows: false,
   //       }
   //    },]
   // });
   
   $('.about__izalls-slider').slick({
      dots: true,
      infinite: true,
      slidesToShow: 1,
      speed: 900,
      prevArrow: "<button class='nav-prev icon-angle-left'></button>",
      nextArrow: "<button class='nav-next icon-angle-right'></button>",
      responsive: [{
         breakpoint: 576,
         settings: {
            arrows: false,
         }
      },]
   });
   
   var optionPopupSlider = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      speed: 900,
      prevArrow: "<button class='nav-prev icon-angle-left'></button>",
      nextArrow: "<button class='nav-next icon-angle-right'></button>",
      responsive: [{
         breakpoint: 576,
         settings: {
            arrows: false,
         }
      },]
   }
   $('.studios__detail-slider').on('init', function() {});
   $('.studios__detail-slider').slick(optionPopupSlider);  

   // Header ----------------------------------
   $(window).scroll(function(event) {
     if ($(window).scrollTop() > 0) {
            $('.header__wrap').addClass('fixed');
         } else {
            $('.header__wrap').removeClass('fixed');
         }
      if ($(window).scrollTop() > $('.consult__mps').offset().top - 100) {
         $('.header__wrap').addClass('brd0');
      }
      if ($(window).scrollTop() < $('.consult__mps').offset().top - 100) {
         $('.header__wrap').removeClass('brd0');
      }
   });

   $('.nav__ul-li.li-services').hover(
      function() {
         $('.nav').addClass('show-services');
      }, function() {
         $('.nav').removeClass('show-services');
      }
   );

   $('.header__nav-toggle').click(function() {
      $('.header__nav-toggle').toggleClass('open');
      $('.nav').slideToggle().toggleClass('open');
   });
   if ($(window).width() < 1027) {
      $('.nav__ul-li.li-services').click(function() {
         $('.nav__ul-services-show').toggleClass('show');
         $('.nav__ul-services').slideToggle();
      });
   }

   // Page -------------------------------------

   $('.price__package-tab .btn-tab2').click(function() {
      $(this).parent('.price__package-tab').find('.btn-tab2').removeClass('active');
      $(this).addClass('active');
      $(this).parent('.price__package-tab').next('div').find('.price__package').hide().eq($(this).index()).fadeIn();
   }).eq(0).addClass('active');

   $('.studios__tab.tab-btn').eq(0).addClass('active');

   $('.studios__tab.tab-btn').click(function() {
      $('.studios__tab.tab-btn').removeClass('active').eq($(this).index()).addClass('active');
      $('.studios__detail').hide().eq($(this).index()).fadeIn();
      $('.slider').slick('unslick');
      $('.slider').eq($(this).index()).slick(optionPopupSlider);
   }).eq(0).addClass('active');

   $('.faq__item-title').click(function() {
      $(this).parent().toggleClass('active');
      $(this).next('.faq__item-descr').slideToggle();
   });

   $('.contacts__tab .btn-tab').click(function() {
      $('.contacts__tab .btn-tab').removeClass('active').eq($(this).index()).addClass('active');
      $('.contacts__tab-info').hide().eq($(this).index()).fadeIn();
      $('.contacts__map').hide().eq($(this).index()).fadeIn();
   }).eq(0).addClass('active');

   

   // Form -------------------------------------

   $('.input').click(function() {
      $(this).removeClass('error');
   });

   $('form .flex-checkbox').bind('click', function(v) {
      if ($(this).children('.checkbox').is(':checked')) {
         $(this).children('.checkbox-custom').addClass('checked').removeClass('error');
      } else {
         $(this).children('.checkbox-custom').removeClass('checked');
      }
   });

   $('.form .btn-submit').click(function(event) {
      event.preventDefault();
      var error = 0;
      $(this).parent('form').find('.required').each(function() {
         if ($(this).val().length === 0) {
            $(this).addClass('error');
            $(this).next().fadeIn();
            error = 1;
         }
      });
      if ($(this).parent('.form').find('.checkbox-custom').hasClass('checked')) {
         $(this).parent('.form').find('.checkbox-custom').removeClass('error')
      } else {
         $(this).parent('.form').find('.checkbox-custom').addClass('error');
         error = 1;
      }
      if (error == 0) {
         $(this).parent('form').submit();
         $(this).parent('.form').find('.checkbox-custom').removeClass('checked')
      }
   });

   $(document).on('af_complete', function(event, response) {
      if (response.success) {
         $('.popup__backcall').fadeOut();
         $('.popup__modal, .popup__successfull').fadeIn();
      }
   });

   // $('.form').submit(function() {
   //    $.ajax({
   //       type: "POST",
   //       url: "/assets/templates/mail/backcall-mail.php",
   //       data: $(this).serialize(),
   //       success: function(response) {
   //          if (response) { // если есть ответ, то выполняем след. действия
   //             $('.popup__backcall').fadeOut(600);
   //             $('.popup__mask').fadeIn();
   //             $('.popup__successfull').fadeIn(1000);
   //             setTimeout(function() {
   //                $('.form').trigger('reset');
   //             }, 1000);
   //          } else {
   //             $('.popup__backcall').fadeOut(600);
   //             $('.popup__mask').fadeIn();
   //             $('.popup__successfull').fadeIn(1000);
   //             setTimeout(function() {
   //                $('.form').trigger('reset');
   //             }, 1000);
   //          }
   //       },
   //       error: function(response) {
   //          $('.popup__backcall').fadeOut(600);
   //             $('.popup__mask').fadeIn();
   //             $('.popup__successfull').fadeIn(1000);
   //             setTimeout(function() {
   //                $('.form').trigger('reset');
   //             }, 1000);

   //       }
   //    })
   //    return false;
   // });

   // Popup -----------------------------------------------

   $('.popup__close, .popup__mask').click(function() {
      $('.popup, .popup__modal').fadeOut();
   });

   $('.btn-backcall').click(function() {
      var title = $(this).data('title');
      console.log(title);
      if(title === undefined){
         title = 'Связаться с нами'
      }
      $('.popup__backcall .popup__title').html(title);
      $('.popup__modal').fadeIn();
      $('.popup__backcall').fadeIn(300);
   });

   $('.comments__add').click(function() {
      $('.popup__modal').fadeIn();
      $('.popup__add-comments').fadeIn(300);
   });


   $('.item-video').click(function() {
      var video = '<iframe class="youtube" height="100%" width="100%" src="https://www.youtube.com/embed/' + $(this).data('youtubeid') + '?rel=0;autoplay=1" allowfullscreen frameborder="0"></iframe>';
      $('.popup__video').append(video);
      $('.popup__modal').fadeIn();
      $('.popup__video').fadeIn(300);
   });

   $('.popup__close, .popup__mask').click(function() {
      $('.popup').fadeOut();
      $('.popup__modal').fadeOut(300);
      setTimeout(function() {
         $('.popup__video .youtube').remove();
      }, 100);
   });

   $(function(){
        $("a[href^='#']").click(function(){
                var _href = $(this).attr("href");
                $("html, body").animate({scrollTop: $(_href).offset().top - 100}, 900);
                return false;
        });
   });
   
   
   var lfn = function(){
      
       $('#pdopage .rows a:nth-child(-n+'+linkCount+')').show();
       
         if(linkCount >= linkLength){
            $('#more-photo').hide();
         }
      
      linkCount = linkCount + 20;
   };
   var link = $('#pdopage .rows a');
   link.css({display: 'none'})
   var linkCount = 8;
   var linkLength = link.length;
   
   lfn();
   $('#more-photo').click(function(e){
      e.preventDefault();
      lfn();
   });
});