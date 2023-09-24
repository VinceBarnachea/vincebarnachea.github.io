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
    });
});