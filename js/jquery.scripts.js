(function ($) {
    $(document).ready( function(e) {
	       
		   $('#nav-panel').click( function( event )
			{
				var tgElement = $(event.target).html();
				var dest = "";
				if( tgElement != "home" )
				   dest = "#" + tgElement + "-header"; 
				else
				   dest = "#nav-panel";
				   
				$('html, body').animate({
                   scrollTop: $( dest ).offset().top }, 2000 );
			});
	});
})(jQuery);