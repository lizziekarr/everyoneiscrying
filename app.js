(function(){

alert('hi')

if (jQuery) {
alert(“jquery is loaded”);
} else {
alert(” Not loaded”);
}

$(document).ready(function(){
  console.log('hi')
  alert('hi')
  //geolocation event handler
  $('button').on('click', function(){
    alert('works')
    $(this).fadeOut();
  });

});

$(window).scroll(function(){

console.log('hi')

});

})();




//credits: Andrew, Sheepduh, Rich Davis
