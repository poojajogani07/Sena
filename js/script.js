$(document).ready(function () {
    $('#slider1').owlCarousel({
        loop: true,
        dotsEach: true,
        smartSpeed: 2000,
        nav: true,
        navText: ['<i class="las la-angle-left"></i>', '<i class="las la-angle-right"></i>'],
        dots: false,
        animateIn: 'animate__fadeIn',
        // autoplay:true,
        // autoplayTimeout:5000,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    })

    $('#slider2').owlCarousel({
        loop: true,
        items:5,
        dots:true,
        nav:false,
        margin:74,
        autoplay:true,
        autoplayTimeout:3000,
    })

    // top-to-bottom scroll
    
    var btn = $('#button');

    $(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
    });

    btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
    });

    // accordian section

    $('.headeing').click(function(e) {
        e.preventDefault();
    
      let $this = $(this);
    
      if ($this.next().hasClass('show')) {
          $this.next().removeClass('show');
          $this.next().slideUp(350);
      } else {
          $this.parent().parent().find('.accordian-parag').removeClass('show');
          $this.parent().parent().find('.accordian-parag').slideUp(350);
          $this.next().toggleClass('show');
          $this.next().slideToggle(350);
      }
  });

    $('.url >a').click(function () {
        $('.url >a').removeClass('active');
        $(this).addClass('active');
    })

    var owl = $('#slider1');
    owl.owlCarousel();

    owl.on('changed.owl.carousel', function (event) {
        new WOW().init();
    })

    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animated', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    )
    wow.init();

    // fixed header

    $(window).scroll(function () {
        var sticky = $('.sticky'),
            scroll = $(window).scrollTop();

        if (scroll >= 120) sticky.addClass('fixed');
        else sticky.removeClass('fixed');
    });

    // testimonial slider

    $('.testimonial').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        infinite: true,
        asNavFor: '.testimonial-img-slider'
    });
    $('.testimonial-img-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.testimonial',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        infinite: true,
        centerPadding: '0px',
    });

    // counter on scroll
    var counted = 0;
$(window).scroll(function() {

  var oTop = $('.ecommerce-sales-icon').offset().top - window.innerHeight;
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $('.ecommerece-sales-value').each(function() {
      var $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
          countNum: countTo
        },

        {

          duration: 2000,
          easing: 'swing',
          step: function() {
            $this.text(Math.floor(this.countNum));
          },
          complete: function() {
            $this.text(this.countNum);
            //alert('finished');
          }

        });
    });
    counted = 1;
  }

}); 

});


//  loader
$(document).ready(function(){
    setTimeout(function(){
        $('.pre-loader').fadeOut();
    },2000);
})
