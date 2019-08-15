$(document).ready(function(){

  // jQuery methods go here...
  $("#cv").click(function(){
    alert("Please Contact muhammadtai1@hotmail.com for a copy of a CV");
  });

  
  $("#scrolldown").click(function(){
    $('html, body').animate({
        scrollTop: $("#projectview").offset().top
    }, 2000);
  });

});