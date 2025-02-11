$(document).ready(function() {
  $(document).scroll(function() {
    // calculate half the viewport
    var compensation = $(window).height() / 2;
    // calculate where the sections start
    var home = ($('.landingpage').offset().top) - compensation;
    var help = ($('.wecanhelp').offset().top) - compensation;
    var statement = ($('.internet-statement').offset().top) - compensation;
    var projects = ($('.projects').offset().top) - compensation;
    var knowmore = ($('.know-more-about').offset().top) - compensation;
    var footer = ($('footer').offset().top) - compensation;
    var scrollPos = $(document).scrollTop();
    
    
    // Apply text changes
    if (scrollPos >= help && scrollPos < statement) {
      $('.section-title-underlay').text('We can help');
    }
    else if (scrollPos >= statement && scrollPos < projects) {
      $('.section-title-underlay').text('The internet');  
    }
    else if (scrollPos >= projects && scrollPos < knowmore) {
      $('.section-title-underlay').text('Work');  
    }
    else if (scrollPos >= knowmore && scrollPos < footer) {
      $('.section-title-underlay').text('Contact');  
    }
    else {
      $('.section-title-underlay').text('');  
    } 
  }); // close scroll function
}); // close document ready
