$(document).ready(function(){
	var scrollLink = $('.scroll');

	// Smoothscroll
	scrollLink.click(function(e){
		e.preventDefault();
		$('body,html').animate({
			scrollTop: $(this.hash).offset().top
		}, 1500)
	});

	// Active link switching
	$(window).scroll(function(){   //When ever scrolling occur this function will run
		var scrollbarLocation = $(this).scrollTop();	// Calculating the location of scrollbar

		scrollLink.each(function(){		// For each link we click or scroll to, this function will run

			var sectionOffset = $(this.hash).offset().top;	// Calculation the location of section from top

			if ( sectionOffset <= scrollbarLocation ) {

				$(this).parent().addClass('active');
				$(this).parent().siblings().removeClass('active');
			}

		});
	});
});