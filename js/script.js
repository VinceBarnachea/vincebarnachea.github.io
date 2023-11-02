jQuery( window ).on("load", function() {
    
    var footerHeight = $('.section-eight').outerHeight(true);
    jQuery('.section-seven').css({
        'margin-bottom' : footerHeight
    });  

    jQuery('.section-two').css({
        'margin-top' : '100vh'
    });  
    setTimeout(function () {
        $('.front-black').css({
             'left': '0'
        });

 
     }, 10);
    setTimeout(function () {
       $('.navbar').css({
            'top': '0'
       });

       

     
    }, 1000);

    setTimeout(function () {

        $('.front-cta-container,.header-hello').css({
             'opacity' : '1',
             'transform': 'translateY(0)'
        });
        
      
     }, 1070);

     setTimeout(function () {

        $('.front-soc-icon').css({
             'opacity' : '1',
             'transform': 'translateY(0)'
        });
  
      
     }, 2000);


     setTimeout(function () {

        $('.front-my-image').css({
            'height': '80%'
       });
  
      
     }, 1700);


});

$(document).ready(function() {
    // Calculate the total height of the document
    var docHeight = $(document).height();
    
    // Bind the scroll event to the window
    $(window).scroll(function() {
        // Calculate the current scroll position
        var scrollTop = $(window).scrollTop();
        
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
                'visibility':'hidden'
            });
            var $sections = $('.section-six');
            var $window = $(window);
            var windowHeight = $window.height();
            var totalHeight = $sections.length * windowHeight;

            var scrollPercentage = (($window.scrollTop() / totalHeight) * 100)-500;
            console.log(scrollPercentage);
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
                'visibility':'visible'
            });
        }
    });

    var $body = $('body, html');
    $('#home-nav').click(function() {
        $body.animate({ scrollTop: 0 }, '1500');
    });
});