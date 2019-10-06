
$(document).ready(function(){
  projectSlide()
  console.log("ready")

  $(".Name").addClass("Visible")
  
  //$(".App").hide();
	
  //$(window).on('load', function () {
	//console.log("loaded")
    /*setTimeout(function(){
		console.log("timeout")

	},1000)*/
	//$(".Loader").fadeOut('fast');
	//$(".App").show();
	//$("body").removeClass("Hidden");
  //});
  
  
  // jQuery methods go here...
  $("#cv").click(function(){
    alert("Please Contact muhammadtai1@hotmail.com for a copy of a CV");
  });

  $("#scrolldown").click(function(){
    $("html, body").animate({
        scrollTop: $("#projectview").offset().top
    }, 2000);
  });

  $(".border-red").hover(function(){
    $(this).css({'border-color': '#EF5350'})
    $(".movie-background").css({'filter': 'none', 'transition': '1s filter linear'})
    }, function() {
      $(this).css({'border-color': '#566573'})
      $(".movie-background").css({'filter': 'grayscale(100%)', 'transition': 'none'})
    }
  )

  $(".border-blue").hover(function(){
    $(this).css({'border-color': '#42A5F5'})
    $(".api-background").css({'filter': 'none', 'transition': '1s filter linear'})
    }, function() {
      $(this).css({'border-color': '#566573'})
      $(".api-background").css({'filter': 'grayscale(100%)', 'transition': 'none'})
    }
  )

  $(".border-teal").hover(function(){
    $(this).css({'border-color': '#26A69A'})
    $(".deck-background").css({'filter': 'none', 'transition': '1s filter linear'})
  }, function(){
    $(this).css({'border-color': '#566573'})
    $(".deck-background").css({'filter': 'grayscale(100%)', 'transition': 'none'})
    }
  )

  $(".border-orange").hover(function(){
    $(this).css({'border-color': '#FFA726'})
    $(".iot-background").css({'filter': 'none', 'transition': '1s filter linear'})
  }, function(){
    $(this).css({'border-color': '#566573'})
    $(".iot-background").css({'filter': 'grayscale(100%)', 'transition': 'none'})
    }
  )


  $(".border-purple").hover(function(){
    $(this).css({'border-color': '#8E44AD'})
    $(".pinterest-background").css({'filter': 'none', 'transition': '1s filter linear'})
  }, function(){
    $(this).css({'border-color': '#566573'})
    $(".pinterest-background").css({'filter': 'grayscale(100%)', 'transition': 'none'})
    }
  )

  function projectSlide(){
    $(".Project").each(function(index){
      //offset().top is the top postion relative to document and outerheight is elemnt height (including margin)
      var half_of_element = $(this).offset().top + ($(this).outerHeight() / 2)
      //var top_of_element = $(this).offset().top
      //window.scrolltop is the diffrence of pixels from document height to window height
      //add to window height to find bottom postion
      var bottom_of_window = $(window).scrollTop() + $(window).height()

      if( bottom_of_window > half_of_element){
          //$(this).animate({'margin-top': '4em'}, 1000);
          $(this).addClass('Visible slide-up');
      }
    });
  }
  
  $(window).scroll(()=>projectSlide());
  


});
