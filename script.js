
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

  if ($(window).width() >= 576){
    $(".border-red").hover(function(){
      $(".movie-background").css({'filter': 'none', 'transition': '1s filter linear'})
      }, function() {
        $(".movie-background").css({'filter': 'grayscale(100%)', 'transition': 'none'})
      }
    )

    $(".border-blue").hover(function(){
      $(".api-background").css({'filter': 'none', 'transition': '1s filter linear'})
      }, function() {
        $(".api-background").css({'filter': 'grayscale(100%)', 'transition': 'none'})
      }
    )

    $(".border-teal").hover(function(){
      $(".deck-background").css({'filter': 'none', 'transition': '1s filter linear'})
    }, function(){
      $(".deck-background").css({'filter': 'grayscale(100%)', 'transition': 'none'})
      }
    )

    $(".border-orange").hover(function(){
      $(".iot-background").css({'filter': 'none', 'transition': '1s filter linear'})
    }, function(){
      $(".iot-background").css({'filter': 'grayscale(100%)', 'transition': 'none'})
      }
    )


    $(".border-purple").hover(function(){
      $(".pinterest-background").css({'filter': 'none', 'transition': '1s filter linear'})
    }, function(){
      $(".pinterest-background").css({'filter': 'grayscale(100%)', 'transition': 'none'})
      }
    )
  }
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
