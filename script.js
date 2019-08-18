$(document).ready(function(){
  
  // jQuery methods go here...
  $("#cv").click(function(){
    alert("Please Contact muhammadtai1@hotmail.com for a copy of a CV");
  });

  
  $("#scrolldown").click(function(){
    $("html, body").animate({
        scrollTop: $("#projectview").offset().top
    }, 2000);
  });

  $(".border0").hover(function(){
    $(this).css({'border-color': '#EF5350'})
    }, function() {
      $(this).css({'border-color': '#566573'})
    }
  )

  $(".border1").hover(function(){
    $(this).css({'border-color': '#42A5F5'})
    }, function() {
      $(this).css({'border-color': '#566573'})
    }
  )

  $(".border2").hover(function(){
    $(this).css({'border-color': '#26A69A'})
  }, function(){
    $(this).css({'border-color': '#566573'})
    }
  )

  $(".border3").hover(function(){
    $(this).css({'border-color': '#FFA726'})
  }, function(){
    $(this).css({'border-color': '#566573'})
    }
  )
  
  $(window).scroll(function(){
    $(".Project").each(function(index){
      //offset().top is the top postion relative to document and outerheight is elemnt height (including margin)
      var half_of_element = $(this).offset().top + ($(this).outerHeight() / 2)
      //window.scrolltop is the diffrence of pixels from document height to window height
      //add to window height to find bottom postion
      var bottom_of_window = $(window).scrollTop() + $(window).height()

      if( bottom_of_window > half_of_element ){
          $(this).animate({'margin-top': '4em'}, 1000);
      }
    });
  });
  


});
