jQuery(document).ready(function($){




	/************** Scroll Navigation *********************/
	$('.navigation').singlePageNav({
        currentClass : 'active',
        filter: ':not(.external)'
    });


	/************** FlexSlider *********************/
    $('.flexslider').flexslider({
	    animation: "fade",
	    directionNav: false
	});


    /************** Responsive Navigation *********************/

	$('.menu-toggle-btn').click(function(){
        $('.responsive-menu').stop(true,true).slideToggle();
    });

    var i = 0;
    var txt1 = 'ADITYA SEHGAL'; /* The text */
    var txt2 = 'Welcome to My Portfolio Website'; /* The text */
    var speed = 100; /* The speed/duration of the effect in milliseconds */
    
    function typeWriter() {
        if (i < txt1.length) {
            document.getElementById("typewriter").innerHTML += txt1.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }
    typeWriter();

});