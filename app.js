(function(){

$(document).ready(function(){


$(window).scroll(function(){

  var wScroll = $(this).scrollTop();

  $('.pic-two').css({
    'transform': 'translate(-'+ wScroll /20 +'%, 0)'
  });

  $('.pic-three').css({
    'transform': 'translate('+ wScroll/10 +'%, '+ wScroll /10+'%)'
  });

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
  $('.is-goat').fadeOut();
  $('.creature').removeClass('active');
  $(this).addClass('active');
});

$('.cry').on('click', function(){
  $('.snacks').fadeOut();
  $('.crying').fadeIn();
  $('.is-goat').fadeOut();
  $('.creature').removeClass('active');
  $(this).addClass('active');
});
$('.goat').on('click', function(){
  $('.snacks').fadeOut();
  $('.crying').fadeOut();
  $('.is-goat').fadeIn();
  $('.creature').removeClass('active');
  $(this).addClass('active');
});

$('.sit').on('click', function(){
  $('.cartoons img').removeClass('is-framed');
  $('.cartoons img').removeClass('is-flipping');
  $('.cartoons').removeClass('is-disco');
  $('.cartoons img').removeClass('is-shrinking');
  $('.do').removeClass('active');
  $(this).addClass('active');
});

$('.flip').on('click', function(){
  $('.cartoons img').toggleClass('is-flipping');
  $('.sit').removeClass('active');
  $(this).toggleClass('active');
});

$('.disco').on('click', function(){
  $('.cartoons').toggleClass('is-disco');
  $('.sit').removeClass('active');
  $(this).toggleClass('active');
});

$('.framed').on('click', function(){
  $('.cartoons img').toggleClass('is-framed');
  $('.sit').removeClass('active');
  $(this).toggleClass('active');
});

$('.shrink').on('click', function(){
  $('.cartoons img').toggleClass('is-shrinking');
  $('.sit').removeClass('active');
  $(this).toggleClass('active');
});


});

})();
