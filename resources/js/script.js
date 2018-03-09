$(document).ready(function(){

/*---------------------------------------------------
                    MENU FLOAT LEFT
----------------------------------------------------*/

$(".js--waypoint-infos").waypoint(function(direction){
  if (direction=="down"){
    $("#myTopnav").addClass("topnav-right");
  } else {
    $("#myTopnav").removeClass("topnav-right");
  }
})

/*---------------------------------------------------
                    FIN MENU FLOAT LEFT
----------------------------------------------------*/

/*---------------------------------------------------
                    EFFET SCROLL
----------------------------------------------------*/

$(".js-scroll-about").click(function() {
$("html, body").animate({scrollTop: $(".js-section-about").offset().top}, 2000);
})

$(".js-scroll-forfait").click(function() {
$("html, body").animate({scrollTop: $(".js-section-forfait").offset().top}, 2000);
})

$(".js-scroll-villes").click(function() {
$("html, body").animate({scrollTop: $(".js-section-villes").offset().top}, 2000);
})

$(".js-scroll-mobile").click(function() {
$("html, body").animate({scrollTop: $(".js-section-mobile").offset().top}, 2000);
})

$(".js-scroll-avis").click(function() {
$("html, body").animate({scrollTop: $(".js-section-avis").offset().top}, 2000);
})

$(".js-scroll-contact").click(function() {
$("html, body").animate({scrollTop: $(".js-section-contact").offset().top}, 2000);
})

/*---------------------------------------------------
                    FIN EFFET SCROLL
----------------------------------------------------*/


});
