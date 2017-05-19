(function(){

$(document).ready(function(){


$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  if(wScroll > $('.cartoons').offset().top - ($(window).height() / 1.2)) {
    $('.cartoons figure').each(function(i){
      setTimeout(function() {
      $('.cartoons figure').eq(i).addClass('is-showing');
    }, 150 * (i+1));
    });
  }

});

$('.eat').on('click', function(){
  $('.crying').fadeOut();
  $('.snacks').fadeIn();
});

$('.cry').on('click', function(){
  $('.snacks').fadeOut();
  $('.crying').fadeIn();
});
$('.goat').on('click', function(){
  $('.snacks').fadeOut();
  $('.crying').fadeOut();
  $('.is-goat').fadeIn();
});

$('.sit').on('click', function(){
  $('.cartoons img').removeClass('is-framed');
  $('.cartoons img').removeClass('is-flipping');
  $('.cartoons').removeClass('is-disco');
});

$('.flip').on('click', function(){
  $('.cartoons img').toggleClass('is-flipping');
});

$('.ferris').on('click', function(){
  $('.cartoons').toggleClass('is-ferris');
});

$('.disco').on('click', function(){
  $('.cartoons').toggleClass('is-disco');
});

$('.framed').on('click', function(){
  $('.cartoons img').toggleClass('is-framed');
});


});

})();
