// Everything OK?
console.log('OK');

//heder animation

$('.arrow-down').click(function() {
  
  $('.logo-wrapper').addClass('enter-site');
  $('.tile').addClass('fade');

});

// Light Gallery

$('.project-grid').lightGallery({
    selector: 'a',
    thumbnail: false,
    download: false,
    autoplay: false,
    share: false,
    autoplayControls: false,
    mode: 'lg-scale-up'
});

// footer date

var today = new Date();
var year = today.getFullYear();

console.log(today);

$('.year').text(year);
