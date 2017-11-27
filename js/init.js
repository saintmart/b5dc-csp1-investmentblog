$(document).ready(function() {

	$(".button-collapse").sideNav();

    $('.slider').slider({fullWidth: true});

    $('.carousel.carousel-slider').carousel({
    	fullWidth: true,
    	duration: 500,
    });	

    $('.carousel').carousel();
        setInterval(function() {
			    $('.carousel').carousel('next');
        }, 20000); 
});