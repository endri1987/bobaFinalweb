/* main.js */


$( "#footer-location" ).click(function() {
  $("#map-wrapper").toggleClass( "open-map" );
  $("#team-wrapper").removeClass( "open-team" );
  /*$(".footer-location").toggleClass( "d-none" );
  $(".location-close").toggleClass( "d-block" );*/
});


$( "#footer-team" ).click(function() {

  $("#team-wrapper").toggleClass( "open-team" );
  $("#team-wrapper").toggleClass( "d-block" );
  $("#map-wrapper").removeClass( "open-map" );
  /*$(".footer-location").toggleClass( "d-none" );
  $(".location-close").toggleClass( "d-block" );*/
});

