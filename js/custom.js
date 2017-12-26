(function($) {
	
	/* Go up */
	jQuery(window).scroll(function () {
		if(jQuery(this).scrollTop() > 300 ) {
	    	jQuery(".go-up").css("bottom","0px");
		}
		else {
	   		jQuery(".go-up").css("bottom","-60px");
		}
	});
		jQuery(".go-up").click(function(){
		jQuery("html,body").animate({scrollTop:0},500);
		return false;
	 });
 

	/* Slime Menu */
	$('.slimmenu').slimmenu({
		resizeWidth: '991',
		collapserTitle: '',
		animSpeed:'medium',
		indentChildren: true,
		childrenIndenter: '<i class="fa fa-chevron-right"></i>'
	});
	// Close Effect Menu
	$(function() {
		$('.collapse-button').click(function() {
			$('.collapse-button').toggleClass('close-menu');
		});
	});
	
	// FEATURED
    $(document).ready(function() {
    	var owl = $("#Featured");
		owl.owlCarousel({
		stopOnHover : true,
		navigation:true,
		autoPlay : 4000,
		autoHeight : true,
		items :5, 
		itemsDesktop : [1200,4], //5 items between 1000px and 901px
		itemsDesktopSmall : [900,2], // 3 items betweem 900px and 601px
		itemsTablet: [600,1], //2 items between 600 and 0;
		itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
	});

	// Custom Navigation Events
    	$(".next").click(function(){ owl.trigger('owl.next');      })
      	$(".prev").click(function(){ owl.trigger('owl.prev');      })
		$(".play").click(function(){ owl.trigger('owl.play',1000); })
		$(".stop").click(function(){ owl.trigger('owl.stop');      })
    });
	
	// TESTIMONIALS
	$(document).ready(function() {
    	var owl = $("#Testimonials");
		owl.owlCarousel({
			stopOnHover : true,
			items: 4,
			navigation: true,
			autoPlay : 4000,
			autoHeight : true,
			items :1, 
			itemsDesktop : [1200,1], //5 items between 1000px and 901px
			itemsDesktopSmall : [900,1], // 3 items betweem 900px and 601px
			itemsTablet: [600,1], //2 items between 600 and 0;
			itemsMobile : false // itemsMobile disabled - inherit from itemsTablet option
		});

	// Custom Navigation Events
    	$(".next").click(function(){ owl.trigger('owl.next');      })
      	$(".prev").click(function(){ owl.trigger('owl.prev');      })
		$(".play").click(function(){ owl.trigger('owl.play',1000); })
		$(".stop").click(function(){ owl.trigger('owl.stop');      })
    });
	
	
	
	/* --------------------------------------------------
	 * document ready
	 * --------------------------------------------------*/
	jQuery(document).ready(function() {
		$("body").show();
		jQuery(window).on("scroll", function() {
			/* fade base scroll position */
			// custom page with background on side
			jQuery('.side-bg').each(function() {
				jQuery(this).find(".image-container").css("height", jQuery(this).find(".image-container").parent().css("height"));
			});
			/* go to anchor */
		});
	});
	
	/* WOW */
	wow = new WOW(
      {
        animateClass: 'animated',
        offset:       100,
        callback:     function(box) {
          console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
        }
      }
    );
    wow.init();
	
	/* END WOW */
	
	

})(jQuery);
