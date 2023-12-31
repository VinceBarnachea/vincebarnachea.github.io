jQuery( window ).on("load", function() {

    
    var footerHeight = $('.section-eight').outerHeight(true);
    jQuery('.contact-section').css({
        'margin-bottom' : footerHeight
    });  

    jQuery('.section-two').css({
        'margin-top' : '100vh'
    });
    setTimeout(function(){
        jQuery('.loader-container').css({
            'display':'none'
        });
        jQuery('html').css({
            'overflow':'auto'
        });
    },5000);

    if(jQuery(window).width()>768){
        setTimeout(function () {
            $('.front-black').css({
                 'left': '0'
            });
    
     
         }, 5500);
        setTimeout(function () {
           $('.navbar').css({
                'top': '0'
           });
        }, 6000);

        setTimeout(function () {

            $('.front-my-image').css({
                'height': '50%'
           });
      
          
         }, 6700);
    }
    else{
        setTimeout(function () {
            $('.front-black').css({
                 'top':'0',
                 'height': '20%'

            });
    
     
         }, 5500);

         setTimeout(function () {
            $('.navbar').css({
                 'top': '0'
            });
         }, 6000);
         
         setTimeout(function () {

            $('.front-my-image').css({
                'height': '100%'
           });
      
          
         }, 6700);
    }


    setTimeout(function () {

        $('.front-cta-container,.header-hello').css({
             'opacity' : '1',
             'transform': 'translateY(0)'
        });
        
      
     }, 6070);

     setTimeout(function () {

        $('.front-soc-icon').css({
             'opacity' : '1',
             'transform': 'translateY(0)'
        });
  
      
     }, 7000);


    

     setTimeout(function () {

        $('.front-my-image').css({
            'border-radius': '50%'
       });


      
     }, 7200);

     setTimeout(function () {

        $('.front-image-offset').css({
            'opacity': '1'
       });
      


      
     }, 8000);



   


});

$(document).ready(function() {
    console.log('Hello Developers!');




    jQuery(".form-inputs").focus(function() {
        // Add has-value class to the label
        jQuery(this).siblings('label').addClass('has-value');
    })
    // blur input fields on unfocus + if has no value
    .blur(function() {
        // Set input current value
        var text_val = jQuery(this).val();
        // Check if input has value
        if (text_val === "") {
            // If current value is none, then remove has-value
            jQuery(this).siblings('label').removeClass('has-value');
        }
    });
    
    var figure = $('.video').hover(hoverVideo, hideVideo);

    function hoverVideo(e){
        $('video', this).get(0).play();
    }

    function hideVideo(e){
        $('video', this).get(0).pause();
    }



    // Calculate the total height of the document
    var docHeight = $(document).height();
    

    var offset = 100;
    // Bind the scroll event to the window
    $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
  

        // Add/remove class based on scroll position
        $('section').each(function() {
            var target = $(this).offset().top - offset;
            var id = $(this).attr('id');

            if (scrollTop >= target) {
                $('nav .links .mobile-nav-contact-container').removeClass('active');
                $('nav .links .mobile-nav-contact-container:has(a[href="#' + id + '"])').addClass('active');
            }
        });






        // Calculate the current scroll position
      
        
        // Calculate the scroll percentage
        var scrollPercent = (scrollTop / (docHeight - $(window).height())) * 100;
        
        // Update the progress bar width
        $('.progress-bar').css('width', scrollPercent + '%');



       
        if(scrollTop > jQuery('.section-two').offset().top - (jQuery(window).height()/3)){
            $('.navbar-background').css({
                'top' : 0
            });
            $('.header-cta').css({
                'color' : '#ffffff',
                'background': '#00003b'
            });
            $('.header-cta').addClass('px-8 py-2');
            if (scrollTop + $(window).height() == $(document).height()) {
                $('.header-cta').css({
                    'color' : '#111113',
                    'background': 'transparent',
                    'font-weight' : 'bold'

                });
                $('.header-cta').removeClass('px-8 py-2');
                $('.cert').removeClass('active');

              }
              else{
                $('.header-cta').css({
                    'color' : '#ffffff',
                    'background': '#00003b',
                    'font-weight' : 'normal'
                });
                $('.header-cta').addClass('px-8 py-2');
                $('.cert').addClass('active');
              }
        }else{
            $('.navbar-background').css({
                'top' : '-'+100+'%'
            });
            $('.header-cta').css({
                'color' : '#111113',
                'background': 'transparent'
            });
            $('.header-cta').removeClass('px-8 py-2');
        }

        if(scrollTop > jQuery('.section-six').offset().top - (jQuery(window).height()/1.1)){
            $('.section-one').css({
                'display':'none'
            });
            $('.section-eight').css({
                'display':'block'
            });
            var $sections = $('.section-six');
            var $window = $(window);
            var windowHeight = $window.height();
            var totalHeight = $sections.length * windowHeight;

            var scrollPercentage = (($window.scrollTop() / totalHeight) * 100)-500;
            $('#never').css({
                'right' : scrollPercentage +'%'
            });
            $('#stop').css({
                'left' : scrollPercentage +'%'
            });
            $('#learning').css({
                'right' : scrollPercentage +'%'
            });
        }
        else{
            $('.section-one').css({
                'display':'flex'
            });
            $('.section-eight').css({
                'display':'hidden'
            });
        }
    });

    var $body = $('body, html');
    $('#home-nav').click(function() {
        $body.animate({ scrollTop: 0 }, '1500');
    });

   
});