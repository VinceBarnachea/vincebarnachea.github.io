jQuery( window ).on("load", function() {


    var footerHeight = jQuery('.section-eight').outerHeight(true);
    jQuery('.contact-section').css({
        'margin-bottom' : footerHeight
    });  

    jQuery('.section-two').css({
        'margin-top' : '100vh'
    });
    setTimeout(function(){
        jQuery('.loader-container').css({
            'top':'-100%'
        });
        jQuery('.loading-text').text('Loading Complete!');
        jQuery('html').css({
            'overflow':'auto'
        });
    },5000);

    if(jQuery(window).width()>768){
        setTimeout(function () {
            jQuery('.front-black').css({
                 'left': '0'
            });
    
     
         }, 5500);
        setTimeout(function () {
           jQuery('.navbar').css({
                'top': '0'
           });
        }, 7800);

        setTimeout(function () {

            jQuery('.front-my-image').css({
                'height': '25rem'
           });
      
          
         }, 6700);
    }
    else{
        setTimeout(function () {
            jQuery('.front-black').css({
                 'top':'0',
                 'height': '20%'

            });
    
     
         }, 5500);

         setTimeout(function () {
            jQuery('.navbar').css({
                 'top': '0'
            });
         }, 8000);
         
         setTimeout(function () {

            jQuery('.front-my-image').css({
                'height': '10rem'
           });
      
          
         }, 6700);
    }


    setTimeout(function () {

        jQuery('.front-cta-container,.header-hello').css({
             'opacity' : '1',
             'transform': 'translateY(0)'
        });
        
      
     }, 7000);

     setTimeout(function () {

        jQuery('.front-soc-icon').css({
             'opacity' : '1',
             'transform': 'translateY(0)'
        });
  
      
     }, 7800);



     setTimeout(function () {

        jQuery('.front-image-offset').css({
            'opacity': '1'
       });
      


      
     }, 8000);



   


});

jQuery(document).ready(function() {
    console.log('Hello Developers!');
    
    jQuery('.burger-container').click(function(){
        jQuery('.navbar').toggleClass('show-slide');
        if($('.navbar').hasClass('show-slide')){
            jQuery('.burger-line').css({
                'background' : '#fff'
            });
			setTimeout(() => {
				$('.links').css({
					'animation':'slideLeft 0.5s ease-in-out 1 forwards',
				});
			}, 400);
			setTimeout(() => {
				$('.navbar-background').css({
					'animation':'slideDown 0.3s ease-in-out 1 forwards',
				});
			}, 0);
		}else{
			setTimeout(() => {
				$('.links').css({
					'animation':'slideRight 0.5s ease-in-out 1 forwards',
				});
			}, 0);
			setTimeout(() => {
				$('.navbar-background').css({
					'animation':'slideUp 0.5s ease-in-out 1 forwards',
				});
			}, 400);
		}
    });

    if($(window).width()<768){
		jQuery('.header-links').click(function(){
			jQuery('.navbar').removeClass('show-slide');
                setTimeout(() => {
                    $('.links').css({
                        'animation':'slideRight 0.5s ease-in-out 1 forwards',
                    });
                }, 0);
                setTimeout(() => {
                    $('.navbar-background').css({
                        'animation':'slideUp 0.5s ease-in-out 1 forwards',
                    });
                }, 400);
		});
	}





    var marginLeftPixels = jQuery('.navbar').css('margin-right');
    jQuery('.navbar-background').css('left','-'+marginLeftPixels);

    $('#loading-bar').animate({ width: '100%' }, 5000, function () {
        // Animation complete, you can add additional actions here
        $(this).text('Loading Complete!');
    });

    jQuery('a[href^="#"]').on('click', function(event) {
        var target = jQuery(jQuery(this).attr('href'));
  
        if (target.length) {
          event.preventDefault();
          jQuery('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
        }
      });
      

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
    
    var figure = jQuery('.video').hover(hoverVideo, hideVideo);

    function hoverVideo(e){
        jQuery('video', this).get(0).play();
    }

    function hideVideo(e){
        jQuery('video', this).get(0).pause();
    }


    // var paragraph = $('.certificate-des');
    // var readMoreBtn = $('.read-more-btn');
    // var words = paragraph.text().split(' ');

    // // Display only the first 10 words
    // paragraph.text(words.slice(0, 10).join(' '));

    // // Show "Read More" button if there are more than 10 words
    // if (words.length > 10) {
    //   readMoreBtn.show();
    // }

    // // Toggle between displaying full paragraph and truncated version
    // readMoreBtn.click(function() {
    //   if (paragraph.css('overflow') === 'hidden') {
    //     paragraph.css({ overflow: 'visible', whiteSpace: 'normal' });
    //     readMoreBtn.text('Read Less');
    //   } else {
    //     paragraph.css({ overflow: 'hidden', whiteSpace: 'normal' });
    //     readMoreBtn.text('Read More');
    //   }
    // });


    // Calculate the total height of the document
    var docHeight = jQuery(document).height();
    

    var offset = 100;
    // Bind the scroll event to the window
    jQuery(window).scroll(function() {
        var scrollTop = jQuery(window).scrollTop();
  

        // Add/remove class based on scroll position
        jQuery('section').each(function() {
            var target = jQuery(this).offset().top - offset;
            var id = jQuery(this).attr('id');

            if (scrollTop >= target) {
                jQuery('nav .links .mobile-nav-contact-container').removeClass('active');
                jQuery('nav .links .mobile-nav-contact-container:has(a[href="#' + id + '"])').addClass('active');
            }
        });






        // Calculate the current scroll position
      
        
        // Calculate the scroll percentage
        var scrollPercent = (scrollTop / (docHeight - jQuery(window).height())) * 100;
        
        // Update the progress bar width
        jQuery('.progress-bar').css('width', scrollPercent + '%');



       
        if(scrollTop > jQuery('.section-two').offset().top - (jQuery(window).height()/3)){
            if($(window).width()>768){
                jQuery('.navbar-background').css({
                    'top' : 0
                });
            }

            jQuery('.header-cta').css({
                'color' : '#ffffff',
                'background': '#00003b'
            });
            jQuery('.header-cta').addClass('px-8 py-2');
            if (scrollTop + jQuery(window).height() == jQuery(document).height()) {
                jQuery('.header-cta').css({
                    'color' : '#111113',
                    'background': 'transparent',
                    'font-weight' : 'bold'

                });
                jQuery('.header-cta').removeClass('px-8 py-2');
                jQuery('.cert').removeClass('active');

              }
              else{
                jQuery('.header-cta').css({
                    'color' : '#ffffff',
                    'background': '#00003b',
                    'font-weight' : 'normal'
                });
                jQuery('.header-cta').addClass('px-8 py-2');
                
              }
        }else{
            jQuery('.navbar-background').css({
                'top' : '-'+100+'%'
            });
            if($(window).width()>768){
                jQuery('.header-cta').css({
                    'color' : '#111113',
                    'background': 'transparent'
                });
            }else{
                jQuery('.header-cta').css({
                    'color' : '#111113',
                    'background': 'transparent'
                });
            }

            jQuery('.header-cta').removeClass('px-8 py-2');
        }

        if(scrollTop > jQuery('.section-six').offset().top - (jQuery(window).height()/1.1)){
            console.log('Triggered');
            jQuery('.section-one').css({
                'display':'none'
            });
            jQuery('.section-eight').css({
                'display':'block'
            });
            var jQuerysections = jQuery('.section-six');
            var jQuerywindow = jQuery(window);
            var windowHeight = jQuerywindow.height();
            var totalHeight = jQuerysections.length * windowHeight;

            if($(window).width()>1024){
                var scrollPercentage = ((jQuerywindow.scrollTop() / totalHeight) * 100)-100;
                console.log(scrollPercentage);
                jQuery('#never').css({
                    'transform' : "translateX("+scrollPercentage +'px)'
                });
                jQuery('#stop').css({
                    'transform' : "translateX(-"+scrollPercentage +'px)'
                });
                jQuery('#learning').css({
                    'transform' : "translateX("+scrollPercentage +'px)'
                });
            }else{
                var scrollPercentage = ((jQuerywindow.scrollTop() / totalHeight) * 100)-800;
                console.log(scrollPercentage);
                jQuery('#never').css({
                    'transform' : "translateX("+scrollPercentage +'px)'
                });
                jQuery('#stop').css({
                    'transform' : "translateX(-"+scrollPercentage +'px)'
                });
                jQuery('#learning').css({
                    'transform' : "translateX("+scrollPercentage +'px)'
                });
            }
            
        }
        else{
            jQuery('.section-one').css({
                'display':'flex'
            });
            jQuery('.section-eight').css({
                'display':'hidden'
            });
        }


        if(scrollTop > jQuery('.section-three').offset().top){
            jQuery('.burger-line').css({
                'background' : '#00003b'
            });
            jQuery('.navbar-background').css({
                'top' : '0'
            });
            jQuery('.burger-container').click(function(){
                if($('.navbar').hasClass('show-slide')){
                    jQuery('.burger-line').css({
                        'background' : '#fff'
                    });
                }else{
                    jQuery('.burger-line').css({
                        'background' : '#00003b'
                    });
                }
            });
        }else{
            jQuery('.burger-line').css({
                'background' : '#fff'
            });
            jQuery('.navbar-background').css({
                'top' : '-100%'
            });
            jQuery('.burger-container').click(function(){
                if($('.navbar').hasClass('show-slide')){
                    jQuery('.burger-line').css({
                        'background' : '#fff'
                    });
                }else{
                    jQuery('.burger-line').css({
                        'background' : '#fff'
                    });
                }
            });
        }


    });



    

    var jQuerybody = jQuery('body, html');
    jQuery('#home-nav').click(function() {
        jQuerybody.animate({ scrollTop: 0 }, '1500');
    });

   



});