$(document).ready(function () {
    $('.carousel').carousel({
        interval: false
    });



   


    // Back To Top 
    //Get the button
    var mybutton = document.getElementById("toTopBtn");

    // When the user scrolls down 200px from the top of the document, show the button
    window.onscroll = function () {
        scrollFunction()
    };

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

        if ($(window).width() > 1024) {
            if ($(document).scrollTop() >= 855) {
                $(".sticky-tab-section").addClass("bottom-sticky");
                $(".left-side-menu-wrapper").css({
                    "visibility": "visible",
                    "opacity": "1"
                });
                // $(".first-content-inner-wrapper").css({
                //     "padding-top": "120px"
                // });
    
            } else {
                $(".sticky-tab-section").removeClass("bottom-sticky");
                $(".left-side-menu-wrapper").css({
                    "visibility": "hidden",
                    "opacity": "0"
                });
                // $(".first-content-inner-wrapper").css({
                //     "padding-top": "0px"
                // });
            }
    
            if ($(document).scrollTop() >= 855) {
                $(".left-side-menu-wrapper").css({
                    "visibility": "visible",
                    "opacity": "1"
                });
    
            } else {
                $(".left-side-menu-wrapper").css({
                    "visibility": "hidden",
                    "opacity": "0"
                });
            }
          }

          if ($(window).width() <= 1024) {
            if ($(document).scrollTop() >= 1350) {
                $(".sticky-tab-section").addClass("bottom-sticky");
                $(".left-side-menu-wrapper").css({
                    "visibility": "visible",
                    "opacity": "1"
                });
                // $(".first-content-inner-wrapper").css({
                //     "padding-top": "120px"
                // });
    
            } else {
                $(".sticky-tab-section").removeClass("bottom-sticky");
                $(".left-side-menu-wrapper").css({
                    "visibility": "hidden",
                    "opacity": "0"
                });
                // $(".first-content-inner-wrapper").css({
                //     "padding-top": "0px"
                // });
            }
    
            if ($(document).scrollTop() >= 1350) {
                $(".left-side-menu-wrapper").css({
                    "visibility": "visible",
                    "opacity": "1"
                });
    
            } else {
                $(".left-side-menu-wrapper").css({
                    "visibility": "hidden",
                    "opacity": "0"
                });
            }
          }

          if ($(window).width() <= 414) {
            if ($(document).scrollTop() >= 1170) {
                $(".sticky-tab-section").addClass("bottom-sticky");
                $(".left-side-menu-wrapper").css({
                    "visibility": "visible",
                    "opacity": "1"
                });
                // $(".first-content-inner-wrapper").css({
                //     "padding-top": "120px"
                // });
    
            } else {
                $(".sticky-tab-section").removeClass("bottom-sticky");
                $(".left-side-menu-wrapper").css({
                    "visibility": "hidden",
                    "opacity": "0"
                });
                // $(".first-content-inner-wrapper").css({
                //     "padding-top": "0px"
                // });
            }
    
            if ($(document).scrollTop() >= 1170) {
                $(".left-side-menu-wrapper").css({
                    "visibility": "visible",
                    "opacity": "1"
                });
    
            } else {
                $(".left-side-menu-wrapper").css({
                    "visibility": "hidden",
                    "opacity": "0"
                });
            }
          }
         



       

    });
    // Home Menu 
    $('.menu-dots').click(function () {
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
    $('.cross').click(function () {
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
    $('.news-menu-dots').click(function () {
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
    $('.news-cross').click(function () {
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
    $('.acc-top').click(function () {
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




    // Change Active Class 
    $('.stickytabul li a').click(function () {
        $('.stickytabul li a').removeClass('sticky-tab-active');
        $(this).addClass('sticky-tab-active');
    });
    // Change Active Class 

    // Side menu active class 
    $('.left-side-menu-wrapper a').click(function () {
        $('.left-side-menu-wrapper a').removeClass('sideactive');
        $(this).addClass('sideactive');
    });
    // Side menu active class 

    // Select Active Class 
    $('#ul-list li').click(function () {
        $('#ul-list li').removeClass('selectactive');
        $(this).addClass('selectactive');
    });
    // Select Active Class 


});
//    setTimeout(function(){     
//     $('#preloader').fadeOut();
//     $('#preloader').delay(150).fadeOut('slow'); 
// }, 3000);

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


 






 // Outside click hide select box 
//  $(document).click(function(e){
//     $("#ul-list").removeClass("select-hide");
//     });
// Outside click hide select box 


$("#footer-left-radio").click(function(){
    $("#footer-investor").css({
        "display": "block"
    });
    $("#footer-company").css({
        "display": "none"
    });
});

$("#footer-right-radio").click(function(){
    $("#footer-investor").css({
        "display": "none"
    });
    $("#footer-company").css({
        "display": "block"
    });
});


// Contact form choose file 
$("#contact-radio-left").click(function(){
    $("#company-name").css({
        "display": "none"
    });
    $(".filefieldwrapper").css({
        "display": "none"
    });
});
$("#contact-radio-right").click(function(){
    $("#company-name").css({
        "display": "block"
    });
    $(".filefieldwrapper").css({
        "display": "block"
    });
});



$("form").on("change", ".file-upload-field", function(){
    $(this).parent(".file-upload-wrapper").attr("data-text",$(this).val().replace(/.*(\/|\\)/,''));
})
// Contact form choose file 