$(document).ready(function() {
  //Navbar hamburger init
  $(".button-collapse").sideNav();
  // parallax init
  $('.parallax').parallax();

  $('.pushpin').pushpin({
    top: 850,
    offset: 0
  });

  $('ul.tabs').tabs();

  $('ul.tabs').tabs('select_tab', 'tab_id');

  if ($('#tabs-swipe-demo').length) {
    $('#tabs-swipe-demo').tabs({ 'swipeable': true });
  }

  if ($('#scale-demo').length &&
  $('#scale-demo-trigger').length) {
$('#scale-demo-trigger').click(function() {
  $('#scale-demo').toggleClass('scale-out');
});
}
$('.carousel.carousel-slider').carousel({fullWidth: true});
    $('.carousel').carousel();
    $('.slider').slider();
  
});