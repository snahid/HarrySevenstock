$(document).ready(function(){
$('.carousel').carousel({
    interval: false
});


// Back To Top 
//Get the button
var mybutton = document.getElementById("toTopBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    mybutton.style.display = "block";
    mybutton.style.opacity = 1;
    mybutton.style.visibility = "visible";
  } else {
    mybutton.style.display = "none";
    mybutton.style.opacity = 0;
    mybutton.style.visibility = "hidden";
  }
}

// When the user clicks on the button, scroll to the top of the document

// Back To Top 



$(window).scroll(function () {
    if ($(document).scrollTop() >= 863) {
        $(".sticky-tab-section").addClass("bottom-sticky");
        $(".left-side-menu-wrapper").css({
            "visibility": "visible",
            "opacity": "1"
        });
        $(".first-content-inner-wrapper").css({
            "padding-top": "120px"
        });

    } else {
        $(".sticky-tab-section").removeClass("bottom-sticky");
        $(".left-side-menu-wrapper").css({
            "visibility": "hidden",
            "opacity": "0"
        });
        $(".first-content-inner-wrapper").css({
            "padding-top": "0px"
        });
    }
    });
    // Home Menu 
    $('.menu-dots').click(function(){
        $('.menu-dots').css({
            'transition': '0.3s ease-in-out',
            'opacity': '0',
            'visibility': 'hidden'
        });
        $('.cross').css({
            'visibility': 'visible',
            'transition': '0.3s ease-in-out',
            'opacity': '1'
        });
        $('.mymobile-menu').css({
            'visibility': 'visible',
            'opacity': '1'
        });
        $('.mobile-wrapper').css({
            'z-index': '5' 
        });
    });
    $('.cross').click(function(){
        $('.cross').css({
            'transition': '0.3s ease-in-out',
            'opacity': '0',
            'visibility': 'hidden'
        });
        $('.menu-dots').css({
            
            'transition': '0.3s ease-in-out',
            'opacity': '1',
            'visibility': 'visible'
        });
        $('.mymobile-menu').css({
            'visibility': 'hidden',
            'opacity': '0'
        });
        $('.mobile-wrapper').css({
            'z-index': '-1' 
        });
    });
     // Home Menu 

    // News Menu
    $('.news-menu-dots').click(function(){
        $('.news-menu-dots').css({
            'transition': '0.3s',
            'opacity': '0',
            'visibility': 'hidden'
        });
        $('.news-cross').css({
            'visibility': 'visible',
            'transition': '0.3s',
            'opacity': '1'
        });
        $('.mymobile-menu').css({
            'visibility': 'visible',
            'opacity': '1'
        });
        $('.news-mobile-wrapper').css({
            'z-index': '5' 
        });
    });
    $('.news-cross').click(function(){
        $('.news-cross').css({
            'transition': '0.3s',
            'opacity': '0',
            'visibility': 'hidden'
        });
        $('.news-menu-dots').css({
            'transition': '0.3s',
            'opacity': '1',
            'visibility': 'visible'
        });
        $('.mymobile-menu').css({
            'visibility': 'hidden',
            'opacity': '0'
        });
        $('.news-mobile-wrapper').css({
            'z-index': '1' 
        });
    });
    // News Menu

    // Accordion 
    $('.acc-top').click(function(){
        if ($(".accrdion-list").css("height") == "0px") {
            $('.acc-icon').css({
                'transform': 'rotate(-180deg)'
            });
            $('.accrdion-list').css({
                'opacity': '1',
                'visibility': 'visible',
                'height': '330px',
                'z-index': '2'
            });
          } else {
            $('.acc-icon').css({
                'transform': 'rotate(0deg)'
            });
            $('.accrdion-list').css({
                'opacity': '0',
                'visibility': 'hidden',
                'height': '0px',
                'z-index': '-1'
            });
          }
       
    });
    // Accordion 

    // Back 
    function goBack() {
        window.history.back();
      }
    // Back 


    var direction = "ttb";
    var gap = "30px";

    if($(window).width() <= 1152){
        direction = "ltr";
    }
    if($(window).width() <= 575){
        gap = "200px";
    }
    
    
        // Splide Slider 
        new Splide( '.splide', {
            rewind: true,
            direction  : direction,
            heightRatio: '1',
            perPage    : 3,
            arrows: false,
            autoHeight: true,
            perMove: true,
            gap: gap,
            autoplay: true,
            pauseOnHover: true,
            breakpoints: {
                1152: {
                    perPage: 1,
                },
            }
            } ).mount();
        // Splide Slider 


        var prevIcon = '<img src="./assets/images/bleft.svg" alt="">';
        var nextIcon = '<img src="./assets/images/bright.svg" alt="">';
            $('.blog-carousel').owlCarousel({
                loop:true,
                margin:10,
                nav:true,
                slideBy: 1,
                // autoplay: true,
                autoplayTimeout: 4000,
                autoplayHoverPause: true,
                navText:[
                    prevIcon,
                    nextIcon
                ],
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:1
                    },
                    1000:{
                        items:1
                    }
                }
            })


});





    // Blog Carousel 



    // Blog Carousel 


    // var loader = document.getElementById("preloader");

    // window.addEventListener("load", function(){
    //     loader.style.display = "none";
    // });

    // $(window).load(function() {
    //     setTimeout(function(){ $('#preloader').fadeIn(); }, 0);
    //     setTimeout(function(){ $('#preloader').fadeOut('slow'); }, 5000);
       
    //  })

    // $(window).load(function(){
    //     $('#preloader').delay(5000).hide();
    //    });

   
    
    //    setTimeout(function(){     
    //     $('#preloader').fadeOut();
    //     $('#preloader').delay(150).fadeOut('slow'); 
    // }, 3000);

    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
      }

  