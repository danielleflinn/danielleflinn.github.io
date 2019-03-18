// Everything OK?
console.log('OK');

//index.html header animation

$('.arrow-down').click(function() {
  
  $('.logo-wrapper').addClass('enter-site');
  $('.tile').addClass('fade');

});

// responsive nav

$(document).ready(function() {
	   
  // JQUERY NAV TOGGLE
  $('#menu').bind('click',function(event){
      $('.main-nav').slideToggle();
  });

  $(window).resize(function(){  
      var w = $(window).width();  
      if(w > 768) {  
          $('.main-nav').removeAttr('style');  
      }  
  });
});

// Light Gallery

$('.project-grid').lightGallery({
    selector: 'a',
    thumbnail: false,
    download: false,
    autoplay: false,
    share: false,
    autoplayControls: false,
    mode: 'lg-slide'
});

// footer date

var today = new Date();
var year = today.getFullYear();

console.log(today);

$('.year').text(year);
